import React from "react";
import { Partner } from "../pages";

interface Props {
  partner: Partner;
}

const PartnerCard = ({ partner }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-[100px] mx-5" src={partner.logo} />
      <p className="mt-2 text-gray-500 text-sm">{partner.name}</p>
    </div>
  );
};

export default PartnerCard;
