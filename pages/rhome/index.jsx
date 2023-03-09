import Banner from '../../components/Banner';
import Input from '../../components/Input';
import {AiFillHome} from 'react-icons/ai';

const Recruiter = () => {
  return (
    <Banner isLoginBtnReq={false} isRecruiter={true} isCandidate={false} className="h-[30vh]">
        <div className="">
            <div className="flex ">
                <AiFillHome className="invert"/><p className="text-white">Home</p>
            </div>

        </div>

    </Banner>
  )
}

export default Recruiter