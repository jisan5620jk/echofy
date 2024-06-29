import teamThumb from "/images/team-thumb.png";
import teamThumb2 from "/images/team-thumb2.png";
import teamThumb3 from "/images/team-thumb3.png";
import teamThumb4 from "/images/team-thumb4.png";
import teamThumb5 from "/images/team-thumb5.png";
import teamThumb6 from "/images/team-thumb6.png";
import subTitleShape from "/images/sub-title-shape.png";
import skillMainShape from "/images/skill-main-shape.png";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import TeamInnerCard from "./TeamInnerCard";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Environmental",
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "Connie Diaz",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
  },
  {
    id: 5,
    teamThumb: teamThumb5,
    teamTitle: "James E. Huey",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
  },
  {
    id: 6,
    teamThumb: teamThumb6,
    teamTitle: "June D. Vargas",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Environmental",
  },
];

const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Member"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Member"}
      />
      <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
        <img
          src={skillMainShape}
          draggable="false"
          className="absolute -z-10 top-10 left-10 animate-dance2 hidden xl:block"
        />
        <div className="Container">
          <div className="text-center">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
              <img src={subTitleShape} draggable="false" />
              OUR TEAM
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Meet Our Dedicated Members
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                socialIcon4,
                teamDesc,
              }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamThumb={teamThumb}
                      teamTitle={teamTitle}
                      socialIcon={socialIcon}
                      socialIcon2={socialIcon2}
                      socialIcon3={socialIcon3}
                      socialIcon4={socialIcon4}
                      teamDesc={teamDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamInner;
