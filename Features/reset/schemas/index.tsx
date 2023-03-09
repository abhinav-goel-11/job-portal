import * as Yup from 'yup';

export const resetSchema = Yup.object({
  password: Yup.string().min(6).required(),
  new_password:Yup.string().required("The field is mandatory.").oneOf([Yup.ref("password")],"Passwords must match")
})