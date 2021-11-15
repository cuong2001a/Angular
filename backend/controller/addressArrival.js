import AddressArrival from '../models/addressArrival';
export const create = (req,res)=>{
    let a = new AddressArrival(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const list = (req,res)=>{
    AddressArrival.find()
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong tim thay diem di"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {addressArrivalId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await AddressArrival.findByIdAndUpdate({_id:addressArrivalId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc dia chi"
        })
    }
}
export const remove = async (req,res)=>{
    const {addressArrivalId} = req.params
    console.log(addressArrivalId);
    try {
        const remove = await AddressArrival.findByIdAndRemove({_id: addressArrivalId})
        res.json({
            remove,
            message: "Xóa địa chỉ thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc dia chi"
        })
    }
}
export const findOne = async (req,res)=>{
    const {addressArrivalId} = req.params
    const result = await AddressArrival.findById(addressArrivalId).exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong tim thay dia chi"
            })
        }
        res.json(data)
    })
}