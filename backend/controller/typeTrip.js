import TypeTrip from '../models/typeTrip';
export const create = (req,res)=>{
    let a = new TypeTrip(req.body);
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
    TypeTrip.find({})
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
    const {typeTripId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await TypeTrip.findByIdAndUpdate({_id:typeTripId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc loai ve"
        })
    }
}
export const remove = async (req,res)=>{
    const {typeTripId} = req.params
    try {
        const remove = await TypeTrip.findByIdAndRemove({_id: typeTripId})
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
    const  {typeTripId} = req.params
    const result = await TypeTrip.findById({_id:typeTripId})
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong thim thay loai chuyen tau"
            })
        }
        res.json(data)
    })
}