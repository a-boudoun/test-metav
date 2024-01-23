'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white  ">
      <section className="flex mt-10 justify-between px-20 container mx-auto">
        <div className=" w-[50%] flex flex-col gap-4 ">
          <h1 className="text-6xl">
            What is <br/>
            Mental Health?
          </h1>
          <p className="text-2xl">
          Mental health encompasses the overall well-being of an individual's emotional and psychological state. In South Africa, mental health disorders are prevalent, with the South African Stress and Health (SASH) study reporting that around 30% of the population will experience a mental disorder in their lifetime.
          </p>
        </div>
        <div>
          <Image src="./what.svg" alt = "#" width={500} height={500}>

          </Image>
        </div>
      </section>
      <section className="mt-8 px-20 container mx-auto">
        <p>
        Additionally, the South African Depression and Anxiety Group (SADAG) estimates that approximately 1 in 6 South Africans suffer from anxiety, depression, or substance abuse disorders. The suicide rate in South Africa, according to the World Health Organization (WHO) data for 2016, was approximately 13.8 per 100,000 population. Unfortunately, mental health stigma persists, as highlighted by a study conducted by the Human Sciences Research Council (HSRC) in 2008, revealing that 78% of South Africans believe individuals with mental health problems are unfit for work. Access to mental health services remains a challenge, with the SASH study indicating that only 15% of South Africans with a mental health disorder received treatment in the year preceding the study. Socioeconomic factors such as financial stress and unemployment significantly contribute to mental health problems in the country, according to the South African Depression and Anxiety Group (SADAG).
        </p>
      </section>
      <section style={{ backgroundImage: `url("./bggg.svg")`, backgroundSize: 'cover' }} >
        <div className="flex justify-evenly mt-10 py-24 px-10 container mx-auto">
          <div className="flex items-center flex-col gap-12">
            <h1 className="text-3xl">
              Handling Mental Health
            </h1>
            <Image src="./handling.svg" alt = "#" width={500} height={500}>

            </Image>

          </div>
          <div className="flex gap-4 items-start flex-col justify-center">
            <h2 className="text-2xl">
              How can i help myself?
            </h2>
            <ol className="flex flex-col gap-2">
              <li>
               i.Try to be active and exercise.
              </li>
              <li>
              ii. Break large tasks into small ones.
              </li>
              <li>
              iv. Spend time with friends and family.
              </li>
              <li>
              iii. Set priorities.
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="flex justify-evenly mt-10 py-24 px-10 container mx-auto ">
       
          <div className="flex gap-4 items-start flex-col justify-center">
            <h2 className="text-2xl">
            How can I help others?            </h2>
            <ol className="flex flex-col gap-2">
              <li>
              i. Offer support and patience.              
              </li>
              <li>
              ii. Invite him/her to outdoor activities e.g. walks.              
              </li>
              <li>
              iii. Remind him about his medication frequently.              
              </li>
              <li>
              iv. Encourage them that with time and treatment,
                  depression will lift.
              </li>
            </ol>
          </div>
        <div className="flex items-center flex-col gap-12">
          <Image src="./handling.svg" alt = "#" width={500} height={500}>

          </Image>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
