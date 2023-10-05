interface IHomeDesc {
  title: string | JSX.Element;
  description: string | JSX.Element;
}

const HomeDescription = ({ title, description }: IHomeDesc) => {
  return (
    <>
      <div className="w-full bg-white flex items-center justify-center p-[50px]">
        <div className="flex flex-col gap-[15px] items-center justify-center text-center max-w-[740px]">
          <div className="text-yellowgreen font-bold text-[60px]">{title}</div>
          <div className="leading-[162%] text-[20px] text-black">{description}</div>
        </div>
      </div>
    </>
  );
};

export default HomeDescription;
