import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import eventsThumb from "/images/event-1.png"
import { FaRegClock } from "react-icons/fa6";

const Events = () => {
  return (
    <section className="relative pt-[160px] pb-[120px] bg-white bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <Tabs>
          <TabList className="text-center flex items-center mt-[44px]">
            <Tab className="cursor-pointer outline-none bg-PrimaryColor-0">
              <div>
                <h5 className="font-AlbertSans font-semibold text-xl text-white">
                  First Day
                </h5>
                <p className="font-AlbertSans text-white opacity-60">
                  13 Mar, 2024
                </p>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="bg-[#e9ebea] py-5 px-7 rounded-xl relative z-10 group transition-all duration-500">
              <div className="flex gap-[30px] items-center group-hover:pb-[160px] transition-all duration-500">
                <div className="rounded-xl">
                  <img src={eventsThumb} />
                </div>
                <div className="flex-1 bg-white rounded-xl p-7">
                  <div className="border border-BorderColor2-0 p-[6px] inline-block rounded-3xl">
                    <p className="flex items-center gap-2 justify-start font-AlbertSans text-TextColor-0">
                      <span className="w-[30px] h-[30px] rounded-full bg-PrimaryColor-0 flex justify-center items-center text-white">
                        <FaRegClock />
                      </span>
                      Mar 13, 2024 @ 10:00 am
                    </p>
                  </div>
                  <h2 className="font-AlbertSans font-semibold text-[28px] text-HeadingColor-0 mt-4 mb-4">
                    Close Encounters with African Leopards A Safari Story?
                  </h2>
                  <h6 className="text-HeadingColor-0 font-medium">
                    By <span className="text-PrimaryColor-0">Organizer</span>{" "}
                    Logichunt Inc
                  </h6>
                </div>
              </div>
              <div className="absolute bottom-5 -z-10 pl-[218px] mt-7">
                <p className="font-AlbertSans text-TextColor-0 pb-5">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  flexitarian Truffaut synth art party deep v chillwave coffee
                  ea next level moon beard in
                </p>
                <div className="flex gap-1 mb-4">
                  <h6 className="font-AlbertSans font-bold text-PrimaryColor-0">
                    Location :
                  </h6>
                  <p
                    to={"/"}
                    className="font-AlbertSans font-medium text-HeadingColor-0"
                  >
                    Building A , Golden Street ,{" "}
                    <span className="text-PrimaryColor-0">Southafrica</span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Events;
