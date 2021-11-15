import AddressGo from '../models/addressGo';
export const create = (req,res)=>{
    let a = new AddressGo(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const findOneAddress = async (req, res) => {
    const { addressGoId } = req.params
    console.log("ID: ", req.params.addressGoId)

    try {
        const result = await DiemDen.findById({ _id: addressGoId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay diem den"
        })
    }

}
export const edit = async (req,res)=>{
    const {addressGoId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await AddressGo.findByIdAndUpdate({_id:addressGoId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc dia chi"
        })
    }
}
export const remove = async (req,res)=>{
    const {addressGoId} = req.params
    console.log(addressGoId);
    try {
        const remove = await AddressGo.findByIdAndRemove({_id: addressGoId})
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
export const list = (req,res)=>{
    AddressGo.find({})
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong tim thay dia diem"
            })
        }
        res.json(data)
    })
}