import Head from "next/head";
import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";
import Advantages from "../components/advantages";
import Certificates from "../components/certificates";

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
        <div className="w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_about">
          <div className="container mx-auto px-6 page_title uppercase mb-5">
            About Us
          </div>
        </div>
        <Advantages />
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center">
              <div className="w-full lg:w-6/12">
                <Image
                  src="/about_us.jpeg"
                  alt=""
                  width={630}
                  height={396}
                  className="rounded-3xl shadow-md w-full"
                />
              </div>
              <div className="w-full lg:w-6/12">
                <h2>About Us</h2>
                <p>
                  Welcome to Titan Air Blowers, your go-to destination for
                  high-quality industrial solutions. Based in one of Gujarat's
                  oldest and largest industrial estates, we specialize in
                  manufacturing cement silos, bulker unloading systems, roots
                  blowers, cement feeding systems, and water ring vacuum pumps.
                  Founded with a commitment to excellence, we pride ourselves on
                  delivering products that meet the highest standards of
                  quality, efficiency, and reliability.
                </p>
                <br></br>
                <p>
                  At Titan Air Blowers, we believe in doing things right. That's
                  why we manufacture most of our parts in-house, ensuring that
                  every component meets our stringent quality standards. Our
                  team of well-trained, skilled, and organized employees works
                  with dedication to produce durable and efficient products that
                  can withstand even the toughest conditions.
                </p>
                <br></br>
                <p>
                  We understand that every customer has unique needs. That’s why
                  we offer customized solutions designed to meet your specific
                  requirements. Whether you need a specialized cement silo or a
                  custom-designed roots blower, our products are designed to
                  perform and exceed your expectations.
                </p>
                <br></br>
                <p>
                  Transparency and exceptional service are at the core of our
                  business philosophy. We never compromise on materials, spare
                  parts, or the quality of our products. From the moment you
                  contact us and throughout the lifespan of our products, you
                  can count on us for unwavering support and top-notch service.
                  Your satisfaction is our priority, and we are committed to
                  ensuring your experience with Titan Air Blowers is nothing
                  short of outstanding.
                </p>
                <br></br>
                <p>
                  We're excited to partner with you and help bring your projects
                  to life with innovation and integrity. Let's work together to
                  build a brighter, more efficient future.
                </p>
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
