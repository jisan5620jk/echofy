import teamThumb from "/images/team-thumb.png";
import teamThumb2 from "/images/team-thumb2.png";
import teamThumb3 from "/images/team-thumb3.png";
import subTitleShape from "/images/sub-title-shape.png";
import skillMainShape from "/images/skill-main-shape.png";
import TeamCard from "./TeamCard";
import {
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
];

const TeamMember = () => {
  return (
    <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[244px] pb-28 relative -mt-[130px]">
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
                  <TeamCard
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
  );
};

export default TeamMember;
