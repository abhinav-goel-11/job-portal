import Banner from "@/components/Banner"
import { useFormik } from "formik";
import Input from "@/components/Input";
import Button from "@/components/Button"
import { resetSchema } from "@/Features/reset/schemas";

const initialValues = {
    password:"",
    new_password:""
}
const Reset = () => {
    const {errors,values,handleChange,handleSubmit,touched} = useFormik({
        initialValues,
        validationSchema:resetSchema,
        onSubmit:(values,actions) => {

            actions.resetForm();
        }
    })
  return (
    <Banner isLoginBtnReq={true} className="h-[60vh] relative">

        <div className="bg-white rounded-3xl w-[85vw] sm:w-[60vw] md:w-[557px] absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-10 drop-shadow-2xl ">
        <form className="m-7 flex flex-col " onSubmit={(e)=>{
            handleSubmit(e)
        }}>

            <h3 className="text-secondary text-lg sm:text-xl  mt-5 font-bold">Reset Your Password</h3>

            <div className="text-secondary text-sm mt-5">Enter your new password below.</div>

          <Input className={errors.password ? "border-errorBorder":""} placeholder="Enter your password" name="password" inputValue={values.password} inputType="password" onChange={handleChange}>New password
          
          </Input>

          <Input className={errors.new_password ? "border-errorBorder":""} placeholder="Enter your password" name="new_password" inputValue={values.new_password} inputType="password" onChange={handleChange}>
          Confirm new password
          </Input>
          {(errors.password || errors.new_password) ? <p className="text-right text-errorColor text-xs sm:text-sm">{errors.new_password}</p> :null}

          <Button btnType="submit"className="mt-10 mx-auto">
            Reset
          </Button>

        </form>

      </div>

    </Banner>
  )
}

export default Reset