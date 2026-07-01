import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col content-center justify-center flex-wrap bg-neutral-600 py-12 text-center text-white text-base font-normal ">
        <div className="text-center lg:w-[800px]">
          Com soluções de armazenamento e logística na nuvem, oferecemos
          tranquilidade, confiança e inovação. Prontos para ser seu parceiro
          estratégico, vamos juntos moldar o futuro dos seus negócios.
        </div>
        <div className="py-8 flex justify-center">
          <Image
            src="logo-branca.svg"
            width={400}
            height={80}
            alt="Google Cloud"
          ></Image>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row lg:hidden">
            <div className="text-white text-base font-normal  w-full">
              <p>
                <b>São Paulo,</b>
              </p>
              <p>Rua Dr. Guilherme Bannitz, 126 Bairro: Itaim Bibi</p>
              <p>CEP: 04532-060</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-zinc-800 items-center inline-flex w-full py-10">
        <div className="w-full flex flex-row justify-around container">
          <div className="lg:flex lg:flex-row lg:justify-center hidden">
            <div className="lg:flex lg:flex-row hidden">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="mt-10 mr-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_312_213"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path
                    d="M5.90527 21.1714C3.49194 21.8954 1.99994 22.8954 1.99994 24.0001C1.99994 26.2094 7.96927 28.0001 15.3333 28.0001C22.6973 28.0001 28.6666 26.2094 28.6666 24.0001C28.6666 22.8954 27.1739 21.8954 24.7613 21.1714"
                    stroke="white"
                  />
                  <path
                    d="M15.3333 22.6667C15.3333 22.6667 24 17.0027 24 10.4547C24 5.78533 20.12 2 15.3333 2C10.5466 2 6.66663 5.78533 6.66663 10.4547C6.66663 17.0027 15.3333 22.6667 15.3333 22.6667Z"
                    fill="white"
                    stroke="white"
                  />
                  <path
                    d="M15.3333 14.0002C16.2173 14.0002 17.0652 13.649 17.6903 13.0239C18.3154 12.3987 18.6666 11.5509 18.6666 10.6668C18.6666 9.78277 18.3154 8.93493 17.6903 8.30981C17.0652 7.68469 16.2173 7.3335 15.3333 7.3335C14.4492 7.3335 13.6014 7.68469 12.9762 8.30981C12.3511 8.93493 11.9999 9.78277 11.9999 10.6668C11.9999 11.5509 12.3511 12.3987 12.9762 13.0239C13.6014 13.649 14.4492 14.0002 15.3333 14.0002Z"
                    fill="black"
                    stroke="black"
                  />
                </mask>
                <g mask="url(#mask0_312_213)">
                  <path
                    d="M-0.666687 -0.666504H31.3333V31.3335H-0.666687V-0.666504Z"
                    fill="white"
                  />
                </g>
              </svg>
              <div className="text-white text-base font-normal ">
                <p>
                  <b>São Paulo,</b>
                </p>
                <p>São Paulo Rua Dr. Guilherme Bannitz, 126 </p>
                <p>Bairro: Itaim Bibi </p>
                <p>CEP: 04532-060</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 py-8">
            <a href="https://www.instagram.com/kuberlink/" target="_balnk">
              <Image
                src="instagram.png"
                width={40}
                height={40}
                alt="Google Cloud"
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/company/kuberlink/"
              target="_balnk"
            >
              <Image
                src="linkedin.png"
                width={40}
                height={40}
                alt="Google Cloud"
              ></Image>
            </a>
            <a
              href="https://wa.me/5511989397014?text=Ol%C3%A1%20kuberlink%2C%20podemos%20conversar%3F%20"
              target="_balnk"
            >
              <Image
                src="whatsapp.png"
                width={40}
                height={40}
                alt="Google Cloud"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
