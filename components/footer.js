import Image from 'next/image'

import OurOffice from './our-office'

export default function Footer() {
  return(
    <footer className='w-full bg_LightGray'>
      <div className='container mx-auto px-6 py-8 lg:py-16'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center'>
          <div className='w-full lg:w-6/12'>
            <Image src="/logo.png" alt="" width={373} height={115} className='w-12/12 md:w-auto' />
          </div>
          <div className='w-full lg:w-6/12'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center'>
              <div><OurOffice /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_line py-2 text-center bg_green'>Copyright © 2024 Titan Air Blowers Ltd.</div>
    </footer>
  )
}