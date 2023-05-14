import InfoTicket from "../models/infoTicket"
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const cccdRegex = /^\d{12}$/
export const create = (req, res) => {
  const {nameUser, cmnd, phoneNumber, email, people, code} = req.body
  if (!nameUser) {
    return res.status(400).json({
      errors: "Vui lòng nhập họ tên",
    })
  } else if (nameUser?.length > 255) {
    return res.status(400).json({
      errors: "Họ và tên không được quá 255 kí tự",
    })
  } else if (phoneNumber?.length > 10) {
    return res.status(400).json({
      errors: "Số điện thoại không được quá 10 kí tự",
    })
  } else if (!emailRegexp.test(email)) {
    return res.status(400).json({
      errors: "Không đúng định dạng email",
    })
  } else if (!cccdRegex.test(cmnd)) {
    return res.status(400).json({
      errors: "Không đúng định dạng số chứng minh nhân dân",
    })
  } else if (!people) {
    return res.status(400).json({
      errors: "Vui lòng nhập số lượng người",
    })
  } else if (!code) {
    return res.status(400).json({
      errors: "Bạn chưa có mã số khách hàng",
    })
  } else {
    let a = new InfoTicket(req.body)
    a.save((err, data) => {
      if (err) {
        res.status(400).json({
          errors: "Không tạo được vé",
        })
      }
      res.json(data)
    })
  }
}
export const edit = async (req, res) => {
  const {infoTicketId} = req.params
  const updates = req.body
  const {nameUser, cmnd, phoneNumber, email, people, code} = updates
  if (nameUser) {
    if (nameUser === "") {
      return res.status(400).json({
        errors: "Không được bỏ trống họ tên",
      })
    } else if (nameUser?.length > 255) {
      return res.status(400).json({
        errors: "Không được bỏ trống họ tên",
      })
    }
  }
  if (phoneNumber) {
    if (phoneNumber?.length > 10) {
      return res.status(400).json({
        errors: "Số điện thoại không được quá 10 kí tự",
      })
    }
  }
  if (email) {
    if (!emailRegexp.test(email)) {
      return res.status(400).json({
        errors: "Không đúng định dạng email",
      })
    }
  }
  if (cmnd) {
    if (!cccdRegex.test(cmnd)) {
      return res.status(400).json({
        errors: "Không đúng định dạng số chứng minh nhân dân",
      })
    }
  }
  if (people) {
    if (people.length < 1) {
      return res.status(400).json({
        errors: "Số lượng người phải lớn hơn 1",
      })
    }
  }
  if (code) {
    return res.status(400).json({
      errors: "Không được cập nhật mã khách hàng",
    })
  }
  const option = {new: true}
  try {
    const edit = await InfoTicket.findByIdAndUpdate({_id: infoTicketId}, updates, option)
    res.send(edit)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: "Khong sua duoc thong tin  ve",
    })
  }
}
export const remove = async (req, res) => {
  const {infoTicketId} = req.params
  try {
    const remove = await InfoTicket.findByIdAndRemove({_id: infoTicketId})
    res.json({
      remove,
      message: "Xóa thong tin ve thành công ",
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: "Khong xoa duoc thong tin ve",
    })
  }
}
export const search = (req, res) => {
  let code = req.query.code ? req.query.code : ""
  let email = req.query.email ? req.query.email : ""
  InfoTicket.find({
    code: code,
    email: email,
  })
    .populate("train")
    .populate("trainCar")
    .populate("desk")
    .exec((err, ticket) => {
      if (err) {
        res.status(400).json({
          err: "khong tim thay",
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
          errors: "Khong them duoc ve list",
        })
      }
      res.json(data)
    })
}
export const findOne = async (req, res) => {
  const {infoTicketId} = req.params
  const result = await InfoTicket.findById({_id: infoTicketId}).exec((err, data) => {
    if (err) {
      res.status(400).json({
        error: "khong tim thay ve a",
      })
    }
    res.json(data)
  })
}
