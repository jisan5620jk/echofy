import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import subTitleShape from "/images/title-shape-2.png";
import eventsThumb from "/images/event-1.png";
import eventsThumb2 from "/images/event-2.png";
import eventsThumb3 from "/images/event-3.png";
import eventsThumb4 from "/images/event-4.png";
import { FaAnglesRight, FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="relative py-[120px] bg-white bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center justify-center gap-2">
            <img src={subTitleShape} draggable="false" />
            OUR EVENTS
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-16">
            Unleashed by Echofy
          </h1>
        </div>
        <Tabs>
          <TabList className="text-center grid grid-cols-2 gap-y-3 sm:gap-y-0 sm:grid-cols-4 items-center mt-[44px] rounded-md overflow-hidden">
            <Tab className="cursor-pointer outline-none bg-PrimaryColor-0 py-7 w-full">
              <div>
                <h5 className="font-AlbertSans font-semibold text-lg sm:text-base md:text-xl text-white uppercase">
                  First Day
                </h5>
                <p className="font-AlbertSans text-white opacity-60">
                  13 Mar, 2024
                </p>
              </div>
            </Tab>
            <Tab className="cursor-pointer outline-none bg-SecondaryColor-0 py-7 w-full">
              <div>
                <h5 className="font-AlbertSans font-semibold text-lg sm:text-base md:text-xl text-white uppercase">
                  Second Day
                </h5>
                <p className="font-AlbertSans text-white opacity-60">
                  14 Mar, 2024
                </p>
              </div>
            </Tab>
            <Tab className="cursor-pointer outline-none bg-PrimaryColor-0 py-7 w-full">
              <div>
                <h5 className="font-AlbertSans font-semibold text-lg sm:text-base md:text-xl text-white uppercase">
                  Third Day
                </h5>
                <p className="font-AlbertSans text-white opacity-60">
                  15 Mar, 2024
                </p>
              </div>
            </Tab>
            <Tab className="cursor-pointer outline-none bg-SecondaryColor-0 py-7 w-full">
              <div>
                <h5 className="font-AlbertSans font-semibold text-lg sm:text-base md:text-xl text-white uppercase">
                  Fourth Day
                </h5>
                <p className="font-AlbertSans text-white opacity-60">
                  16 Mar, 2024
                </p>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 10:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Close Encounters with African Leopards A Safari Story?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb2} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 16, 2024 @ 06:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Would You Like To See A Real Leopard Live?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb3} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 18, 2024 @ 09:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Wildlife Safari Chronicles: Hunting For Leopards?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img draggable="false" src={eventsThumb4} />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 05:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Bangladesh Safari Thrills Spying On Leopards In The Wild?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb2} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 16, 2024 @ 06:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Would You Like To See A Real Leopard Live?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 10:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Close Encounters with African Leopards A Safari Story?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb3} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 18, 2024 @ 09:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Wildlife Safari Chronicles: Hunting For Leopards?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img draggable="false" src={eventsThumb4} />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 05:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Bangladesh Safari Thrills Spying On Leopards In The Wild?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb3} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 18, 2024 @ 09:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Wildlife Safari Chronicles: Hunting For Leopards?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb2} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 16, 2024 @ 06:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Would You Like To See A Real Leopard Live?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 10:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Close Encounters with African Leopards A Safari Story?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img draggable="false" src={eventsThumb4} />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 05:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Bangladesh Safari Thrills Spying On Leopards In The Wild?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img draggable="false" src={eventsThumb4} />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 05:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Bangladesh Safari Thrills Spying On Leopards In The Wild?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 13, 2024 @ 10:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Close Encounters with African Leopards A Safari Story?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb2} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 16, 2024 @ 06:00 pm</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Would You Like To See A Real Leopard Live?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e9ebea] py-5 px-4 sm:px-7 rounded-xl relative z-10 group transition-all duration-500 mt-3">
              <div className="flex flex-col md:flex-row gap-[30px] md:items-center group-hover:pb-[320px] sm:group-hover:pb-[200px] md:group-hover:pb-[160px] 2xl:group-hover:pb-[134px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb3} draggable="false" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-7 ">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      <span className="flex-1">Mar 18, 2024 @ 09:00 am</span>
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-base sm:text-2xl lg:text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Wildlife Safari Chronicles: Hunting For Leopards?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 lg:pl-[218px] mt-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, <br className="hidden 2xl:block" /> PBR 3 wolf
                  moon beard Helvetica. Salvia esse flexitarian Truffaut synth
                  art party deep v chillwave coffee ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0 flex-1"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px]">
          <Link to={"/home5"}>
            <button className="primary-btn3 !px-5 sm:!px-[36px] !bg-HeadingColor-0 !border-none before:bg-PrimaryColor-0">
              {`Download schedule (pdf)`}
              <FaAnglesRight />
            </button>
          </Link>
          <Link to={"/home5"}>
            <button className="primary-btn3 !px-5 sm:!px-[36px] !bg-PrimaryColor-0 !border-none before:bg-SecondaryColor-0">
              {`Contact via facebook`}
              <FaAnglesRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
