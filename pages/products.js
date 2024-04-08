import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/image'
import Advantages from '../components/advantages'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes | Products</title>
        <meta name="description" content="Farmer Pro Pipes | Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_product'>
          <div className='container mx-auto px-6 page_title uppercase mb-5'>Our Products</div>
        </div>
        <Advantages />

        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between'>
              <div className='w-full lg:w-8/12'>
                <div className='product_flex_copy'>
                  <h1>HDPE Pipe & Fittings</h1>
                  <p>Manufactured from high density poly ethylene polymers our product are manufactures as per Specification. IS : 4984 of BIS.</p>

                  <h2>Product Range</h2>
                  <ul>
                    <li>Size: 20 mm to 315 mm</li>
                    <li>Pressure Rating : Pn 2.5 kg/cm2 to 10.0 kg/c,2</li>
                    <li>Grades : PE - 63, 80 & 100</li>
                    <li>Length : Available in pipe and coil form in different sizes</li>
                  </ul>
                  <h2>Benifits</h2>
                  <ul>
                    <li>Flexibility and perfect weld ability</li>
                    <li>Abrasion and wear resistant</li>
                    <li>Chemical resistant</li>
                    <li>Low co-efficient of friction</li>
                    <li>Tough, Strong and Low Weight</li>
                    <li>Weather Resistant</li>
                  </ul>
                  <h2>Applications</h2>
                  <ul>
                    <li>Used in Water supply distribution System</li>
                    <li>Replacement of G.. Pipes in borewell application of Submersible Pumps</li>
                    <li>For suction and delivery lines of jet pumps and centrifugal pumps</li>
                    <li>Used for disposal of corrosive effuents chemicals, treated/untreated waste, acids and alkalis for conveying edible oils, fruit pulp, juices, milk and other products</li>
                    <li>Can be used for carrying Soil, Waste etc to appropriate drains or sewers through an underground network of pipes</li>
                    <li>Can be used as ducts for Air conditioning and Ventilation</li>
                    <li>Used for industrial waste treatment plants and water treatment plants</li>
                    <li>For disposal of ands slurry in dredging operation and for transporting slurries of Iron Ore, Fly Ash etc</li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-4/12 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center lg:items-end'>
                  <Image src="/product/page/1.png" alt="" width={400} height={297.57} className='w-6/12 lg:w-full' />
                  <Image src="/product/page/2.png" alt="" width={400} height={308.33} className='w-6/12 lg:w-full'/>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between'>
              <div className='w-full lg:w-8/12'>
                <div className='product_flex_copy'>
                  <h1>Sprinkler Pipe</h1>
                  <p>Worlwide HDPE Sprinkler is found to be the best method to get maximum yield at a low cost. Mahashakti Sprinkler. Pipes are manufactured from High Density poly ethylene. Our Products are manufactured as per Specification IS: 14151 Part Il of BIS.</p>

                  <h2>Product Range</h2>
                  <ul>
                    <li>Available in Butt Fusion and Friction Welding, Ranging 63 mm to 110 mm diameter with complete range of fittings</li>
                    <li>Available in latch clamping 'M' Type and Single 'C' Type Clamping.</li>
                  </ul>
                  <h2>Applications</h2>
                  <ul className='no_dot'>
                    <li>Used for irrigation and water distribution in farm lands, gardens, horticulture, floriculture, wormiculture.</li>
                  </ul>
                  <h2>Benefites</h2>
                  <ul>
                    <li>Eco-friendly saves water upto 70%</li>
                    <li>Helps in cleaning the surface of plants there by helping them in easy photosynthesis</li>
                    <li>Results in better yield</li>
                    <li>In winter season, sprinkler system saves the surface of the plants from accumulation of frozen water</li>
                    <li>In summers, sprinkler system spreads the water in the farmland uniformly and saves the plants from water clogging and scarcicity</li>
                  </ul>
                  <h2>Accessories</h2>
                  <ul>
                    <li>Coupled bennd</li>
                    <li>Coupled tee</li>
                    <li>Pump Connecting nipple</li>
                    <li>Sprinklklkler Attanhment Foot Batten</li>
                    <li>End Cap</li>
                    <li>Riser Pipe</li>
                    <li>Sprinkler nozzle</li>
                    <li>Raingun ith tripod stand</li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-4/12 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center items-center lg:items-end'>
                  <Image src="/product/page/3.png" alt="" width={400} height={262.03} className='w-6/12 lg:w-full' />
                <Image src="/product/page/4.png" alt="" width={400} height={269.09} className='w-6/12 lg:w-full'/>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-6'>
            <div className='flex gap-5 justify-center items-center mb-7'>
              <Image src="/title_icon/certificates.svg" alt="" width={43} height={47} />
              <h1 className='m-0'>Other Products</h1>
            </div>
            <div className='flex flex-wrap gap-8 md:gap-12 lg:gap-16 justify-center'>
              <div className='text-center'>
                <Image src="/product/page/5.png" alt="" width={240} height={240} />
                <h3>Garden Pipes</h3>
              </div>
              <div className='text-center'>
                <Image src="/product/page/6.png" alt="" width={240} height={240} />
                <h3>PP Ropes</h3>
              </div>
              <div className='text-center'>
                <Image src="/product/page/7.png" alt="" width={240} height={240} />
                <h3>Section Pipes</h3>
              </div>
              <div className='text-center'>
                <Image src="/product/page/8.png" alt="" width={240} height={240} />
                <h3>LD Kishan Pipes</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
