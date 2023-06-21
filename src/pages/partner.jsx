import Image_WorkshopElektro from "@/assets/partner_elektro.png";
import Image_Formadiksi from "@/assets/partner_formadiksi.png";
import Image_ICN from "@/assets/partner_icn.png";

import Image from "next/image";
import Link from "next/link";

const industryPartners = [
  {
    name: "PT. ICN",
    image: Image_ICN,
    link: "#",
  },
];

const communityPartners = [
  {
    name: "Formadiksi",
    image: Image_Formadiksi,
    link: "#",
  },
  {
    name: "Workshop Elektro",
    image: Image_WorkshopElektro,
    link: "#",
  },
];

export default function Partner() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-6xl font-bold text-coreBlue-primary">
          Partner Kami
        </h1>
        <div className="flex flex-col item-center justify-center">
          <h2 className="text-4xl text-center font-semibold">
            Partner Perusahaan
          </h2>
          <div className="grid lg:grid-cols-3 gap-3 justify-items-center mt-8">
            {/* looping more card for coreteam */}
            {industryPartners.map((partner) => (
              // looping card with length of coreteam
              <Link
                key={partner.name}
                href={partner.link}
                className="rounded-xl flex flex-col items-center justify-center border-2 border-coreBlue-100 gap-3 bg-coreBlue-50 shadow-xl hover:outline hover:outline-coreBlue-500 hover:outline-offset-2"
              >
                <div className="relative h-full flex flex-col gap-2 overflow-hidden p-5 text-center">
                  <div className="w-full">
                    <Image
                      src={partner.image}
                      alt="profile"
                      className="rounded-full w-full"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2 className="text-3xl py-4 font-semibold">
                    {partner.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col item-center justify-center">
          <h2 className="text-4xl text-center font-semibold">
            Partner Komunitas
          </h2>
          <div className="grid lg:grid-cols-3 gap-3 justify-items-center mt-8">
            {/* looping more card for coreteam */}
            {communityPartners.map((partner) => (
              // looping card with length of coreteam
              <Link
                key={partner.name}
                href={partner.link}
                className="rounded-xl flex flex-col items-center justify-center border-2 border-coreBlue-100 gap-3 bg-coreBlue-50 shadow-xl hover:outline hover:outline-coreBlue-500 hover:outline-offset-2"
              >
                <div className="relative h-full flex flex-col gap-2 overflow-hidden p-5 text-center">
                  <div className="w-full">
                    <Image
                      src={partner.image}
                      alt="profile"
                      className="rounded-full w-full"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2 className="text-3xl py-4 font-semibold">
                    {partner.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
