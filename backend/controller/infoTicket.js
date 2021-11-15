import InfoTicket from '../models/infoTicket';
export const create = (req, res) => {
    let a = new InfoTicket(req.body);
    a.save((err, data) => {
        if (err) {
            res.status(400).json({
                errors: "Khong them duoc ve"
            })
        }
        res.json(data)
    })
}
export const edit = async (req, res) => {
    const { infoTicketId } = req.params
    const updates = req.body
    const option = { new: true }
    try {
        const edit = await InfoTicket.findByIdAndUpdate({ _id: infoTicketId }, updates, option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Khong sua duoc thong tin  ve"
        })
    }
}
export const remove = async (req, res) => {
    const { infoTicketId } = req.params
    try {
        const remove = await InfoTicket.findByIdAndRemove({ _id: infoTicketId })
        res.json({
            remove,
            message: "Xóa thong tin ve thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "Khong xoa duoc thong tin ve"
        })
    }
}
export const search = (req, res) => {
    let code = req.query.code ? req.query.code : ""
    let email = req.query.email? req.query.email:""
    console.log(code)
    InfoTicket.find({
        code: code,
        email: email
    })
    .populate("train")
    .populate('trainCar')
    .populate('desk')
    .exec((err, ticket)=>{
        if(err){
            res.status(400).json({
                err: "khong tim thay"
            })
    }
        res.json(ticket)
    })
}
export const list = (req, res) => {
    InfoTicket.find({})
        .populate("train")
        .populate("trainCar")
        .populate("desk")

        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    errors: "Khong them duoc ve list"
                })
            }
            res.json(data)
        })
}
export const findOne = async (req, res) => {
    const { infoTicketId } = req.params
    const result = await InfoTicket.findById({ _id: infoTicketId })
        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "khong tim thay ve a"
                })
            }
            res.json(data)
        })
}
