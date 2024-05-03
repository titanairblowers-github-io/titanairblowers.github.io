import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/image'
import Advantages from '../components/advantages'
import Certificates from '../components/certificates'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titan Air Blowers | About Us</title>
        <meta name="description" content="Titan Air Blowers | About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_about'>
          <div className='container mx-auto px-6 page_title uppercase mb-5'>About Us</div>
        </div>
        <Advantages />
        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center'>
              <div className='w-full lg:w-6/12'>
                <Image src="/section_img1.png" alt="" width={630} height={396} className='rounded-3xl shadow-md w-full' />
              </div>
              <div className='w-full lg:w-6/12'>
                <h2>About Us</h2>
                <p>Welcome to Titan Air Blowers, where innovation meets reliability in the world of root blower manufacturing. Founded in the vibrant city of Ahmedabad, Gujarat, by two determined friends, Raghuvirsingh Tomar and Rajan Thakkar, our journey began with a shared vision to transform the industrial sector with cutting-edge technology and impeccable craftsmanship.</p>
                <br></br>
                <p>Drawing upon our combined expertise and passion for engineering, we embarked on a mission to design and produce top-of-the-line root blowers that set new benchmarks for performance, efficiency, and durability. With a commitment to excellence ingrained in our DNA, we strive to exceed the expectations of our customers while contributing to the advancement of various industries worldwide.</p>
                <br></br>
                <p>We understand the critical role that root blowers play in numerous applications, from wastewater treatment and pneumatic conveying to aeration and chemical processing. That's why we pour our heart and soul into every aspect of our manufacturing process, from meticulous design and precision engineering to rigorous quality control measures.</p>
                <br></br>
                <p>We adhere to stringent industry standards and best practices, ensuring that each product bearing the Titan Air Blower seal represents the pinnacle of engineering excellence.</p>
               


              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-6'>
            <p className='text-center'>However, our commitment to customer satisfaction doesn't end with the sale. We believe in fostering long-term partnerships built on trust, transparency, and unwavering support. Our dedicated team of professionals is always on hand to provide expert guidance, technical assistance, and prompt after-sales service, ensuring that your experience is nothing short of exceptional.</p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
