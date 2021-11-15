import Desk from '../models/desk';
export const create = (req, res) => {
    let a = new Desk(req.body);
    a.save((err, data) => {
        if (err) {
            res.status(400).json({
                errors: "Khong them duoc loai ghe"
            })
        }
        res.json(data)
    })
}
export const findOneDesk = async (req, res) => {
    const { deskId } = req.params
    try {
        const result = await Desk.findById({ _id: deskId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay ghe"
        })
    }

}
export const edit = async (req, res) => {
    const { deskId } = req.params
    const updates = req.body
    const option = { new: true }
    try {
        const edit = await Desk.findByIdAndUpdate({ _id: deskId }, updates, option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Khong sua duoc ghe"
        })
    }
}
export const remove = async (req, res) => {
    const { deskId } = req.params
    try {
        const remove = await Desk.findByIdAndRemove({ _id: deskId })
        res.json({
            remove,
            message: "Xóa ghe thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "Khong xoa duoc ghe"
        })
    }
}
export const list = (req, res) => {
    Desk.find({})
        .populate("toaTau")
        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Khong tim thay dia chi"
                })
            }
            res.json(data)
        })
}
export const findDeskByTrainCar = async (req, res) => {
    const trainCarId = req.query.trainCarId ? req.query.trainCarId : ""
    try {
        const result = await Desk.find({ toaTau: trainCarId })
            .populate("toaTau")
        res.json(
            result
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Khong tim thay danh sach ghe cua toa nay"
        })
    }
}