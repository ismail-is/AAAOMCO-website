/* eslint-disable react/prop-types */
const ProcessCard = ({
  processShape,
  processIcon,
  processTitle,
  boxNumber,
  processDesc,
  boxShape,
}) => {
  return (
    <div className="text-center group relative">
      <img src={processShape} className="absolute right-0" />
      <div className="relative">
        <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-shadow m-auto relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:scale-0 before:h-full before:rounded-2xl before:bg-[#02416A] before:transition-all before:duration-500 group-hover:before:scale-100">
          <img
            src={processIcon}
            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
          />
          {/* <h6 className="h-[26px] w-[26px] rounded-full bg-PrimaryColor-0 text-sm flex justify-center items-center text-[#02416A] font-Inter absolute top-1/2 -translate-y-1/2 -right-[13px]">
            {boxNumber}
          </h6> */}
        </div>
        <img
          src={boxShape}
          draggable="false"
          className="!w-[inherit] absolute top-1/2 -translate-y-1/2 -right-[170px] hidden xl:block"
        />
      </div>
      <h5 className="font-Inter font-semibold inline-block text-[#02416A] text-2xl relative z-10 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-7 before:h-[2px] before:transition-all before:duration-500 before:bg-[#02416A] group-hover:before:w-full group-hover:left-0 mt-9 pb-3 mb-7">
        {processTitle}
      </h5>
      <p className="font-Poppins text-TextColor-0 sm:w-2/3 md:w-full 2xl:w-3/4 mx-auto">
        {processDesc}
      </p>
    </div>
  );
};

export default ProcessCard;