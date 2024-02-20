import React from 'react'
import { MdScale } from 'react-icons/md'

const ActionButtons = () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
    <div className=" btn-ghost btn">
      <MdScale />
      <button>Size Guide</button>
    </div>
    <div className=" btn-ghost btn">
      <MdScale />
      <button>Compare Color</button>
    </div>
    <div className=" btn-ghost btn">
      <MdScale />
      <button>Ask A Question</button>
    </div>
    <div className=" btn-ghost btn">
      <MdScale />
      <button>vShare</button>
    </div>
  </div>
  )
}

export default ActionButtons