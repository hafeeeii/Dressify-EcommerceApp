import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Custon404 = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center gap-5 text-center px-2 mt-5">
    <Image src="/404.svg" alt="img" width={400} height={400} />
    <h2 className="text-4xl ">Oops...That link is broken.</h2>
    <p className="text-sm tracking-wide ">
      Sorry for the inconvenience. Go to our homepage or check out our latest
      collections.
    </p>
    <Link href="/">
      <button className="bg-black text-white text-xs py-4 px-7 font-medium rounded-full">
        BACK TO HOME PAGE
      </button>
    </Link>
  </div>
  )
}

export default Custon404