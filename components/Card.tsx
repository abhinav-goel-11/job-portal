

const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <div className={`w-[340px] sm:w-[550px] md:w-[245px] lg:w-[270px] xl:w-[341px] bg-white rounded drop-shadow-md px-5 text-left`}>
                <div className="title-cont text-xl text-secodaryBlue  pt-6">
                {children}
                </div>
                <div className="body-cont mt-7 mr-5 pb-7 text-sm text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis illo, est maiores sint possimus delectus odio 
                </div>
        </div>
    
    </>
  )
}

export default Card