import Image from 'next/image'

export default function Advantages() {
  return (
    <div className='w-full mb-12 md:mb-16 lg:mb-20 bg_green'>
      <div className='container mx-auto px-6 py-6 md:py-8'>
        <div className='icon_section m-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='icon_card flex items-center md:justify-center'>
            <Image src="/images/icon/1.png" alt="" width={49} height={49} style={{width: "auto", height: "auto"}} />
            <p>Quality<br />Assurance</p>
          </div>
          <div className='icon_card flex items-center md:justify-center'>
            <Image src="/images/icon/2.png" alt="" width={49} height={49} style={{width: "auto", height: "auto"}} />
            <p>Innovative <br />Craftsmanship</p>
          </div>
          <div className='icon_card flex items-center md:justify-center'>
            <Image src="/images/icon/3.png" alt="" width={49} height={49} style={{width: "auto", height: "auto"}} />
            <p>Customization</p>
          </div>
          <div className='icon_card flex items-center md:justify-center'>
            <Image src="/images/icon/4.png" alt="" width={49} height={49} style={{width: "auto", height: "auto"}} />
            <p>After-Sales Service</p>
          </div>
        </div>
      </div>
    </div>
  )
}