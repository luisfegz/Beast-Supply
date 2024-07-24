import React from 'react'
import Navbar from '../../components/global/Navbar'
import { LampComponentPrentreno } from '../../components/global/LampComponentPrentreno'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponentPrentreno />
        </section>
      </main>
    </>
  )
}

export default page