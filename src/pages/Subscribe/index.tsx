import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, IllustrationReactLogo, Logo } from "../../components";

import { APP_TEXT } from "../../util/appText";
import { RoutesTypeEnum } from "../../routes/enum";
import { useCreateSubscriberMutation } from "../../graphql/generated";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function subscriberHandler(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: { name, email },
    });
    navigate(RoutesTypeEnum.EVENT);
  }

  return (
    <div>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="absolute z-10 top-4">
          <IllustrationReactLogo />
        </div>
        <div className="w-full max-w-[1100px] z-50 flex items-center justify-between mt-20 mx-auto">
          <div className="max-w-[640px]">
            <Logo />
            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {APP_TEXT.HOME_DESCRIPTION}
            </p>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              {APP_TEXT.HOME_FORM_TITLE}
            </strong>
            <form
              onSubmit={subscriberHandler}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                value={name}
                placeholder="Seu nome completo"
                onChange={({ target }) => setName(target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={({ target }) => setEmail(target.value)}
              />
              <button
                disabled={loading}
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {APP_TEXT.BUTTON_FORM_TEXT}
              </button>
            </form>
          </div>
        </div>
        <div className="px-8">
          <img
            src="/src/assets/illustration.png"
            alt="illustration code"
            className="mt-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
