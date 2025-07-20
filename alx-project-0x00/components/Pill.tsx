import React from "react"
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="text-[12px] font-medium text-[#4B4B4B] border px-3 py-1 rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill