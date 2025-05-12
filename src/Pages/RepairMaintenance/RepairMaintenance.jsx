import { Link } from "react-router-dom";
// import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogListImg from "/images/sidber-thumb.png";
import blogDetailsImg from "/images/blog-thumb8.png";
import blogDetailsImg2 from "/images/blog-thumb9.png";
import itemthumb from "/images/post1.png";
import itemthumb2 from "/images/post2.png";
import itemthumb3 from "/images/post3.png";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRightLong,
  FaCircleCheck,
  FaCommentsDollar,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarCheck,
  FaRegFolderOpen,
  FaSquare,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidQuoteAltRight, BiSolidShare } from "react-icons/bi";
import Breadcamp from "../../Shared/Breadcamp/Breadcamp";

const RepairMaintenance = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Repair & Maintenance"}
        // url={"/blog"}
        // breadcampIcon={<FaArrowRightLong />}
        // breadcampIcon2={<FaArrowRightLong />}
        // breadCampLink={"Blog"}
        // breadCampContent={"Floor Cleaning Using New Equipment"}
      />
      <section className="py-28 ">
        <div className="Container lg:w-full w-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 ">
            <div className="col-span-2 ">
              <div className="border border-BorderColor-0 rounded-md overflow-hidden " >
            
                <div className="px-2 sm:px-8 ">
                    <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-9 mb-6">
                    Most Reliable & Cost Friendly Forklift Repair and Maintenance Services 
                    </button>
                  {/* <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaUserCircle className="text-4xl text-[#dedede]" />
                      Jhon Alexon
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaRegCalendarCheck className="text-lg text-SecondaryColor-0" />
                      Jan 10, 2024
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaCommentsDollar className="text-lg text-SecondaryColor-0" />
                      02 Comments
                    </h6>
                  </div> */}
                  <p className="font-Poppins font-light text-black border-t border-BorderColor1-0 pt-5">
                  We at <span className="text-[#FD9F00] font-medium">Qimam Affan </span> see the importance of a forklift in your company’s activities. For instance, if you are using a Branded Forklifts such as Toyota Forklift, Caterpillar Forklift or Electric Forklift, Branded Forklift or even any of the popular models, timely repair and maintenance is important to keep the business operational.
                  </p>
                  <p className="font-Poppins font-light text-black mt-5">
                  For peak performance of your forklift, you need our maintenance and repair services to avoid costly repairs and unexpected breakdowns. Our tailored shred quality services fully meets clients’ repair and service needs across a range of popular forklift brands including electric, cat, Toyota and many other branded models
                  </p>
                  {/* <div className="flex flex-col bg-[#f3f4f8] sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-md mt-12">
                    <div className="text-6xl text-SecondaryColor-0">
                      <BiSolidQuoteAltRight />
                    </div>
                    <div className="flex-1">
                      <p className="font-Poppins text-HeadingColor-0 sm:text-lg italic">
                        “Monotonectally impact reliable alignments vis-a-vis
                        corporate architectures ortals through cross functional
                        deliverables. testing procedures”
                      </p>
                      <h6 className="font-Inter text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-SecondaryColor-0">
                        CEO & Founder
                      </h6>
                    </div>
                  </div> */}
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                    Why Forklift Services and Repairs Matter
                    </button>
                  <p className="font-Poppins font-light ">
                  Forklifts are made of sturdy machinery that is designed to take on large loads and withstand rough settings, but like any other industrial tool, they require regular forklift repair and maintenance to function at their best capacity. If you do not care for machinery and
                  <span className="text-[#FD9F00] font-medium">  supplying spare parts </span>,even the best forklift could run into performance problems, breakdowns, or safety issues. To deal with such problems, regular forklift repair and maintenance practices are necessary along with timely parts replacement, so the machinery is reliable whenever you need it.
                  </p><br/>
                  <p className="font-Poppins font-light ">
                  Scheduled servicing and maintenance of a forklift aids in the early diagnosis of potential problems like low oil levels and excessive wear on components and brakes that could lead to costly repairs. Routine servicing of your Toyota forklift, Cat forklift, or electric forklift improves operational efficiency, working more smoothly and wasting less time. A regular servicing schedule along with expert
                  <span className="text-[#FD9F00] font-medium">   Consultancy  </span>also increases the longevity of your machines, ensuring that the funds allocated for servicing are justified on a long term basis.
                  </p>


                  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#313131] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                  How We Can Help You:
                    </button>
                    <p className="font-Poppins font-light ">These services are aimed at repair and maintenance of forklifts with the goal of preventing unwanted expenses as well as ensuring that the forklifts are ready when needed.</p>

                  <ul className="flex flex-col gap-[14px] mt-7">
                  <div className="flex flex-col lg:flex-row    items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
   Forklift Repairs
  </li>
  <span className="font-normal">
   : Scheduled maintenance will help your forklifts stay functional, and save you from larger problems later.
  </span>
</div>
                  <div className="flex flex-col lg:flex-row items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Forklift Repairs
  </li>
  <span className="font-normal">
   : From small to big troubleshooting issues, we can take care of it all.
  </span>
</div>



<div className="flex flex-col lg:flex-row items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Electric Forklift Repair
  </li>
  <span className="font-normal">
   : We make sure your electric machines are working correctly and safely on all electric forklift repairs.
  </span>
</div>

<div className="flex flex-col lg:flex-row items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Toyota Forklift Services
  </li>
  <span className="font-normal">
   : We do any and all repair and maintenance works for specialists in Toyota Forklifts.
  </span>
</div>



<div className="flex flex-col lg:flex-row lg:items-start gap-2 text-[#313131]">
  <li className="flex-shrink-0 flex gap-2 items-center font-Poppins font-bold lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Forklift Price in KSA
  </li>
  <span className="font-Poppins font-normal text-sm lg:text-[15px] leading-relaxed">
    : In case your company wants to get a new forklift, we can assist in understanding the forklift price in KSA, and help you save money that’s beneficial for your company.
  </span>
</div>

                    {/* <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px]">
                      <FaSquare
                        size={"10"}
                        className="text-[#313131]"
                      />
                       Forklift Price in KSA<span className="font-normal">:In case your company wants to get a new forklift, we can assist in understanding the forklift price in KSA, and help you save money that’s beneficial for your company.</span>
                    </li> */}
                  
                   
                    
                  </ul>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                    <div>
                      <img src={blogDetailsImg} />
                    </div>
                    <div>
                      <img src={blogDetailsImg2} />
                    </div>
                  </div> */}
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A]  mt-10 mb-4">
                    Common Forklift Problems and Our Solutions
                    </button>
                    <div className="flex flex-col lg:flex-row items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem: Faulty Forklift Start-Up
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px  ">
    Solution  <span className="font-normal">: Most of the time this is battery dead, fuel gone or ignition trouble. We get to the core of the forklift on-site in no time, and fix the problem so you can operate the machine again.
  </span>
  </p>





  <div className="flex flex-col lg:flex-row items-start gap-2 mt-6">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem: Failure of Hydraulic System
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px] ">
    Solution  <span className="font-normal">:  When your forklift isn’t lifting, we look for leaks that are bursting out the air out of the system or faults in the pump. We fix them.
  </span>
  </p>




  
  <div className="flex flex-col lg:flex-row items-start gap-2 mt-6">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem: Forklift Running Hot
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px] ">
    Solution  <span className="font-normal">:   A forklift can run hot because of many reasons, such as the radiator being clogged, the coolant leaking, or problems with the engine itself. That’s why we clean the cooling system so it can work flexibly.
  </span>
  </p>



  <div className="flex flex-col lg:flex-row items-start gap-2 mt-6">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem: Brake Issues
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px] ">
    Solution  <span className="font-normal">: We take brake problems seriously because they can impair movement. To tackle these problems, we replace any missing brake pads, realign brake lines, and check if all the components of the braking system are functioning properly.
  </span>
  </p>



  
  <div className="flex flex-col lg:flex-row items-start gap-2 mt-6">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem: Steering Difficulty
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px] ">
    Solution  <span className="font-normal">: Difficulty steering a forklift can arise from low levels hydraulic fluid, a broken steering column, or worn out tires. We determine the cause of the steering problem and provide an effective solution to enhance maneuverability.
  </span>
  </p>



  <div className="flex flex-col lg:flex-row items-start gap-2 mt-6">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
  Problem:  Warning Signals on the Dashboard
  </li>
 
  
</div>
  <p className=" font-Poppins font-bold text-[#313131] lg:text-[15px] ">
    Solution  <span className="font-normal">: Warning signals on the dashboard suggest that there may be problems with the engine, battery, or hydraulic system. We make it a point to check the entire system and fix any issues that are found to ensure that they do not worsen over time.
  </span>
  </p>














  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
  Why Choose Our Forklift Repair and Maintenance Services?
                    </button>

                  <ul className="flex flex-col gap-[14px] mt-7  lg:ml-5">
                  <div className="   items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Professionally qualified and experienced technician
  </li>
  <span className="font-normal ">
  All Qimam Affan staff are maintenance specialists trained to carry out repairs, regardless of the type of forklift, be it a Toyota, electric or any other make, model or brand of forklift. Rest assured that your equipment will receive the utmost care and attention. Your technicians will not only identify but will also accurately and promptly resolve any problem so that they can get your equipment back to work without unnecessary delays. Extend the life of your forklift through comprehensive and dependable quality repairs.
  </span>
</div>



       <div className="   items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Affordable and Clear Pricing
  </li>
  <span className="font-normal ">
  We know how challenging it can be to keep your business up and running without going over budget. That’s why, here at Qimam Affan, we offer complete forklift repair and maintenance  services at low prices and no hidden charges. With us, there is no ambiguity about the estimate– we give you definite numbers. Whether simple or more complex, we will address all of your repair needs and provide you with a transparent and clear estimate. Additionally, if you’re curious about forklift prices in KSA, we can help you find options that meet your financial and business expectations.
  </span>
</div>          


<div className="   items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    We aim to provide the best turnaround time
  </li>
  <span className="font-normal ">
  Regardless of the type of business you operate, downtime can drain your money and time. This is why we do everything in our power to guarantee a fast turnaround time at Qimam Affan. Our skilled technicians are trained to execute all repairs and maintenance tasks with the highest standards of quality and efficiency. Whether you require urgent repairs or routine maintenance, our goal is to reduce operational downtime by getting your equipment back in action as quickly as possible.
  </span>
</div>      



<div className="   items-start gap-2">
  <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px] list-none">
    <FaSquare size={10} className="text-[#313131]" />
    Customer Focused Service
  </li>
  <span className="font-normal ">
  At A Qimam Affan, we are proud to state that we have a customer focused approach in every job we do. We recognize that every business is different and has particular set requirements, and that is why we take time to understand and give the relevant solutions. Our team is available around the clock to walk you through the steps, questions you may have, and ensure you get all the services that you need. We care about our clients and provide the best services and support at all times, which add more value to building strong relationships with clients.
  </span>
</div>      






                    {/* <li className="flex gap-2 items-center font-Poppins font-bold text-[#313131] lg:text-[15px]">
                      <FaSquare
                        size={"10"}
                        className="text-[#313131]"
                      />
                       Forklift Price in KSA<span className="font-normal">:In case your company wants to get a new forklift, we can assist in understanding the forklift price in KSA, and help you save money that’s beneficial for your company.</span>
                    </li> */}
                  </ul>
  


                  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                  What are the Benefits of Qimam Affan?
                    </button>
                  <p className="font-Poppins font-light ">
                  By selecting Qimam Affan, you are not just another customer for us, but rather someone that we put our full efforts in making sure you achieve success in your business. We want to make sure you have success in business, and that’s why we put all the heavy lifting on our shoulders. We guarantee there won’t be any extra expenses when you use our maintenance and repair services because we charge reasonable prices and don’t hide any fees. Our highly trained operators are available to help you with anything from regular maintenance of your forklift to emergency repairs, and even guidance on how much a forklift costs in KSA. With us, your business can always be running at an optimal level because we provide
                  <span className="text-[#FD9F00] font-medium">  training </span>,maintenance services and ensure your forklifts are functional.
                  </p>


                  <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-[#02416A] transition-all duration-500 hover:[#02416A] mt-14 mb-4">
                Branded Forklifts Need Care? Call Qimam Affan for Expert Repair Services!
                    </button>
                  <p className="font-Poppins font-light mb-14">
                  We’ve got you covered when it comes to forklift repairs or maintenance. Whether it’s a branded forklift from Toyota, Cat, Electric Forklifts or any other top of the line forks, Master Qimam Affan has the knowledge to ensure your machine is always operating optimally. 
                  <span className="text-[#FD9F00] font-medium">  Contact us  </span> for a free consultation. Let’s make sure your branded forklifts are working perfectly
                  </p>
  
                 
                </div>
                {/* <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 sm:px-8">
                  <div>
                    <h6 className="font-Poppins text-lg font-medium">
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white mr-2 ml-1">
                          Cleaning
                        </button>
                      </Link>
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white">
                          Washing
                        </button>
                      </Link>
                    </h6>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center gap-2">
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-SecondaryColor-0 flex justify-center items-center">
                            <FaFacebookF size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                            <FaXTwitter size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                            <FaLinkedinIn size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                            <FaPinterestP size={"13"} />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]">
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      <FaAnglesLeft size={"14"} />
                      Previous Post
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5"
                  >
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        Newest Cleaning Equipment for House 2024
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9 flex flex-col items-end">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      Next Post
                      <FaAnglesRight size={"14"} />
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5 text-right"
                  >
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        10 Most Popular Cleaning Tips for House
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        09 Jan, 2024
                      </p>
                    </div>
                    <div>
                      <img src={itemthumb3} />
                    </div>
                  </Link>
                </div>
              </div> */}
              {/* <div className="bg-[#f3f4f8] px-4 sm:px-[62px] py-14 rounded-md mt-[60px]">
                <h3 className="font-Inter font-semibold text-HeadingColor-0 text-2xl mb-10">
                  Comments 02
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 border-b border-BorderColor1-0 pb-8">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      David Alexon
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-10 md:pl-[90px]">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      Michel Hemilton
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                
              </div> */}
            </div>
            {/* <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded font-Poppins"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded h-[56px] w-[56px] bg-SecondaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Office Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Cleaning Specialist
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        kitchen Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Proper Cleaning Floor Carpet
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        New cleaning Equipment for House...
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        16 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Carpet Cleaning Use New Equipment
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        27 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Pool Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairMaintenance;
