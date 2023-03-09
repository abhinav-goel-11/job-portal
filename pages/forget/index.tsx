import Banner from "@/components/Banner";
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { loginSchema } from "@/Features/Login/schemas";

const initialValues = {
  email:""
}

const Forget = () => {
  const {values,errors,touched,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:loginSchema,
    onSubmit(values,actions) {
        actions.resetForm();
    },
  })

  const router = useRouter();
  return (
    <Banner isLoginBtnReq={true} className="h-[60vh] relative">

      <div className="bg-white rounded-3xl w-[85vw] sm:w-[60vw] md:w-[557px] absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-10 drop-shadow-2xl ">
        <h3 className="text-secondary text-lg sm:text-xl mx-7 mt-5 font-bold">Forgot your password?</h3>
        <form className="ml-7 mr-7 mb-7 flex flex-col items-center" onSubmit={(e)=>{
              handleSubmit(e)
            }}>


          <p className="text-secondary mt-5">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>

          <Input className={errors.email ? "border-errorBorder":""} placeholder="Enter your email" name="email" inputValue={values.email} inputType="email" onChange={handleChange}>Email address
          
          </Input>{errors.email?<p className="text-right text-errorColor text-xs sm:text-sm">{errors.email}</p>:null }

          <Button btnType="submit" onClick={() => {
                  router.push("/reset");
                }} className="mt-10 "  >
            Submit
          </Button>

        </form>

      </div>

    </Banner>
  )
}

export default Forget
