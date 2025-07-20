import React from "react"

interface PillProps {
  title: string
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="text-[12px] font-medium text-[#4B4B4B] border px-3 py-1 rounded-full">
      {title}
    </div>
  )
}

export default Pill