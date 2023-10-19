interface IHomeDesc {
  title: string | JSX.Element;
  description: string | JSX.Element;
}

const HomeDescription = ({ title, description }: IHomeDesc) => {
  return (
    <>
      <div className="w-full bg-white flex items-center justify-center py-[50px] px-[25px] sm:px-[50px]">
        <div className="flex flex-col gap-[15px] items-center justify-center text-center max-w-[740px]">
          <div className="text-yellowgreen font-bold leading-[40px] sm:leading-[50px] lg:leading-normal text-[40px] sm:text-[50px] lg:text-[60px]">
            {title}
          </div>
          <div className="leading-[162%] text-[16px] sm:text-[20px] text-black">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDescription;
