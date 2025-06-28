import Image from "next/image";
import React from "react";
import { clients } from "../constant";

const ImageComponent = () => {
  return (
    <>
      <section className="relative bg-white">
        <div className="w-[1000px] overflow-hidden flex justify-center mx-auto">
          <Image
            src="/images/children.svg"
            alt="Children"
            width={1600}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="bg-yellow-400 py-10 px-6 md:px-20 -mt-2 text-center">
        <h3 className="text-white font-bold text-xl mb-8">Our Trusted Clients</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-6 justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default ImageComponent;
