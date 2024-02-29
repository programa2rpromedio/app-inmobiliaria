import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Depto from "@/images/depto.svg";
import Sup from "@/images/sup.svg";
import Bed from "@/images/bed.svg";
import Bath from "@/images/bath.svg";
import Pet from "@/images/pet.svg";

export default function PropiedadCard() {
  return (
    <>
      <div className="bg-[#ffffff] p-2 rounded-md h-[208px] mx-auto">
        <div className="mb-1">
          <Image src={Depto} alt="" className=" " width={145} height={110} />
        </div>
        <div className="mb-1">
          <p className="font-bold text-[10px] ">$350.000/mes </p>
          <p className="text-[8px] ">Departamento en alquiler</p>
          <p className="text-gray-9 text-[8px] ">Almagro, Capital Federal</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 ">
            <Image src={Sup} alt="" className=" " width={7} height={7} />
            <p className="text-[7px] ">75 mt2</p>
          </div>
          <div className="flex gap-1 ">
            <Image src={Bed} alt="" className=" " width={9} height={9} />
            <p className="text-[7px] ">2</p>
          </div>
          <div className="flex gap-1  ">
            <Image src={Bath} alt="" className=" " width={9} height={9} />
            <p className="text-[7px] ">1</p>
          </div>
          <div className="flex gap-1  ">
            <Image src={Pet} alt="" className=" " width={9} height={9} />
            <p className="text-[7px] ">NO</p>
          </div>
        </div>

        <div>
          <Button className="h-[18px] w-[140px] text-[7px]">Ver más</Button>
        </div>
      </div>
    </>
  );
}
