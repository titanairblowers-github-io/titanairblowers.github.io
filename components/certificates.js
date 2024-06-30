import Image from 'next/image'

export default function Certificates() {
  return (

    <div className='w-full mb-12 md:mb-16 lg:mb-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-32 certificates_img'>
          <div className='text-center'>
            <Image src="/images/certificates/1.png" alt="" width={218} height={218} style={{width: "auto", height: "auto"}} />
          </div>
          <div className='text-center'>
            <Image src="/images/certificates/2.png" alt="" width={218} height={218} style={{width: "auto", height: "auto"}} />
          </div>
        </div>
      </div>
    </div>
  )
}