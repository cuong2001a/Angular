import TypeTicket from '../models/typeTicket';
export const create = (req,res)=>{
    let a = new TypeTicket(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc loai ve"
            })
        }
        res.json(data)
    })
}
export const list = (req, res) => {
    TypeTicket.find({})
    .populate("trainCar")
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong tim thay loai ve"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {typeTicketId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await TypeTicket.findByIdAndUpdate({_id:typeTicketId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc loai ve"
        })
    }
}
export const remove = async (req,res)=>{
    const {typeTicketId} = req.params
    try {
        const remove = await TypeTicket.findByIdAndRemove({_id: typeTicketId})
        res.json({
            remove,
            message: "Xóa loai ve thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc loai ve"
        })
    }
}
export const findOne = async (req,res)=>{
    const  {typeTicketId} = req.params
    const result = await TypeTicket.findById({_id:typeTicketId})
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong thim thay lai ve tau"
            })
        }
        res.json(data)
    })
}