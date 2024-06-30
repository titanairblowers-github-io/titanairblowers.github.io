import Head from "next/head";
import Link from "next/link";
import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";
import Advantages from "../components/advantages";
import Certificates from "../components/certificates";
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
            <div className="flex flex-col lg:flex-row justify-center items-center py-20 md:py-24 lg:py-32">
              <div className="lg:w-9/12">
                <div className="header_typo">
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
            </div>
          </div>
        </div>
        <Advantages />
        <div className="w-full mb-4 md:mb-6 lg:mb-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center">
              <div className="w-full lg:w-6/12">
                <Image
                  src="/images/about_us.jpeg"
                  alt=""
                  width={630}
                  height={396}
                  className="rounded-3xl shadow-md w-full"
                />
              </div>
              <div className="w-full lg:w-6/12">
                <h1>About Us</h1>
                <p>
                Discover Titan Air Blowers. From cement feeding systems to bulker unloading systems, we offer a comprehensive range of solutions tailored to your specific needs. Situated in Ahmedabad, India, we serve diverse sectors including the cement industry, food processing units, thermal power plants, and chemical industries. Our commitment to quality and service excellence remains unmatched. Trust Titan Air Blowers for superior performance and reliability in industrial air handling.
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
                  We aim to be an unparalleled leader in both domestic and international markets as the foremost provider of pneumatic conveying system.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-6/12 card_mission p-6 md:p-8 rounded-3xl shadow-md">
                <div className="flex flex-col justify-center">
                  <h2>Mission</h2>
                  <p>
                  We are dedicated to engineering excellence, delivering innovative solutions for air handling needs. Through relentless focus on precision manufacturing, superior material sourcing, and exceptional customer service, we strive to exceed expectations, ensuring sustainable growth and enduring partnerships worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div className="w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-4 lg:gap-8 items-center">
                <div className="text-center mx-auto">
                  <div className="shadow-sm border p-4">
                    <Image src="/images/product/cement silo.png" alt="" width={222} height={222} style={{width: "300px", height: "200px"}} />
                  </div>
                  <h3>Cement Silos</h3>
                </div>
                <div className="text-center mx-auto">
                  <div className="shadow-sm border p-4">
                    <Image src="/images/product/cement_feeding_system.png" alt="" width={222} height={222} style={{width: "300px", height: "200px"}} />
                  </div>
                  <h3>Cement Feeding System</h3>
                </div>
                <div className="text-center mx-auto">
                  <div className="shadow-sm border p-4">
                    <Image src="/images/product/bulker unloading system.png" alt="" width={222} height={222} style={{width: "300px", height: "200px"}} />
                  </div>
                  <h3>Bulker Unloading System</h3>
                </div>
                <div className="text-center mx-auto">
                  <div className="shadow-sm border p-4">
                    <Image src="/images/product/twin lobe roots blower.png" alt="" width={222} height={222} style={{width: "300px", height: "200px"}} />
                  </div>
                  <h3>Twin Lobe Roots Blower</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
