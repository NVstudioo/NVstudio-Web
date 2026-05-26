import Image from "next/image";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

export default function OurTeam() {
  type Member = {
    imgUrl: string;
    name: string;
    role: string;
    desc: string;
  };

  const teamMembers: Member[] = [
    {
      imgUrl: "/team_member.png",
      name: "David Kivits",
      role: "CEO",
      desc: "As the head of the company, my job is to ensure everyone.",
    },
    {
      imgUrl: "/team_member.png",
      name: "David Kivits",
      role: "CEO",
      desc: "As the head of the company, my job is to ensure everyone.",
    },
    {
      imgUrl: "/team_member.png",
      name: "David Kivits",
      role: "CEO",
      desc: "As the head of the company, my job is to ensure everyone.",
    },
    {
      imgUrl: "/team_member.png",
      name: "David Kivits",
      role: "CEO",
      desc: "As the head of the company, my job is to ensure everyone.",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)",
      }}
    >
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#EA00FF",
          marginBottom: "clamp(8px, 1vw, 16px)",
        }}
      >
        Our Team Structure
      </p>

      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "clamp(24px, 5vw, 48px)",
          color: "#EDEDED",
        }}
      >
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className="bg-white p-5 flex flex-col items-center rounded-2xl cursor-pointer hover:-translate-y-2 transition duration-200"
          >
            <Image
              src={teamMember.imgUrl}
              width={100}
              height={100}
              alt="Team Member"
            />
            <h2 className="text-black mt-2 font-medium">{teamMember.name}</h2>
            <p className="text-black mt-4">{teamMember.role}</p>
            <p className="text-black text-center text-[14px] font-light mt-2">
              {teamMember.desc}
            </p>

            <div className="flex gap-3 md:gap-5 mt-5">
              <div className="w-8 h-8 bg-black flex justify-center items-center rounded-full hover:opacity-80 transition duration-100">
                <FaInstagram />
              </div>

              <div className="w-8 h-8 bg-black flex justify-center items-center rounded-full hover:opacity-80 transition duration-100">
                <FaLinkedin />
              </div>

              <div className="w-8 h-8 bg-black flex justify-center items-center rounded-full hover:opacity-80 transition duration-100">
                <FaDribbble />
              </div>

              <div className="w-8 h-8 bg-black flex justify-center items-center rounded-full hover:opacity-80 transition duration-100">
                <FaBehance />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
