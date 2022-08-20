import React from "react";
import { Member } from "../pages/about-us";

interface Props {
  member: Member;
}

const MemberCard = ({ member }: Props) => {
  return (
    <div className="p-2 border border-gray-300 rounded-3xl">
      <div className="flex flex-col items-center justify-center border p-5 rounded-3xl bg-black/90">
        <div className="mb-2 border-2 rounded-full flex items-center justify-center p-2 border-gray-600">
          <img
            src={member.image}
            className="w-[130px] h-[130px] rounded-full"
          />
        </div>
        <h2 className="font-[700] text-xl mt-1 text-gray-200 mb-3">
          {member.firstname} {member.lastname}
        </h2>
        <a
          className="text-sm flex items-center text-gray-400 font-mono"
          href={member.website}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
          {member.website}
        </a>
        <h4 className="font-[300] text-sm mt-1 text-gray-300">
          {member.phone}
        </h4>
        <h4 className="font-[300] text-sm mt-1 text-gray-300">
          {member.email}
        </h4>
      </div>
    </div>
  );
};

export default MemberCard;
