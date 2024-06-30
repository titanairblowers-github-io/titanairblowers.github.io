import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function OurOffice() {
  return (
    <Fragment>
      <h3 className='mb-3 mt-0'>Get in Touch with us!</h3>
      <div className='flex items-center mb-3 space-x-4'>
        <Image src="/images/icon/address.svg" alt="" width={16} height={22} />
        <p className='fix_address_w'>42/Y, Shakriba Industrial Estate, B/H Indo German Tool Room, Phase 4, GIDC Vatva, Ahmedabad, (Gujarat) India - 382445.</p>
      </div>
      <div className='flex items-center mb-3 space-x-4'>
        <Image src="/images/icon/phone.svg" alt="" width={17} height={17} />
        <a href="tel:+91 9033318899">+91 9033318899</a>&nbsp;&nbsp;<a href="tel:+91 8866822252">+91 8866822252</a>
      </div>
      <div className='flex items-center mb-3 space-x-4'>
        <Image src="/images/icon/email.svg" alt="" width={18.85} height={13.25} />
        <a href="mailto:contact@titanairblowers.com">contact@titanairblowers.com</a>
      </div>
      <div className='flex items-center my-4 space-x-8'>
        <a href='https://www.titanairblowers.in' target='_blank'>
          <Image src="/images/icon/tradeindia.svg" alt="tradeindia" width={48} height={48} />
        </a>
        <a href='https://www.indiamart.com/titan-air-blowers/' target='_blank'>
          <Image src="/images/icon/indiamart.svg" alt="indiamart" width={48} height={48} />
        </a>
        <a href='https://wa.me/9033318899' target='_blank'>
          <Image src="/images/icon/whatsapp.svg" alt="whatsapp" width={36} height={36} />
        </a>
      </div>
    </Fragment>
  )
}