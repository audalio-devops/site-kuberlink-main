"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/react";

const Sections: React.FC = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [key, setkey] = useState({});
  // const [hasOpenedFinOps, setHasOpenedFinOps] = useState(false);

  const handleOpen = (keyvalue: any) => {
    setkey(keyvalue);
    onOpen();
  };

  // useEffect(() => {
  //   // Verifica se o modal de FinOps já foi aberto nesta sessão
  //   if (!hasOpenedFinOps) {
  //     // Abre o modal de FinOps no carregamento
  //     handleOpen("finops");

  //     // Marca que o modal foi aberto para não abrir novamente nesta carga
  //     setHasOpenedFinOps(true);
  //   }
  // }, [hasOpenedFinOps]);


  return (
    <div className="flex flex-row justify-center flex-wrap lg:mt-16 container">
      <div className="w-full lg:hidden flex justify-center flex-col gap-0">
        <div className="mt-0 pt-0" style={{ marginTop: "-8rem" }}>
          <Image
            src="ilustra-1-mobile.png"
            width={400}
            height={100}
            alt="arte 1"
          ></Image>
        </div>
        <div className="text-center text-neutral-600  text-4xl font-bold mt-0 pt-0 ">
          Nosso nome reflete a nossa abordagem
        </div>
        <div className="text-center text-neutral-600  text-lg font-normal mt-2 px-12 ">
          <b>Kube (Kubernetes):</b> Especialista em oferecer soluções avançadas
          de orquestração na nuvem, garantindo escalabilidade e gerenciamento
          eficaz de aplicativos.
          <p className="mt-2">
            <b>Link (Conexão):</b> Fortalecemos conexões entre pessoas, ideias e
            inovações, impulsionando a colaboração e a eficiência.
          </p>
          <p className="mt-2">
            {" "}
            <b>Kuber (Riqueza):</b> Almejamos enriquecer suas experiencias na
            nuvem, proporcionando soluções que otimizam processos e impulsionam
            o crescimento dos negócios.
          </p>
        </div>
      </div>
      <div className="w-full" id="abordagem">
        <div className="text-center lg:text-[#10826B] my-8 px-2 text-neutral-600 font-bold text-xl lg:font-semibold uppercase leading-tight tracking-wide">
          Estamos prontos para tornar suas visões em realidade
        </div>
        <div className="bg-[#10826B] text-white p-4 flex flex-col lg:hidden">
          <div className="text-center text-lg font-bold">
            {" "}
            Confie na segurança e confiabilidade do armazenamento Google Cloud
          </div>
          <ul className="flex flex-col justify-center text-md w-full text-center gap-1 mt-6">
            <li>
              <b>Business Intelligence</b>
            </li>
            <li>Computação</li>
            <li>
              <b>Containers</b>
            </li>
            <li>Análise de dados</li>
            <li>
              <b>Banco de dados</b>
            </li>
            <li>Nuvem híbrida e várias nuvens</li>
            <li>
              <b>Migração</b>
            </li>
            <li>Redes</li>
            <li>
              <b>Operações</b>
            </li>
            <li>Segurança e Identidade</li>
            <li>
              <b>Sem servidor</b>
            </li>
            <li>Armazenamento</li>
            <li>
              <b>Ferramenta de gerenciamento</b>
            </li>
            <li>Produtividade e colaboração</li>
          </ul>
        </div>
        <div className="text-center text-neutral-600 text-2xl font-bold  my-4 hidden lg:block">
          Nosso nome reflete a nossa abordagem
        </div>
        <div className=" flex-col  w-full py-8 gap-2 m-auto lg:flex-row lg:w-[1024px] hidden lg:flex">
          <div
            className="flex justify-center items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src="ilustra-1.png"
              width={300}
              height={100}
              alt="arte 1"
            ></Image>
          </div>
          <div className="px-4 lg:px-0 text-center mt-8 lg:text-left">
            <span className="text-neutral-600 text-base font-semibold ">
              Kube (Kubernetes):
            </span>
            <span className="text-neutral-600 text-base font-normal ">
              Especialista em oferecer soluções avançadas de orquestração na
              nuvem, garantindo escalabilidade e gerenciamento eficaz de
              aplicativos.
              <br />
              <br />
            </span>
            <span className="text-neutral-600 text-base font-semibold ">
              Link (Conexão):
            </span>
            <span className="text-neutral-600 text-base font-normal ">
              Fortalecemos conexões entre pessoas, ideias e inovações,
              impulsionando a colaboração e a eficiência.
              <br />
              <br />
            </span>
            <span className="text-neutral-600 text-base font-semibold ">
              Kuber (Riqueza):
            </span>
            <span className="text-neutral-600 text-base font-normal ">
              Almejamos enriquecer suas experiencias na nuvem, proporcionando
              soluções que otimizam processos e impulsionam o crescimento dos
              negócios.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block" id="gc">
        <div className="text-center text-[#10826B] text-md font-semibold  uppercase leading-tight tracking-wide">
          Google cloud
        </div>
        <div className="text-center text-neutral-600 text-4xl font-bold   my-4">
          Descubra ferramentas poderosas
        </div>
        <div className="text-neutral-600 text-lg font-normal  lg:w-[1024px] px-4 text-center m-auto">
          Confie na segurança e confiabilidade incomparáveis do armazenamento
          Google Cloud para proteger seus dados sensíveis e elevar a eficiência
          operacional de sua empresa.
        </div>
        <div className="flex flex-col pt-8 lg:flex-row lg:justify-center lg:items-center ">
          <ul className="text-neutral-600 text-base font-medium  text-center lg:text-left lg:w-1/4">
            <li>Business Intelligence</li>
            <li>Computação</li>
            <li>Containers</li>
            <li>Análise de dados </li>
            <li>Banco de dados</li>
            <li>Nuvem híbrida e várias nuvens</li>
            <li>Migração</li>
            <li>Redes</li>
            <li>Operações </li>
            <li>Segurança e Identidade</li>
            <li>Sem servidor</li>
            <li>Armazenamento </li>
            <li>Ferramenta de gerenciamento</li>
            <li>Produtividade e colaboração</li>
          </ul>
          <div className="p-8 lg:p-0 lg:w-1/4">
            <div
              className="flex justify-center items-center mt-4"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="avatar2.png"
                width={600}
                height={400}
                alt="arte 1"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className="flex justify-center items-center mt-4"
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src="gcp.png"
              width={200}
              height={200}
              alt="Google Clooud"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full " id="servicos">
        <div
          className="w-full hidden lg:block text-center text-[#10826B] text-md font-semibold  uppercase leading-tight tracking-wide mt-12"
          id="bio"
        >
          Serviços
        </div>
        <div className="w-full hidden lg:block text-center text-neutral-600 text-4xl font-bold   my-4">
          Cresça com as nossas metodologias
        </div>
        <div className="w-full hidden lg:block text-neutral-600 text-lg font-normal  px-4 lg:w-[1024px] text-center m-auto">
          Transforme seu negócio com nossos serviços baseados em nuvem,
          proporcionando flexibilidade, segurança e escalabilidade para o
          crescimento contínuo da sua empresa.
        </div>
        <div className="flex flex-col m-auto lg:flex-row lg:w-[1024px]">
          <div className="flex mt-8 flex-col px-4 lg:w-1/2 ">
            <div className="text-center lg:text-left">
              <span className="text-[#10826B] text-2xl font-bold   lg:text-neutral-600 lg:text-lg ">
                Otimização de Custos e Eficiência em projetos do
              </span>
              <span className="text-[#10826B] text-2xl lg:text-lg font-bold  ml-2">
                Google Cloud
              </span>
            </div>
            <div className=" text-left text-neutral-600 text-lg font-normal   mt-4 hidden lg:flex">
              A otimização de custos e eficiência em projetos no Google Cloud
              usa estrategicamente recursos como instâncias sob demanda,
              automação e análise de uso para garantir eficiência operacional e
              maximizar o retorno sobre o investimento.
            </div>
            <button
              className="w-44 h-14 px-7 pt-3 rounded-full border-2 border-[#10826B] mt-4 hidden lg:flex hover:bg-[#10826B]"
              onClick={() => handleOpen("otimizacao")}
            >
              <div className="text-center text-[#10826B] text-base font-semibold  leading-7 flex flex-row justify-center hover:text-white">
                <span>Saiba mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 ml-2 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex justify-self-start lg:mt-[-4rem]">
            <Image
              src="avatar3.png"
              width={500}
              height={400}
              alt="Info arte 3"
            ></Image>
          </div>
          <div
            className="lg:hidden text-[#10826B] text-2xl font-bold  text-center mt-0 underline"
            onClick={() => handleOpen("otimizacao")}
          >
            Saiba mais
          </div>
          <hr className="border-gray-300 w-96 flex justify-center px-8 ml-6 mt-4 lg:hidden" />
        </div>
        <div className="flex flex-col-reverse m-auto lg:flex-row lg:w-[1024px] lg:mt-[-10rem]">
          <hr className="border-gray-300 w-96 flex justify-center px-8 ml-6 mt-4 lg:hidden" />
          <div
            className="lg:hidden text-[#10826B] text-2xl font-bold  text-center mt-0 underline"
            onClick={() => handleOpen("solucoes")}
          >
            Saiba mais
          </div>

          <div className="flex justify-center flex-row lg:w-1/2 lg:p-4">
            <div
              className="flex justify-center items-center mt-4"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="avatar4.png"
                width={500}
                height={400}
                alt="Ilustração 4"
              ></Image>
            </div>
          </div>
          <div className="flex justify-center flex-col lg:w-1/2 lg:p-4">
            <div className="text-center mt-8 lg:mt-0 lg:text-left">
              <span className="text-[#10826B] text-2xl font-bold  lg:text-neutral-600 lg:text-lg">
                Soluções de Gestão de Projetos Cloud:
              </span>
              <span className="text-[#10826B] text-2xl lg:text-lg font-bold  ml-2">
                Análise e Planejamento para o futuro
              </span>
            </div>
            <div className="text-neutral-600 text-base font-normal  leading-relaxed hidden lg:flex">
              Implementar Soluções de Gestão de Projetos Cloud é essencial para
              realizar uma análise estratégica e um planejamento eficaz,
              preparando as empresas para um futuro de inovação e
              competitividade.
            </div>
            <button
              className="w-44 h-14 px-7 pt-3 rounded-full border-2 border-[#10826B] mt-4 hidden lg:flex visited:border-[#10826B] hover:bg-[#10826B]"
              onClick={() => handleOpen("solucoes")}
            >
              <div className="text-center text-[#10826B] text-base font-semibold  leading-7 flex flex-row justify-center hover:text-white">
                <span>Saiba mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 ml-2 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col m-auto lg:flex-row lg:w-[1024px] lg:mt-[-1rem]">
          <div className="flex flex-col px-4 lg:w-1/2">
            <div className="text-center mt-8 lg:mt-0 lg:text-left">
              <span className="text-[#10826B] text-2xl font-bold   lg:text-neutral-600 lg:text-lg">
                Monitoramento Inteligente de Apps e
              </span>
              <span className="text-[#10826B] text-2xl lg:text-lg font-bold  ml-2">
                Infraestrutura no Google Cloud
              </span>
            </div>
            <div className="text-neutral-600 text-base font-normal  leading-relaxed hidden lg:flex">
              Monitoramento Inteligente essencial para operações eficientes e
              seguras, melhorando a performance e a confiabilidade dos serviços.
            </div>
            <button
              className="w-44 h-14 px-7 pt-3 rounded-full border-2 border-[#10826B] mt-4 hidden lg:flex  hover:bg-[#10826B]"
              onClick={() => handleOpen("monitoramento")}
            >
              <div className="text-center text-[#10826B] text-base font-semibold  leading-7 flex flex-row justify-center hover:text-white">
                <span>Saiba mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 ml-2 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex justify-center flex-row">
            <div className="flex justify-self-start">
              <div className="flex justify-self-start lg:mt-[-6rem]">
                <Image
                  src="avatar5.png"
                  width={450}
                  height={100}
                  alt="Avatar 4"
                ></Image>
              </div>
            </div>
          </div>
          <div
            className="lg:hidden text-[#10826B] text-2xl font-bold  text-center mt-0 underline"
            onClick={() => handleOpen("monitoramento")}
          >
            Saiba mais
          </div>
          <hr className="border-gray-300 w-96 flex justify-center px-8 ml-6 mt-4 lg:hidden" />
        </div>
        <div className="flex flex-col-reverse m-auto lg:flex-row lg:w-[1024px]">
          <hr className="border-gray-300 w-96 flex justify-center px-8 ml-6 mt-4 lg:hidden" />

          <div
            className="lg:hidden text-[#10826B] text-2xl font-bold  text-center mt-0 underline"
            onClick={() => handleOpen("protecao")}
          >
            Saiba mais
          </div>

          <div className="flex justify-center flex-row lg:w-1/2 lg:p-4">
            <div className="flex justify-self-start lg:mt-[-5rem]">
              <Image
                src="avatar2.png"
                width={400}
                height={400}
                alt="Ilustração 2"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col px-4 lg:w-1/2 mt-12 lg:mt-[-1rem]">
            <div>
              <span className="text-[#10826B] text-2xl font-bold   lg:text-neutral-600 lg:text-lg">
                Serviços de Segurança em Cloud:
              </span>
              <span className="text-[#10826B] text-2xl lg:text-lg font-bold ">
                Protegendo seus dados e Apps
              </span>
            </div>
            <div className="text-neutral-600 text-base font-normal  leading-relaxed hidden lg:flex">
              Os Serviços de Segurança em Cloud são fundamentais para proteger
              seus dados e aplicativos, garantindo operações seguras, confiáveis
              e resilientes em um ambiente digital cada vez mais complexo e
              dinâmico.
            </div>
            <button
              className="w-44 h-14 px-7 pt-3 rounded-full border-2 border-[#10826B] mt-4 hidden lg:flex visited:border-[#10826B] hover:bg-[#10826B]"
              onClick={() => handleOpen("protecao")}
            >
              <div className="text-center text-[#10826B] text-base font-semibold  leading-7 flex flex-row justify-center hover:text-white">
                <span>Saiba mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 ml-2 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8 m-auto lg:flex-row lg:w-[1024px]">
          <div className="flex  flex-col px-4 lg:w-1/2">
            <div className="text-center mt-8 lg:mt-0 lg:text-left">
              <span className="text-[#10826B] text-2xl font-bold   lg:text-neutral-600 lg:text-lg">
                CCS: Comunicação, Colaboração e
              </span>
              <span className="text-[#10826B] text-2xl lg:text-lg font-bold  ml-2">
                Segurança com Google Cloud
              </span>
            </div>
            <div className="text-neutral-600 text-base font-normal  leading-relaxed hidden lg:flex">
              Oferece uma plataforma integrada para gestão eficiente,
              colaboração produtiva e proteção avançada de dados, garantindo
              operações seguras e confiáveis para sua organização.
            </div>
            <button
              className="w-44 h-14 px-7 pt-3 rounded-full border-2 border-[#10826B] mt-4 hidden lg:flex visited:border-[#10826B] hover:bg-[#10826B]"
              onClick={() => handleOpen("comunicacao")}
            >
              <div className="text-center text-[#10826B] text-base font-semibold  leading-7 flex flex-row justify-center hover:text-white">
                <span>Saiba mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 ml-2 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex justify-center flex-row">
            <div
              className="flex justify-center items-center mt-4"
              style={{ width: "100%", height: "100%", marginTop: "-1rem" }}
            >
              <Image
                src="avatar6.png"
                width={400}
                height={200}
                alt="Avatar 2"
              ></Image>
            </div>
          </div>
          <div
            className="lg:hidden text-[#10826B] text-2xl font-bold  text-center mt-0 mb-8 underline"
            onClick={() => handleOpen("comunicacao")}
          >
            Saiba mais
          </div>
          <hr className="border-gray-300 w-96 flex justify-center px-8 ml-6 lg:hidden" />
        </div>
      </div>
      <div
        className="w-full py-8 bg-gradient-to-b from-[#] to-white"
        id="clientes"
      >
        <div className="text-center text-[#10826B] lg:text-neutral-600 text-3xl font-semibold  leading-10">
          Nossos clientes
        </div>
        <div className="text-center text-[#10826B] text-xl font-normal  hidden lg:flex lg:justify-center">
          Alguns clientes que usam as nossas metodologias
        </div>
        <div className="w-full overflow-hidden py-8">
          <div className="relative">
            {/* Container principal do slider */}
            <div className="flex whitespace-nowrap">
              {/* Primeiro conjunto de logos */}
              <div
                className="flex items-center gap-16 lg:gap-24 animate-slide"
                style={{
                  animation: 'slide 45s linear infinite'
                }}
              >
                <div className="inline-flex w-44 lg:w-48 items-center justify-center">
                  <img
                    src="logo-recicla-mais.png"
                    alt="Logo recicla mais"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-52 lg:w-56 items-center justify-center">
                  <img
                    src="logo-metropoles.png"
                    alt="Logo metropoles"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-52 lg:w-56 items-center justify-center">
                  <img
                    src="logo-market4u.png"
                    alt="Logo Market4u"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-44 lg:w-48 items-center justify-center">
                  <img
                    src="logo-pb.png"
                    alt="Logo pb"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-32 lg:w-36 items-center justify-center">
                  <img
                    src="logo-pro.png"
                    alt="Logo pro"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-36 lg:w-40 items-center justify-center">
                  <img
                    src="itc-logo.png"
                    alt="Logo Itc"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="inline-flex w-36 lg:w-40 items-center justify-center">
                  <img
                    src="Lance.png"
                    alt="Logo Lance"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="inline-flex w-36 lg:w-40 items-center justify-center">
                  <img
                    src="Sat.png"
                    alt="Logo Sat"
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Repetição dos logos para efeito infinito */}
                <div className="inline-flex w-44 lg:w-48 items-center justify-center">
                  <img
                    src="logo-recicla-mais.png"
                    alt="Logo recicla mais"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-52 lg:w-56 items-center justify-center">
                  <img
                    src="logo-metropoles.png"
                    alt="Logo metropoles"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-44 lg:w-48 items-center justify-center">
                  <img
                    src="logo-pb.png"
                    alt="Logo pb"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-32 lg:w-36 items-center justify-center">
                  <img
                    src="logo-pro.png"
                    alt="Logo pro"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="inline-flex w-36 lg:w-40 items-center justify-center">
                  <img
                    src="itc-logo.png"
                    alt="Logo Itc"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <Modal
          isOpen={isOpen && key === "otimizacao"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  <span className="text-[#10826B] text-lg text-center">
                    Serviços
                  </span>
                  <span className="text-neutral-600 text-2xl text-center ">
                    Otimização de Custos e Eficiência em projetos do
                    <span className="text-[#10826B]">Google Cloud</span>
                  </span>
                </ModalHeader>
                <ModalBody className="text-neutral-600 text-base font-normal  leading-relaxed p-12">
                  <p>
                    A otimização de custos e eficiência em projetos no Google
                    Cloud usa estrategicamente recursos como instâncias sob
                    demanda, automação e análise de uso para garantir eficiência
                    operacional e maximizar o retorno sobre o investimento.
                  </p>
                  <p>
                    Nossos serviços de gestão e controle de custos para Google
                    Cloud foram projetados para ajudar você a maximizar seu
                    retorno sobre o investimento. Nossa equipe de especialistas
                    analisa detalhadamente seus recursos, identificando áreas de
                    desperdício e sugerindo práticas recomendadas para otimizar
                    seus gastos na nuvem. Com ferramentas avançadas de
                    monitoramento e relatórios detalhados, ajudamos a
                    dimensionar seus recursos de forma eficiente e a reduzir
                    custos desnecessários. Fornecemos soluções personalizadas,
                    insights acionáveis e suporte contínuo para garantir uma
                    infraestrutura de Google Cloud otimizada e eficiente, tudo
                    para manter seus custos sob controle. Entre em contato para
                    agendar uma consulta e impulsionar a eficiência e
                    rentabilidade de seus projetos na nuvem.
                  </p>
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <ul className="text-neutral-600 text-sm list-disc w-full">
                      <li>
                        Maximização do ROI através de gestão e controle de
                        custos na Google Cloud
                      </li>
                      <li>
                        Análise detalhada de recursos para identificar áreas de
                        desperdício
                      </li>
                      <li>
                        Sugestão de práticas recomendadas para otimização de
                        gastos na nuvem
                      </li>
                      <li>
                        Utilização de ferramentas avançadas de monitoramento e
                        relatórios detalhados
                      </li>
                      <li>
                        Dimensionamento eficiente de recursos para reduzir
                        custos desnecessários
                      </li>
                      <li>
                        Fornecimento de soluções personalizadas e insights
                        acionáveis
                      </li>
                      <li>
                        Suporte contínuo para garantir uma infraestrutura
                        otimizada na Google Cloud
                      </li>
                      <li>
                        Consulta disponível para impulsionar eficiência e
                        rentabilidade dos projetos na nuvem
                      </li>
                    </ul>
                    <div className="justify-start lg:w-full">
                      <Image
                        src="avatar3.png"
                        width={500}
                        height={400}
                        alt="Info arte 3"
                      ></Image>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpen && key === "solucoes"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  <span className="text-[#10826B] text-lg text-center">
                    Serviços
                  </span>
                  <span className="text-neutral-600 text-2xl text-center ">
                    Soluções de Gestão de Projetos Cloud:
                    <span className="text-[#10826B]">
                      Análise e Planejamento para o Futuro
                    </span>
                  </span>
                </ModalHeader>
                <ModalBody className="text-neutral-600 text-base font-normal  leading-relaxed p-12">
                  <p>
                    Implementar Soluções de Gestão de Projetos Cloud é essencial
                    para realizar uma análise estratégica e um planejamento
                    eficaz, preparando as empresas para um futuro de inovação e
                    competitividade.
                  </p>
                  <p>
                    Nossa equipe de especialistas em cloud começa com uma
                    avaliação completa do seu ambiente atual. Analisamos a
                    eficiência, a segurança e a escalabilidade da sua
                    infraestrutura para identificar áreas de melhoria e
                    otimização. Com base nessas descobertas, fornecemos
                    recomendações personalizadas para aprimorar o desempenho e
                    reduzir custos, garantindo que sua infraestrutura esteja
                    alinhada com suas necessidades de negócio.
                  </p>
                  <p>
                    Se você está procurando otimizar sua infraestrutura de cloud
                    e se preparar para as exigências futuras, nossa equipe está
                    pronta para ajudá-lo. Entre em contato conosco hoje mesmo
                    para uma consulta e descubra como podemos ajudar a
                    transformar seu ambiente de cloud em uma plataforma robusta
                    e pronta para o futuro.
                  </p>
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <ul className="text-neutral-600 text-sm list-disc w-full">
                      <li>Gestão completa de projetos em cloud</li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Análise detalhada da infraestrutura atual
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Desenvolvimento de estratégias para crescimento futuro
                      </li>

                      <li>Avaliação para identificar áreas de melhoria </li>
                      <li>
                        Recomendações personalizadas para melhorar desempenho e
                        reduzir custos
                      </li>
                      <li>
                        Desenvolvimento de estratégia de cloud escalável e
                        segura
                      </li>
                      <li>Acompanhamento contínuo e suporte técnico</li>
                      <li>Prontidão para otimizar infraestrutura de cloud</li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Consulta disponível para explorar possibilidades de
                        transformação.
                      </li>
                    </ul>
                    <div className="justify-start lg:w-full">
                      <Image
                        src="avatar4.png"
                        width={500}
                        height={400}
                        alt="Ilustração 4"
                      ></Image>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpen && key === "monitoramento"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  <span className="text-[#10826B] text-lg text-center">
                    Serviços
                  </span>
                  <span className="text-neutral-600 text-2xl text-center ">
                    Monitoramento Inteligente de
                    <span className="text-[#10826B]">
                      Apps e Infraestrutura no Google Cloud
                    </span>
                  </span>
                </ModalHeader>
                <ModalBody className="text-neutral-600 text-base font-normal  leading-relaxed p-12">
                  <p>
                    Monitoramento Inteligente essencial para operações
                    eficientes e seguras, melhorando a performance e a
                    confiabilidade dos serviços.
                  </p>
                  <p>
                    Nossos serviços de monitoramento incluem relatórios
                    detalhados e painéis personalizáveis para que você possa
                    visualizar seus dados da maneira mais conveniente. Isso
                    permite que você tome decisões informadas sobre a alocação
                    de recursos, planeje a expansão de sua infraestrutura e
                    mantenha seus aplicativos funcionando com desempenho máximo.
                  </p>
                  <p>
                    Com nosso serviço de monitoramento, você tem a tranquilidade
                    de saber que sua infraestrutura e aplicativos no Google
                    Cloud estão sendo vigiados por uma equipe dedicada. Entre em
                    contato conosco para saber mais sobre como podemos ajudá-lo
                    a manter seu ambiente de cloud seguro, eficiente e em pleno
                    funcionamento.
                  </p>
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <ul className="text-neutral-600 text-sm list-disc w-full">
                      <li>
                        Monitoramento completo de aplicativos e infraestrutura
                        no Google Cloud
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Visibilidade para antecipar problemas e melhorar o
                        desempenho
                      </li>
                      <li>
                        Coleta de dados em tempo real e alertas configuráveis
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Identificação e resolução rápida de anomalias
                      </li>
                      <li>
                        Análise de padrões e suporte técnico para otimização
                      </li>
                      <li>Relatórios detalhados e painéis personalizáveis</li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Acompanhamento contínuo e suporte técnico
                      </li>
                      <li>Prontidão para otimizar infraestrutura de cloud</li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Facilita tomada de decisões informadas
                      </li>
                      <li>Equipe dedicada para monitoramento contínuo </li>
                      <li>Consulta disponível para mais informações.</li>
                    </ul>
                    <div className="justify-start lg:w-full">
                      <Image
                        src="avatar5.png"
                        width={500}
                        height={400}
                        alt="Ilustração 4"
                      ></Image>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpen && key === "protecao"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  <span className="text-[#10826B] text-lg text-center">
                    Serviços
                  </span>
                  <span className="text-neutral-600 text-2xl text-center ">
                    Serviços de Segurança em Cloud:
                    <span className="text-[#10826B]">
                      Protegendo seus dados e Apps
                    </span>
                  </span>
                </ModalHeader>
                <ModalBody className="text-neutral-600 text-base font-normal  leading-relaxed p-12">
                  <p>
                    Os Serviços de Segurança em Cloud são fundamentais para
                    proteger seus dados e aplicativos, garantindo operações
                    seguras, confiáveis e resilientes em um ambiente digital
                    cada vez mais complexo e dinâmico.
                  </p>
                  <p>
                    Oferecemos serviços de monitoramento no Google Cloud para
                    antecipar problemas, melhorar o desempenho e proporcionar
                    uma experiência excepcional aos clientes. Utilizamos
                    tecnologias avançadas para coletar dados em tempo real e
                    oferecer análises detalhadas, com alertas configuráveis e
                    suporte técnico para garantir a continuidade do serviço.
                    Nossos relatórios e painéis personalizáveis facilitam
                    tomadas de decisões informadas.
                  </p>
                  <p>
                    Com base nessa avaliação, desenvolvemos uma estratégia de
                    segurança personalizada para sua empresa. Isso inclui a
                    implementação de soluções de segurança robustas, como
                    firewalls, sistemas de detecção e prevenção de intrusões,
                    gerenciamento de identidades e acesso, criptografia de dados
                    e muito mais. Também ajudamos a garantir que suas operações
                    em cloud estejam em conformidade com regulamentações e
                    padrões de segurança relevantes, como GDPR e HIPAA.
                  </p>
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <ul className="text-neutral-600 text-sm list-disc w-full">
                      <li>
                        Proteção abrangente em cloud para dados, aplicativos e
                        infraestrutura
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Abordagem em camadas com tecnologias avançadas
                      </li>
                      <li>
                        Avaliação detalhada para identificar vulnerabilidades
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Desenvolvimento de estratégia personalizada de segurança
                      </li>
                      <li>
                        Implementação de soluções robustas e garantia de
                        conformidade
                      </li>
                      <li>Monitoramento contínuo e resposta a incidentes</li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Minimização de riscos e redução de tempo de inatividade
                      </li>
                      <li>
                        Consulta disponível para saber mais sobre os serviços de
                        segurança em cloud.
                      </li>
                    </ul>
                    <div className="justify-start lg:w-full">
                      <Image
                        src="avatar2.png"
                        width={500}
                        height={400}
                        alt="Ilustração 4"
                      ></Image>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpen && key === "comunicacao"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  <span className="text-[#10826B] text-lg text-center">
                    Serviços
                  </span>

                  <span className="text-neutral-600 text-2xl text-center ">
                    CCS:
                    <span className="text-[#10826B]">
                      Comunicação, Colaboração e Segurança com Google Cloud
                    </span>
                  </span>
                </ModalHeader>
                <ModalBody className="text-neutral-600 text-base font-normal  leading-relaxed p-12">
                  <p>
                    Oferece uma plataforma integrada para gestão eficiente,
                    colaboração produtiva e proteção avançada de dados,
                    garantindo operações seguras e confiáveis para sua
                    organização.
                  </p>
                  <p>
                    Na Kuberlink, oferecemos soluções integradas com o Google
                    Workspace para impulsionar a comunicação, colaboração e
                    segurança nos negócios. Nossa expertise permite fornecer
                    soluções personalizadas, utilizando ferramentas como Google
                    Vault e Data Loss Prevention. Trabalhamos em colaboração
                    para implementar práticas recomendadas, oferecendo
                    treinamento e suporte contínuo. Com nossa ajuda, sua empresa
                    pode melhorar a eficiência e segurança, aproveitando ao
                    máximo o Google Workspace. Entre em contato para descobrir
                    como podemos ajudar sua empresa a prosperar com o Google
                    Workspace.
                  </p>
                  <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
                    <ul className="text-neutral-600 text-sm list-disc w-full">
                      <li>
                        Soluções integradas do Google Workspace para impulsionar
                        produtividade, inovação e segurança
                      </li>
                      <li className="list-inside  text-neutral-700 font-bold m-1">
                        Personalização de ferramentas como Google Vault e Data
                        Loss Prevention
                      </li>
                      <li>
                        Colaboração estreita para garantir transição suave e
                        oferecer suporte contínuo
                      </li>
                      <li>
                        Capacitação da equipe para alcançar resultados
                        excepcionais com segurança
                      </li>
                      <li>
                        Consulta disponível para descobrir como prosperar com o
                        Google Workspace.
                      </li>
                    </ul>
                    <div className="justify-start lg:w-full">
                      <Image
                        src="avatar6.png"
                        width={400}
                        height={400}
                        alt="Ilustração 5"
                      ></Image>
                    </div>
                  </div>
                  <div
                    className="hidden lg:flex lg:justify-center lg:w-[850px] m-12"
                    id="gw"
                  >
                    <Image
                      src="servicos-google.png"
                      width={800}
                      height={400}
                      alt="Avatar 2"
                    ></Image>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isOpen && key === "finops"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                  <div className="w-full">
                    <div className="container flex flex-col align-middle  lg:flex-row lg:justify-around">
                      <div className="mt-0 text-center w-full lg:w-2/4">
                        <div className="lg:text-[#10826B] text-4xl text-neutral-600 lg:text-5xl lg:pl-30 font-extrabold lg:mt-10 lg:text-left text-gradient-finops">
                          Participe!
                        </div>
                        <div className="w-full justify-center flex-col gap-4 lg:text-left flex lg:flex-col lg:gap-1 lg:w-90 lg:ml-10 xl:ml-1 mt-4">
                          <div className="text-neutral-600 text-xl font-normal">
                            <p className="mt-1 mb-1">
                              Concorra a uma <span className="font-semibold">avaliação FinOps gratuita para a sua empresa!</span>
                            </p>
                            Transforme seus custos em cloud em investimentos eficientes com a avaliação FinOps da Kuberlink.
                            Nossos especialistas identificam desperdícios e otimizações para reduzir gastos e melhorar o desempenho do seu ambiente cloud.
                            Economize mais e aumente a previsibilidade financeira da sua empresa!

                          </div>
                        </div>
                        <div className="flex justify-start mt-5"> {/* Alinhando o botão à esquerda */}
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvexOWPRm3qzEL20dS-4JjnmaAmEz2lRz641jWa6rKqGQvjw/viewform" target="_blank" rel="noopener noreferrer">
                            <button className="text-white font-semibold py-2 px-6 rounded-lg text-lg bg-gradient-to-r from-[#5965F3] to-[#52CDCB] hover:from-[#52CDCB] hover:to-[#5965F3] transition-colors">
                              Quero participar
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="mt-8 w-full lg:w-2/4">
                        <div className="flex flex-col items-center">
                          <div className="hidden lg:flex mt-5">
                            <Image
                              src="finops.png"
                              width={400}
                              height={200}
                              alt="Logo Kuberlink"
                            ></Image>
                          </div>
                          <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:mt-2 lg:mb-2 lg:justify-center">
                            <div
                              className="flex justify-center items-center"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <Image
                                src="gcp_partner.png"
                                width={200}
                                height={200}
                                alt="Google Partner"
                              ></Image>
                            </div>
                            <div
                              className="flex justify-center items-center mt-3"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <Image
                                src="aws.png"
                                width={120}
                                height={200}
                                alt="Aws Partner"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Sections;
