import Link from 'next/link';
import {useRouter} from 'next/router';

interface bannerProps {
  isLoginBtnReq?: boolean;
  className: string;
  children:React.ReactNode;
  isRecruiter?: boolean;
  isCandidate?: boolean;
}

const Banner = ({isLoginBtnReq,className,children,isRecruiter,isCandidate}:bannerProps) => {
  const router = useRouter();
  return (

        <div className={`bg-gradient-to-r from-primary to-secondary ${className}`}>
          <div className="max-width">

            <div className="flex py-5 px-16 justify-between text-white items-center w-full">
                <Link href="/"><h1 className="font-medium cursor-pointer text-white text-xs sm:text-[1.6rem]">My<span className="text-secodaryBlue">Jobs</span></h1></Link>

              {isLoginBtnReq && <button className="  text-xs sm:text-lg text-white font-medium  cursor-pointer border border-secodaryBlue px-6 py-3 rounded bg-lightBlue" onClick={() => {
              router.push("/login")
            }}>Login/Signup</button>}

            {isRecruiter && <div>
              <h2 className="text-secondary">Post a Job</h2>
              <h3 className="text-secondary ">R</h3>  
            </div>}
            </div>
            <div className="border-b-[1px] opacity-20 mx-16 bg-lineColor"></div>
            {children}
          </div>  
        </div>
  
  )
}

export default Banner