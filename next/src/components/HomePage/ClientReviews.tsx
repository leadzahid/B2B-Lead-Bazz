"use client";
import adamkosloff from "@/../public/images/client/adamkosloff.jpg";
import clmentgilly from "@/../public/images/client/clmentgilly.jpg";
import damiencarrier from "@/../public/images/client/damiencarrier.jpg";
import davidli16888 from "@/../public/images/client/davidli16888.jpg";
import jonah_joy from "@/../public/images/client/jonah_joy.jpg";
import theopascard from "@/../public/images/client/theopascard.jpg";
import star from "@/../public/star.png";
import Image from "next/image";
const clients = [
  {
    id: 1,
    name: "Adam",
    review:
      "Once again, Lead Zahid delivers! Excited to test out this batch. Fingers crossed, we got a lot of connects, and then we can hopefully do this process on a more regular basis.",
    photo: adamkosloff,
  },
  {
    id: 2,
    name: "Damien",
    review:
      "Zahid exceeded all expectations with his work on my project. His attention to detail, professionalism, and ability to follow instructions were exceptional. ",
    photo: damiencarrier,
  },
  {
    id: 3,
    name: "David",

    review:
      "Once again, Zahid delivers the goods quickly and with very little guidance required. Thank you, and I'm excited to use your services again in the near future.",
    photo: davidli16888,
  },
  {
    id: 4,
    name: "Theopas",

    review:
      "Zahid a fait du très bon travail, il est très professionnel et à l'écoute. Excellent rapport qualité - prix Je recommande.",
    photo: theopascard,
  },
  {
    id: 5,
    name: "Clment",
    review:
      "Super quick data scrapping of exactly what I needed. Using Zahid's services now 5 times! And will be more.",
    photo: clmentgilly,
  },
  {
    id: 6,
    name: "Jonah",
    review:
      "Thanks, Zahid--lightning fast delivery, and you went above and beyond what I asked for in the order. Excited to test these out, and we'll see how it goes. I hope to come back to you for research orders in the future.",
    photo: jonah_joy,
  },
];

function Reviews() {
  return (
    <section className=" max-w-7xl mx-auto px-5">
      <div className=" flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-800">
          Users sharing their experience
        </h1>
        <p className="sm:text-base text-sm text-gray-600 mt-2">
          Real Stories, Real Success: Hear from Our Satisfied Clients
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {clients.map((i) => (
          <div
            key={i.id}
            className="group shadow bg-white border-2 border-transparent hover:border-purple-700 p-7 md:p-10 rounded-lg transition duration-300 ease-linear hover:shadow-xl hover:-translate-y-1"
          >
            <svg
              data-v-922fb0dd=""
              className="w-5 sm:w-6 absolute right-5 top-5 group-hover:block hidden"
              viewBox="0 0 62 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-922fb0dd=""
                opacity="0.1"
                d="M36.8281 0H62.0001V25.315L51.906 45.5975H39.358L49.4015 25.315H36.8281V0Z"
                fill="#5b268f"
              ></path>
              <path
                data-v-922fb0dd=""
                opacity="0.1"
                d="M0 0H24.8838V25.5385L14.9053 46H2.50088L12.4294 25.5385H0V0Z"
                fill="#5b268f"
              ></path>
            </svg>
            <div className=" flex gap-3 sm:gap-5">
              <div className=" w-12 h-12  bg-gray-300 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-purple-700">
                <Image
                  src={i.photo}
                  alt=""
                  className=" object-cover w-12 h-12"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h2 className=" text-base sm:text-xl font-medium">{i.name}</h2>
                <div className=" flex">
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                  <Image src={star} alt="star" width={18} />
                </div>
              </div>
            </div>
            <p className=" text-xs sm:text-sm mt-3">{i.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
