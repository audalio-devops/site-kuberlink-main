"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputMask } from "@react-input/mask";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_6lrtv9v",
        "template_fz7s6ad",
        e.target,
        "JgiRrVeqsFLtlLEq3"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          toast.success("Email enviado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "light",
          });
        },
        (error) => {
          setStateMessage(error);
          setIsSubmitting(false);
        }
      );

    e.target.reset();
  };
  return (
    <div className="bg-[#10826B] w-full" id="contato">
      <div className="container  flex flex-col justify-center p-4 items-center">
        <div className="text-center m-8">
          <span className="text-white text-lg ">
            Vamos juntos <b>moldar o futuro</b> dos seus negócios.
          </span>
        </div>
        <form onSubmit={sendEmail}>
          <div className="bg-stone-50 rounded-lg w-full lg:w-[700px] py-12 px-8 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Nome
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  placeholder="Seu Nome"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  placeholder="seuemail@kuberlink.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Cargo
                </label>
                <select
                  id="cargo"
                  name="cargo"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  required
                >
                  <option className="text-base font-medium text-gray-500">
                    Escolha uma opção
                  </option>
                  <option value={"CEO"}>CEO</option>
                  <option value={"Diretor"}>Diretor</option>
                  <option value={"C-Level"}>C-Level</option>
                  <option value={"Gerente"}>Gerente</option>
                  <option value={"Coordenador"}>Coordenador</option>
                  <option value={"Analista"}>Analista</option>
                  <option value={"Assistente"}>Assistente</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  placeholder="Sua Empresa"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Porte da Empresa
                </label>
                <select
                  id="porte"
                  name="porte"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  required
                >
                  <option className="text-base font-medium text-gray-500">
                    Escolha uma opção
                  </option>
                  <option value={"Até 99 funcionários"}>
                    Até 99 funcionários
                  </option>
                  <option value={"De 100 a 499 funcionários"}>
                    De 100 a 499 funcionários
                  </option>
                  <option value={"Mais de 500 funcionários"}>
                    Mais de 500 funcionários
                  </option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Telefone com DDD
                </label>
                <InputMask
                  mask="+__ (__)_____-____"
                  replacement={{ _: /\d/ }}
                  id="phone"
                  name="phone"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  placeholder="55 5555-5555"
                  showMask
                  separate
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-5">
                <label className="block mb-2 text-base font-medium text-gray-500 ">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  className=" text-gray-600 text-sm rounded-lg w-full p-2.5 bg-white border-2 focus:border-[#10826B]"
                  placeholder="Deixe sua mensagem"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="p-3 bg-emerald-700 rounded text-white text-lg font-bold font-['Exo 2']"
              >
                Enviar
              </button>
              <div className="w-3">{stateMessage}</div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
