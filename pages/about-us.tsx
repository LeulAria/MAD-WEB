import React, { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";

export interface Address {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}

export interface Member {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: Address;
  website: string;
  image: string;
}

const AboutUs = () => {
  const [ourTeam, setOurTeam] = useState<Member[]>([]);

  const fetchOurTeam = async () => {
    const url = "https://fakerapi.it/api/v1/persons?_quantity=7";
    const json = await fetch(url, { mode: "cors" });
    const res = await json.json();

    setOurTeam(res.data as Member[]);
  };

  useEffect(() => {
    fetchOurTeam();
  }, []);

  return (
    <div className="px-[5%] mx-auto max-w-[1220px]">
      <div className=" mb-12 lg:ml-[6%]">
        <h1 className="font-[800] text-3xl mb-5">Meet Our Team</h1>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut
          facere quam sit, quas, sapiente quos impedit quasi voluptate culpa
          amet recusandae eveniet nemo adipisci perspiciatis ipsam maiores
          reiciendis quod!
        </p>
      </div>
      <div className="grid mb-8 rounded-lg md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[900px] mx-auto">
        {ourTeam.map((member) => (
          <MemberCard member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
