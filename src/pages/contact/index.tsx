import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Saly14 from "../../../public/img/Saly-14.png";

export default function Contact() {
  return (
    <Layout page="Contact">
      <div className="container px-7 min-h-[80vh] pt-20 md:min-h-[90vh] md:grid grid-cols-3 items-center">
        <div className="hidden md:block relative w-full min-h-full">
          <Image
            src={Saly14}
            alt="ini gambar tangan"
            fill
            style={{
              objectFit: "contain",
            }}
            quality={100} />
        </div>
        <div className="contact col-span-2">
          <h1 className="text-white text-5xl font-bold">
            You can reach me any time &#128521;{" "}
          </h1>
          <ul className="text-white list-none mt-12">
            <Link legacyBehavior href="https://github.com/nhardiansa">
              {/* <a target="_blank"> */}
              <li className="mb-4 bg-github bg-no-repeat bg-left pl-6">
                Github: <b>nhardiansa</b>
              </li>
              {/* </a> */}
            </Link>

            {/* <Link legacyBehavior href="https://t.me/matchaboy02">
              <a target='_blank'>
                <li className="mb-4 bg-telegram bg-no-repeat bg-left pl-6">Telegram: <b>@matchaboy02</b></li>
              </a>
            </Link> */}
            <Link legacyBehavior href="mailto:nabilhardiansa02@gmail.com">
              {/* <a target="_blank"> */}
              <li className="mb-4 bg-email bg-no-repeat bg-left pl-8">
                Email: <b>nabilhardiansa02@gmail.com</b>
              </li>
              {/* </a> */}
            </Link>
            <Link legacyBehavior href="https://www.linkedin.com/in/nabil-hardiansa">
              {/* <a target="_blank"> */}
              <li className="mb-4 bg-linkedin bg-no-repeat bg-left pl-6">
                Linkedin: <b>nabil-hardiansa</b>
              </li>
              {/* </a> */}
            </Link>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
