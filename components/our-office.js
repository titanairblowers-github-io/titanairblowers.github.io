import Image from 'next/image'
import { Fragment } from 'react'

export default function OurOffice() {
  return (
    <Fragment>
      <h3 className='mb-2.5 mt-0'>Address</h3>
      <div className='flex items-center mb-2.5'>
        <Image src="/icon/address.svg" alt="" width={16} height={22} className='mr-2' />
        <p className='fix_address_w'>Shead No. 42/Z Shakriba Industrial Estate, B/H Indo German Tool Room, Phase 4, Vatva GIDC, Vatva, Ahmedabad, (Gujarat) India.</p>
      </div>
      <div className='flex items-center mb-2.5'>
        <Image src="/icon/phone.svg" alt="" width={17} height={17} className='mr-2' />
        <a href="tel:+91 9033318899">+91 9033318899</a>&nbsp;&nbsp;<a href="tel:+91 8866822252">+91 8866822252</a>
      </div>
      <div className='flex items-center mb-2.5'>
        <Image src="/icon/email.svg" alt="" width={18.85} height={13.25} className='mr-2' />
        <a href="mailto:raghuvirsinghtomar@gmail.com">raghuvirsinghtomar@gmail.com</a>
      </div>
    </Fragment>
  )
}