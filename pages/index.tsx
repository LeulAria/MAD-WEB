import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PartnerCard from "../components/PartnerCard";

export interface Partner {
  name: string;
  domain: string;
  logo: string;
}

const Home: NextPage = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  const fetchPartners = async () => {
    const url =
      "https://autocomplete.clearbit.com/v1/companies/suggest?query=apple";
    const json = await fetch(url, { mode: "cors" });
    const res = await json.json();

    setPartners(res as Partner[]);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <div>
      <Head>
        <title>MAD Theologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-[90vh] flex-col items-center justify-center">
        <section className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none opacity-40 z-50"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="relative pt-32 pb-12 rounded-2xl">
              {/* Section header */}
              <div className="z-50 text-center pb-12 py-6 md:pb-[20vh] lg:pb-[15vh]">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tighter tracking-tighter mb-4 text-black"
                  data-aos="zoom-y-out"
                >
                  MAD
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-teal-500">
                    Theologies
                  </span>
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-xl text-zinc-900 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Building business online with MAD Theologies, quality and
                    efficient Services our team is more than ready to turn your
                    idea in to reality.
                  </p>
                  <div
                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <div>
                      <button
                        className=" bg-white rounded-full font-medium group p-4 px-7 shadow-lg"
                        aria-controls="modal"
                      >
                        <span>Get in touch with us</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h1 className="text-center mb-20 text-2xl md:text-4xl font-[800]">
        Our Partners
      </h1>
      <div className="flex flex-wrap justify-center">
        {partners.map((partner, index) => (
          <PartnerCard partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Home;
