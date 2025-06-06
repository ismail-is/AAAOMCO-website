/* eslint-disable no-unused-vars */
import processIcon from "/images/allimg/icons/5.png";
import processIcon2 from "/images/allimg/icons/6.png";
import processIcon3 from "/images/allimg/icons/7.png";
import processShape from "/images/work-shape3.png";
import processShape2 from "/images/work-shape4.png";
import boxShape from "/images/work-shape.png";
import ProcessCard from "./ProcessCard";

const processData = [
  {
    id: 1,
    processIcon: processIcon,
    boxNumber: "1",
    boxShape: boxShape,
    processTitle: "ADDRESS",
    processDesc: "makkah al mukkaramah street, Thuqbah Al khobar 34626,kingdom of Saudi Arabia",
  },
  {
    id: 2,
    processIcon: processIcon2,
    boxNumber: "2",
    boxShape: boxShape,
    processTitle: "PHONE",
    processDesc: "+966 549 272 708",
  },
  {
    id: 3,
    processIcon: processIcon3,
    boxNumber: "3",
    processTitle: "EMAIL",
    processDesc: "Info@aaaomco.com",
  },
];

const Process = () => {
  return (
    <section className="pt-28 pb-10 relative">
      {/* <div className="processShape">
        <img
          src={processShape}
          className="absolute left-0 top-1/3 -translate-y-1/2 animate-dance3 hidden 2xl:block"
        />
      </div> */}
      {/* <div className="processShape2">
        <img
          src={processShape2}
          className="absolute right-[5%] top-[20%] -translate-y-1/2 animate-movebtn hidden 2xl:block"
        />
      </div> */}
      <div className="Container">
        {/* <div className="text-center">
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              WORKING PROCESS
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Easy Steps to Works
            </h1>
            <p className="font-Poppins text-TextColor-0 font-light lg:w-3/5 2xl:w-3/4 mx-auto">
              Competently repurpose go forward benefits without goal-oriented
              ROI <br className="hidden lg:block" /> conveniently target
              e-business opportunities whereas
            </p>
          </div>
        </div> */}
        <div className="pb-16 mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {processData.map(
              ({
                id,
                processIcon,
                processTitle,
                boxNumber,
                processDesc,
                boxShape,
              }) => {
                return (
                  <div key={id}>
                    <ProcessCard
                      processIcon={processIcon}
                      boxNumber={boxNumber}
                      boxShape={boxShape}
                      processTitle={processTitle}
                      processDesc={processDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
