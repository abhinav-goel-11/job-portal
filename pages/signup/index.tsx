import {useState} from 'react';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Button from '../../components/Button'
import Link from 'next/link';
import {RiUserSearchFill} from 'react-icons/ri';
import {MdGroups2} from 'react-icons/md';
import {useFormik} from 'formik';
import {signUpSchema} from '../../Features/Signup/schemas';

const initialValues = {
      name:"",
      email:"",
      password:"",
      confirm_password:"",
      skills:""
}

const index = () => {

  const [role,setRole] = useState <number>(0);  // 0 -> recruiter, 1 -> candidate
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  })
  console.log(errors);
  return (
    <Banner isLoginBtnReq={false} className="h-[60vh] relative ">

        <div className="bg-white rounded-3xl  w-[85vw] sm:w-[60vw] md:w-[557px] absolute left-1/2 -translate-x-1/2 translate-y-10 drop-shadow-2xl ">
          <form onSubmit={(e) => {handleSubmit(e)}} className="mx-7 flex flex-col py-7">

            <h3 className="text-secondary font-normal text-xl">Signup</h3>
            <p className="text-secondary font-normal text-sm mt-7 mb-2">I’m a*</p>
            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-5">
            <Button  variant={role===0?'primary':'outline'} onClick={() => {setRole(0)}} className='flex items-center gap-3'>
                <RiUserSearchFill className={role===0?"invert-0":"fill-secodaryBlue"}/>
                <p className='font-normal text-sm sm:text-lg'>Recruiter</p>
            </Button>
            <Button  variant={role===1?'primary':'outline'} onClick={() => {setRole(1)}} className='flex items-center gap-3 '>
                <MdGroups2 className={`${role===1?"invert-0":"fill-secodaryBlue"} h-4/5`}/>
                <p className='font-normal text-sm sm:text-lg'>Candidate</p>
            </Button>
            </div>
            
            <Input onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? "border-errorBorder":""} name="name" inputValue={values.name} inputType="text" placeholder="Enter your full name"><p className='font-normal text-sm'>Full Name*</p>
            
            
            </Input>{errors.name && touched.name ?(<p className="text-errorColor text-right text-xs sm:text-sm">{errors.name}</p>):null}

            <Input onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "border-errorBorder":""} name="email" inputValue={values.email} inputType="text" placeholder="Enter your email"><p className='font-normal text-sm'>Email Address*</p></Input>{errors.email && touched.email ?(<p className="text-errorColor text-right text-xs sm:text-sm">{errors.email}</p>):null}

            <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-5">
              <Input onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? "border-errorBorder":""} name="password" inputValue={values.password} inputType="password" placeholder="Enter your password">
                <p className='font-normal text-sm'>Create password*</p>
              </Input>

              <Input onChange={handleChange} onBlur={handleBlur} className={errors.confirm_password && touched.confirm_password ? "border-errorBorder":""} name="confirm_password" inputValue={values.confirm_password} inputType="password" placeholder="Enter your password">
                <p className='font-normal text-sm'>Confirm Password*</p>
                
              </Input>

            </div>
              {((errors.password && touched.password ) || (errors.confirm_password && touched.confirm_password)) && <p className="  text-right text-errorColor text-xs sm:text-sm" >{errors.confirm_password}</p>}

            <Input onChange={handleChange} onBlur={handleBlur} className="" name="skills" inputValue={values.skills} inputType="text" placeholder="Enter comma separated skills"><p className='font-normal text-sm'>Skills</p></Input>

             
            
            <Button btnType="submit" className="mx-auto mt-10" >
              <h3 className='font-medium text-sm'>Signup</h3>
            </Button>
          <div className="text-md mt-12 pb-7 mx-auto">
          Have an account? <Link href="/login"><span className="text-secodaryBlue cursor-pointer">Login</span></Link>
          </div>
          </form>
        </div>
      
    </Banner>
  )
}

export default index