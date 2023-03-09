import Banner from "@/components/Banner";
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import { useFormik } from "formik";
import { loginSchema } from "@/Features/Login/schemas";

const initialValues = {
  email:"",
  password:""
}

const index = () => {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:loginSchema,
    onSubmit:(values,actions) => {
      console.log(values);
      actions.resetForm();
    }
  })
  console.log(errors);

  return (
      <Banner isLoginBtnReq={false} className="h-[60vh] relative">

          <div className="bg-white rounded-3xl w-[85vw] sm:w-[60vw] md:w-[557px] absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-10 drop-shadow-2xl ">
            <form onSubmit={(e)=>{
              handleSubmit(e)
            }} className="mx-7 flex flex-col py-7">

              <h3 className="text-secondary text-lg sm:text-xl">Login</h3>

              <Input className={errors.email && touched.email ? "border-errorBorder":""} onChange={handleChange} onBlur={handleBlur} inputValue={values.email}   name="email" inputType="text" placeholder="Enter your email"><p className="text-xs sm:text-lg">Email Adress</p>
              </Input>


              <Input onChange={handleChange} onBlur={handleBlur} className={(errors.password && touched.password)? "border-errorBorder":""} inputValue={values.password}   name="password" inputType="password" placeholder="Enter your password">
                <div className="flex justify-between text-xs sm:text-lg"><span>Password</span><Link href="/forget"><span className="text-secodaryBlue cursor-pointer">Forgot your password?</span></Link></div>
              </Input>{(errors.email || errors.password )  && <p className="text-right text-errorColor text-xs sm:text-lg" >Incorrect email address or password.</p>}
              
              <Button btnType="submit" className="mx-auto mt-10" >
                <h3>Login</h3>
              </Button>
            <div className="text-xs sm:text-lg mt-12 pb-7 mx-auto">
            New to MyJobs? <Link href="/signup"><span className="text-secodaryBlue cursor-pointer">Create an account</span></Link>
            </div>
            </form>
          </div>
        
      </Banner>
  )
}

export default index