import Train from '../models/train';
export const create = (req, res) => {
    let a = new Train(req.body);
    a.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const listRelated = (req, res) => {
    Train.find({})
        .populate("addressGo")
        .populate("addressArrival")
        .exec((err, train) => {
            if (err) {
                res.status(400).json({
                    error: "Products not found"
                })
            }
            res.json(train)
        })
}
export const edit = async (req, res) => {
    const { trainId } = req.params
    const updates = req.body
    const option = { new: true }
    try {
        const edit = await Train.findByIdAndUpdate({ _id: trainId }, updates, option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Khong sua duoc tau"
        })
    }
}
export const remove = async (req, res) => {
    const { trainId } = req.params
    try {
        const remove = await Train.findByIdAndRemove({ _id: trainId })
        res.json({
            remove,
            message: "Xóa tau thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "Khong xoa duoc tau"
        })
    }
}
export const search = async (req, res) => {
    const addressarrival = req.query.addressArrival ? req.query.addressArrival : ""
    const addressgo = req.query.addressGo ? req.query.addressGo : ""
    // const typetrip= req.query.typeTrip ? req.query.typeTrip : ""
    const tgDi = req.query.thoiGianDi ? req.query.thoiGianDi : ""
    const tgVe = req.query.thoiGianVe ? req.query.thoiGianVe : ""

    console.log(addressarrival)
    try {
        const list = await Train.find({
            thoiGianDi:{ $gte: (new Date(tgDi)).toDateString()},
            thoiGianVe:{$lte:(new Date(tgVe)).toDateString()},
            addressArrival : addressarrival,
            addressGo: addressgo
        })
            .populate("addressGo")
            .populate("addressArrival")
        res.json({
            list
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Khong tim thay  tau"
        })
    }

}
export const findOneTrain = async (req,res)=>{
    const {trainId} =req.params
    const result  = await Train.findById(trainId)
    .populate("addressArrival")
    .populate("addressGo")

    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                errors:"Khong tim thay chuyen tau"
            })
        }
        res.json(data)
    })

}