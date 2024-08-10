import React from 'react'
import Navbar from '../../components/global/Navbar'
import { LampComponentSearch } from '../../components/global/lampSearch'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponentSearch />
        </section>
      </main>
    </>
  )
}

export default page