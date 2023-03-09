import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name:Yup.string().min(2).max(25).required("The field is mandatory.") ,
  email:Yup.string().email().required("Invalid email address.") ,
  password: Yup.string().min(6).required(),
  confirm_password:Yup.string().required("The field is mandatory.").oneOf([Yup.ref("password")],"Passwords must match") ,
  skills:Yup.string().min(1)
})