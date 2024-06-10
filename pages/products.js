import Head from "next/head";
import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";
import Advantages from "../components/advantages";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titan Air Blowers | Products</title>
        <meta name="description" content="Titan Air Blowers | Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_product">
          <div className="container mx-auto px-6 page_title uppercase mb-5">
            Our Products
          </div>
        </div>
        <Advantages />

        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
              <div className="w-full lg:w-8/12">
                <div className="product_flex_copy">
                  <h1>Product</h1>
                  <p>
                    Welcome to Titan Air Blowers' product page showcasing our
                    premier offerings. Crafted with precision and care, our
                    products stand as testament to our commitment to excellence
                    in design and manufacturing.
                  </p>
                  <br></br>
                  <p>
                    One of our core strengths lies in our unwavering dedication
                    to customer service. With Titan Air Blowers, you're not just
                    purchasing a product; you're forging a lasting partnership
                    built on trust and reliability. Our strong client
                    relationships are a testament to this commitment.
                  </p>

                  <h1>1.Twin Lobe Roots Blower</h1>
                  <p>
                    At Titan Air Blowers, we understand the importance of
                    quality materials and precise engineering. That's why our
                    Twin Lobe Roots Blower features high-quality casting casing
                    and covers, ensuring durability and reliability in every
                    application. Utilizing advanced machining processes, we
                    guarantee precise dimensions, providing optimal performance
                    in varied conditions.
                  </p>

                  <h2>Key features of our Twin Lobe Roots Blower include:</h2>
                  <ul>
                    <li>
                      Longevity: Our products are built to last, requiring
                      minimal servicing over their lifespan.
                    </li>
                    <li>
                      Robust Design: Featuring a superior casting body and
                      precisely machined parts, our blower is engineered for
                      durability and efficiency.
                    </li>
                    <li>
                      Low Noise Level: Enjoy quiet operation without
                      compromising on performance.
                    </li>
                    <li>
                      Versatility: Our blower can be seamlessly integrated into
                      both vacuum and pressure systems, offering flexibility in
                      various applications.
                    </li>
                    <li>
                      Superior Components: Equipped with high-quality bearings
                      and well-lubricated gear pairs, our blower ensures smooth
                      and reliable operation.
                    </li>
                    <li>
                      Application: The blowers can be used for material handling
                      where oil free air is required. Major applications include
                      cement industry, food processing, thermal power plant,
                      pharmaceutical industry, mining and aquaculture
                      <p>
                        Experience the Titan Air Blowers difference with our
                        Twin Lobe Roots Blower. Trust in our quality, rely on
                        our service, and elevate your operations with unmatched
                        performance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-4/12 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center lg:items-end">
                <Image
                  src="/product/page/1.png"
                  alt=""
                  width={400}
                  height={297.57}
                  className="w-6/12 lg:w-full"
                />
                <Image
                  src="/product/page/2.png"
                  alt=""
                  width={400}
                  height={308.33}
                  className="w-6/12 lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
              <div className="w-full lg:w-8/12">
                <div className="product_flex_copy">
                  <h1>2.Cement Feeding System:</h1>
                  <p>
                    Introducing Titan Air Blowers' Cement Feeding System,
                    engineered to redefine efficiency and reliability in cement
                    conveying. Crafted from high-grade steel, our system ensures
                    unparalleled structural strength, guaranteeing durability
                    for prolonged use. The integration of a hardened screw
                    mechanism and an efficient roots blower facilitates seamless
                    cement transfer, optimizing workflow and minimizing
                    downtime.
                  </p>
                  <br></br>
                  <p>
                    Supported by a team of skilled fabricators, every component
                    is meticulously crafted to exacting standards, ensuring
                    precision and quality in every detail. Additionally, our
                    system features a pressurized seal and bearing system,
                    effectively safeguarding sensitive areas from material
                    ingress, thereby reducing maintenance needs and prolonging
                    equipment lifespan. Elevate your material handling
                    capabilities with Titan Air Blowers' Cement Feeding System –
                    the epitome of efficiency, durability, and innovation.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-4/12 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center lg:items-end">
                <Image
                  src="/product/page/3.png"
                  alt=""
                  width={400}
                  height={262.03}
                  className="w-6/12 lg:w-full"
                />
                <Image
                  src="/product/page/4.png"
                  alt=""
                  width={400}
                  height={269.09}
                  className="w-6/12 lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
              <div className="w-full lg:w-8/12">
                <div className="product_flex_copy">
                  <h1>3. Bulker Unloading System</h1>
                  <p>
                    Introducing Titan Air Blowers' Bulker Unloading System, an
                    advanced solution designed to streamline the unloading
                    process with unparalleled efficiency and precision.
                    Utilizing our specialized Twin Lobe Blowers, our system
                    ensures optimal performance for bulk material unloading
                    applications.
                  </p>
                  <br></br>
                  <p>
                    The Twin Lobe Blowers employed in our Bulker Unloading
                    System enable high-volume, low-pressure operation,
                    facilitating the swift unloading of materials from bulkers
                    within a remarkably short timeframe. This innovative design
                    not only expedites the unloading process but also ensures
                    gentle handling of the materials, preserving their integrity
                    throughout.
                  </p>
                  <br></br>
                  <p>
                    At Titan Air Blowers, we understand the critical importance
                    of efficiency and reliability in bulk material handling
                    operations. That's why our Bulker Unloading System is
                    engineered to deliver consistent, dependable performance,
                    meeting the rigorous demands of industrial environments.
                  </p>
                  <br></br>
                  <p>
                    Experience the difference that Titan Air Blowers' Bulker
                    Unloading System can make in optimizing your material
                    handling processes. Trust in our commitment to excellence
                    and innovation to elevate your operations to new levels of
                    efficiency and productivity. Choose Titan Air Blowers for
                    superior performance and reliability in bulk material
                    unloading solutions.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-4/12 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center lg:items-end">
                <Image
                  src="/product/page/3.png"
                  alt=""
                  width={400}
                  height={262.03}
                  className="w-6/12 lg:w-full"
                />
                <Image
                  src="/product/page/4.png"
                  alt=""
                  width={400}
                  height={269.09}
                  className="w-6/12 lg:w-full"
                />
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
                <h2>1.Twin Lobe Roots Blower</h2>
                <h3>Description</h3>
                <h3>Features</h3>
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
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 lg:w-6/12 xl:w-5/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl office_contect">
                <h2>2.Cement Feeding System</h2>
                <h3>Description</h3>
                <h3>Features</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent nec lectus a nibh aliquet auctor non in neque. Nunc
                  vestibulum, diam vitae placerat asd af fringilla, leo neque
                  pharetra nunc, vel voasdhbaiy.
                </p>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 flex justify-center office_img ">
                <Image
                  src="/office.png"
                  alt=""
                  width={631}
                  height={421}
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
