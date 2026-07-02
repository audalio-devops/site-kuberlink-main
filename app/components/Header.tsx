import Image from "next/image";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/react";
import Link from "next/link";

interface HeaderProps {
  handleOpen: (key: string) => void;
}

const Header: React.FC = () => {
  const handleClickScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [key, setkey] = useState({});
  const handleOpen = (keyvalue: any) => {
    setkey(keyvalue);
    onOpen();
  };


  return (
    <div className="w-full mb-16">
      <div className="w-full h-16 bg-green-100 z-50 hidden lg:flex items-center relative custom-light-effect">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-4 lg:ml-2 xl:ml-12">
            <button
              onClick={() => handleClickScroll("abordagem")}
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#10826B] rounded-full cursor-pointer hover:opacity-90 transition-all"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                ABORDAGEM
              </span>
            </button>

            <button
              onClick={() => handleClickScroll("gc")}
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#10826B] rounded-full cursor-pointer hover:opacity-90 transition-all"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                GOOGLE CLOUD
              </span>
            </button>

            <button
              onClick={() => handleClickScroll("servicos")}
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#10826B] rounded-full cursor-pointer hover:opacity-90 transition-all"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                SERVIÇOS
              </span>
            </button>

            <button
              onClick={() => handleClickScroll("clientes")}
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#10826B] rounded-full cursor-pointer hover:opacity-90 transition-all"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                CLIENTES
              </span>
            </button>
          </div>
          <div className="lg:mr-2 xl:mr-12 flex items-center gap-1.5 lg:gap-2">
            <button
              onClick={() => handleOpen("parceiro")} // Modificado aqui
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#487CBF] rounded-full cursor-pointer hover:opacity-90 transition-all"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                SEJA NOSSO PARCEIRO
              </span>
            </button>

            <Link
              href="/login"
              className="px-2.5 lg:px-3 xl:px-4 py-1.5 bg-[#10826B] rounded-full cursor-pointer hover:opacity-90 transition-all flex items-center justify-center no-underline"
            >
              <span className="text-white text-xs lg:text-xs xl:text-sm font-semibold uppercase leading-none tracking-wide whitespace-nowrap">
                LOGIN
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-24 pt-6 bg-[#10826B] justify-center items-start gap-7 flex lg:hidden relative px-4">
        <Image
          src="logo-branca.png"
          width={180}
          height={200}
          alt="Logo Kuberlink"
        ></Image>
        <Link
          href="/login"
          className="absolute right-4 top-1/2 -translate-y-1/2 mt-3 px-3 py-1.5 bg-[#487CBF] rounded-full text-white text-xs font-semibold uppercase tracking-wide cursor-pointer hover:opacity-90 transition-all no-underline"
        >
          Login
        </Link>
      </div>
      <div className="w-full  lg:bg-gradient-to-b lg:from-green-100 lg:to-white">
        <div className="container flex flex-col align-middle  lg:flex-row lg:justify-around">
          <div className="mt-0 text-center w-full lg:w-2/4">
            <div className="lg:hidden w-full p-5 flex justify-center">
              <Image
                src="logo-kuberlink-mobile.png"
                width={300}
                height={200}
                alt="Logo Kuberlink"
              ></Image>
            </div>
            <div className="text-neutral-600 lg:text-[#10826B] text-4xl lg:text-4xl xl:text-5xl font-extrabold uppercase lg:mt-16 xl:mt-28 lg:text-left px-4 lg:px-8 xl:pl-48 max-w-4xl lg:max-w-[700px] xl:max-w-3xl">
              DevOps eficiente. Projetos na nuvem otimizados.
            </div>
            <div className="w-full justify-center flex-col gap-4 lg:text-left flex lg:flex-col lg:gap-1 lg:w-[500px] xl:w-[550px] lg:ml-8 xl:ml-48 mt-2 px-4 lg:px-0">
              <div className="text-neutral-600 text-lg lg:text-xl font-normal">
                Na KuberLink, unimos automação, segurança e monitoramento para
                entregar soluções DevOps que aceleram seu desenvolvimento. Com
                foco em gestão de projetos in cloud, observabilidade, práticas
                de FinOps e segurança, garantimos operação segura e eficiente,
                maximizando o desempenho e otimizando custos.
                <p className="font-semibold mt-8 lg:mt-10 lg:text-[#10826B] lg:w-[500px] xl:w-[500px]">
                  Transforme sua infraestrutura com segurança e agilidade.
                </p>
              </div>
            </div>
            <div className="flex flex-row px-4 gap-4 mt-20 justify-center lg:hidden">
              <div
                className="flex justify-center items-center mt-2"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="gcp_partner.png"
                  width={200}
                  height={200}
                  alt="Google Cloud"
                ></Image>
              </div>
              <div
                className="flex justify-center items-center mt-4"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="aws.png"
                  width={150}
                  height={200}
                  alt="Aws Logo"
                ></Image>
              </div>
            </div>
            <div className="mt-8 lg:mt-6 xl:mt-8 px-4 lg:px-8 xl:pl-48 flex justify-center lg:justify-start">
              <button
                onClick={() => handleClickScroll("contato")}
                className="w-full max-w-[320px] lg:max-w-[360px] h-14 px-6 bg-[#10826B] lg:bg-[#487CBF] rounded-full flex items-center justify-center transition-all hover:opacity-90"
              >
                <span className="text-white text-lg lg:text-xl font-semibold whitespace-nowrap">
                  Entre em contato conosco
                </span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block mt-8 w-full lg:w-2/4">
            <div className="flex flex-col items-center lg:items-center lg:ml-20 xl:items-center xl:ml-20 xl:ml-0">
              <div className="xl:mt-10 lg:mt-20 xl:mt-20 mb-5 max-w-full px-4">
                <img
                  src="logo.png"
                  alt="Logo Kuberlink"
                  className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] h-auto object-contain"
                />
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-4 xl:gap-8 mt-4 xl:mt-8">
                <div className="flex justify-center items-center">
                  <img
                    src="gcp_partner.png"
                    alt="Google Cloud"
                    className="w-auto max-w-[150px] lg:max-w-[180px] xl:max-w-[200px] h-auto object-contain"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="aws.png"
                    alt="AWS Logo"
                    className="w-auto max-w-[100px] lg:max-w-[110px] xl:max-w-[120px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <Modal
          isOpen={isOpen && key === "parceiro"}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="p-0">
                  <div className="relative p-6">
                    {/* Botão de fechar no canto superior direito */}
                    <button
                      onClick={onClose}
                      className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Logo KuberLink */}
                    <div className="flex justify-center mb-8">
                      <img
                        src="group_65.png"
                        alt="KuberLink"
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    {/* Título principal */}
                    <div className="flex items-start gap-6 mb-5 ml-6">
                      <img
                        src="group_43.png"
                        className="h-9 gap-2 w-auto object-contain"
                      />
                      <h2 className="text-3xl font-bold text-gray-600">
                        Transforme sua indicações em oportunidades valiosas!
                      </h2>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                      Estamos empolgados em apresentar o Programa de Indicações Kuberlink, uma iniciativa criada para
                      fortalecer nossa rede de parceiros e impulsionar soluções em Cloud. Nosso objetivo é construir um
                      ecossistema de colaboração onde todos saem ganhando, enquanto promovemos inovação e eficiência.
                    </p>

                    {/* Seções */}
                    <div className="space-y-8 mt-10">
                      {/* Por que participar */}
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-6">
                            <img
                              src="group_43.png"
                              className="h-7 w-auto object-contain"
                            />
                            <h3 className="text-2xl font-bold text-gradient-finops">
                              Por que você deve participar?
                            </h3>
                          </div>

                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">• Contribua para o crescimento do mercado Cloud:</span>
                              {" "}Amplie o alcance de serviços avançados, ajudando empresas a atingirem todo o seu potencial tecnológico.
                            </div>
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">• Receba recompensas exclusivas:</span>
                              {" "}Sua contribuição será reconhecida com benefícios e incentivos que valorizam seu papel em nosso sucesso.
                            </div>
                          </div>
                        </div>

                        <div className="w-96">
                          <img
                            src="iso_certification_amico.png"
                            alt="Ilustração"
                            className="w-full h-60 object-contain"
                          />
                        </div>
                      </div>

                      {/* Tipos de projetos */}
                      <div className="flex items-start justify-between gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-6">
                            <img
                              src="group_43.png"
                              className="h-7 w-auto object-contain"
                            />
                            <h3 className="text-2xl font-bold text-gradient-finops">
                              Quais os tipos de projetos podem ser indicados ?
                            </h3>
                          </div>

                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">• Implementação de novos serviços em Cloud:</span>
                              {" "}Facilite a entrada de empresas no universo Cloud com soluções personalizadas.
                            </div>
                          </div>
                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">• Migração de sistemas:</span>
                              {" "}Auxilie negócios a modernizarem suas operações, migrando para um ambiente Cloud eficiente e seguro.
                            </div>
                          </div>
                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">• Expansão de projetos já existentes:</span>
                              {" "}Apoie empresas que desejam escalar suas operações e maximizar seu impacto.
                            </div>
                          </div>
                        </div>
                        <div className="w-96">
                          <img
                            src="international_trade_amigo.png"
                            alt="Ilustração"
                            className="w-full h-60 object-contain"
                          />
                        </div>
                      </div>

                      {/* Como funciona */}
                      <div className="flex items-start justify-between gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-6">
                            <img
                              src="group_43.png"
                              className="h-7 w-auto object-contain"
                            />
                            <h3 className="text-2xl font-bold text-gradient-finops">
                              Como funciona?
                            </h3>
                          </div>

                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">1. Indique um projeto:</span>
                              {" "}Envie informações detalhadas sobre o cliente em potencial.
                            </div>
                          </div>
                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">2. Acompanhe o progresso:</span>
                              {" "}Nós analisamos, entramos em contato e desenvolvemos a solução ideal.
                            </div>
                          </div>
                          <div className="ml-10">
                            <div className="text-gray-700">
                              <span className="text-gradient-finops font-semibold inline">3. Ganhe sua recompensa:</span>
                              {" "}Assim que o projeto for confirmado, você receberá benefícios personalizados como forma de agradecimento.
                            </div>
                          </div>
                        </div>
                        <div className="w-96">
                          <img
                            src="starting_business_amico.png"
                            alt="Ilustração"
                            className="w-full h-60 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* CTA Final */}
                    <div className="flex items-start justify-between gap-8 bg-gray-50">
                      <div className="w-80">
                        <img
                          src="journey_amico.png"
                          alt="Ilustração"
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4 mt-10">
                          <img
                            src="group_43.png"
                            className="h-7 w-auto object-contain"
                          />
                          <h3 className="text-2xl font-bold text-gradient-finops">
                            Junte-se a nós nesta jornada!
                          </h3>
                        </div>

                        <p className="text-gray-700 mb-4 font-semibold">
                          O futuro é colaborativo, inovador e conectado.
                        </p>
                        <p className="text-gray-700 mb-6">
                          Faça parte dessa transformação e aproveite as vantagens de ser um parceiro ativo na construção de soluções que moldam o amanhã.
                        </p>

                        <p className="text-gradient-finops font-semibold">
                          Indique um projeto agora e conquiste seu lugar no topo da inovação!
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#5965F3] to-[#52CDCB] text-white py-16 mt-12 w-full">
                      <h4 className="text-2xl font-bold text-center mb-2">
                        Transforme a gestão de sua empresa:
                      </h4>
                      <p className="text-center mb-8 text-1xl">
                        Entre em contato com a Kuberlink e potencialize seu negócio!
                      </p>
                      <div className="flex justify-center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2BaFAewPs6UZfaI7GVR_ZGSDjX9APCVEt1s8FMwNuDks-OA/viewform" target="_blank" className="bg-white text-[#4E67E4] px-8 py-3 rounded hover:bg-gray-100 transition-colors font-semibold inline-block no-underline">
                          Entrar em contato
                        </a>
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

export default Header;
