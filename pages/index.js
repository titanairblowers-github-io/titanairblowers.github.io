import Head from "next/head";
import Link from "next/link";
import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";
import Advantages from "../components/advantages";
import Certificates from "../components/certificates";
import Carousel from "react-responsive-carousel";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Titan Air Blowers</title>
        <meta name="description" content="Titan Air Blowers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="w-full home_hero">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-center items-center py-16 md:py-20 lg:py-24">
              <div className="lg:w-6/12">
                <div className="header_typo">
                  <div className="header_typo1 text_shadow">Welcome to</div>
                  <div className="header_typo2 text_shadow">
                    Titan Air Blowers
                  </div>
                </div>
                <div className="header_typo_p text_shadow">
                  Engineering Excellence and Reliable Service
                </div>
                <Link href="/products">
                  <button className="btn btn_lg">See Our Products</button>
                </Link>
              </div>
              <div className="lg:w-6/12 flex justify-center md:justify-end items-center mt-8 lg:mt-0">
                <Image
                  src="/hero_product.png"
                  alt=""
                  width={571}
                  height={452}
                />
              </div>
            </div>
          </div>
        </div>
        <Advantages />
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center">
              <div className="w-full lg:w-6/12">
                <Image
                  src="/section_img1.png"
                  alt=""
                  width={630}
                  height={396}
                  className="rounded-3xl shadow-md w-full"
                />
              </div>
              <div className="w-full lg:w-6/12">
                <h1>About Us</h1>
                <p>
                  Discover Titan Air Blowers, the leading provider of twin lobe
                  roots blowers and accessories. Situated in Ahmedabad, India,
                  we serve diverse sectors including the cement industry, food
                  processing units, thermal power plants, and chemical
                  industries. Our commitment to quality and service excellence
                  remains unmatched. From cement feeding systems to bulker
                  unloading systems, we offer a comprehensive range of solutions
                  tailored to your specific needs. Trust Titan Air Blowers for
                  superior performance and reliability in industrial air
                  handling.
                </p>
                <Link href="/about-us">
                  <button className="btn">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-10 md:mb-14 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center">
              <div className="w-full lg:w-6/12 card_vision p-6 md:p-8 rounded-3xl shadow-md">
                <div className="flex flex-col justify-center">
                  <h2>Vision</h2>
                  <p>
                  Our vision is to excel as the foremost provider of air handling equipment, distinguished by precision machining, superior materials and spare parts, and seamless services. We aim to be unparalleled leaders in both domestic and international markets.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-6/12 card_mission p-6 md:p-8 rounded-3xl shadow-md">
                <div className="flex flex-col justify-center">
                  <h2>Mission</h2>
                  <p>
                  At Titan Air Blowers, we are dedicated to engineering excellence, delivering innovative solutions for air handling needs. Through relentless focus on precision manufacturing, superior material sourcing, and exceptional customer service, we strive to exceed expectations, ensuring sustainable growth and enduring partnerships worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Certificates />

        <div className="w-full mb-12 md:mb-16 lg:mb-20 bg_LightGray">
          <div className="container mx-auto px-6 py-12 md:py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center">
              <div className=" w-full lg:w-4/12">
                <h1> Products</h1>
                <p>
                  Welcome to Titan Air Blowers' product page showcasing our
                  premier offerings. Crafted with precision and care, our
                  products stand as testament to our commitment to excellence in
                  design and manufacturing.
                </p>
                <Link href="/products">
                  <button className="btn">See Our Products</button>
                </Link>
              </div>
              <div className="w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8 items-center">
                <div className="text-center mx-auto">
                  <Image src="/product/Twin Lobe Roots Blower.png" alt="" width={222} height={222} />
                  <h3>Twin Lobe Roots Blower</h3>
                </div>
                <div className="text-center mx-auto">
                  <Image src="/product/Cement Feeding System.png" alt="" width={222} height={222} />
                  <h3>Cement Feeding System</h3>
                </div>
                <div className="text-center mx-auto">
                  <Image src="/product/Bulker Unloading System.jpg" alt="" width={222} height={222} />
                  <h3>Bulker Unloading System</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 flex justify-center office_img ">
                <Image
                  src="/office.png"
                  alt=""
                  width={631}
                  height={421}
                  className="rounded-3xl w-full"
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 xl:w-5/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl office_contect">
                <h2>Infrastructure & Machine</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent nec lectus a nibh aliquet auctor non in neque. Nunc
                  vestibulum, diam vitae placerat asd af fringilla, leo neque
                  pharetra nunc, vel voasdhbaiy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
