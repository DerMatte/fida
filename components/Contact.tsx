import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

import SectionContainer from "components/SectionContainer";
import { Phone, Envelope, MapPin } from "phosphor-react";

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  // if (state.succeeded) {
  //   return (
  //     <div className="text-green-500">
  //       Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich und
  //       kümmern uns um Ihr Anliegen.
  //     </div>
  //   );
  // }
  return (
    <SectionContainer className="flex flex-col justify-between py-24 md:flex-row">
      <aside className="">
        <h3 className="text-2xl font-bold">Kontakt</h3>
        <p className="max-w-md pt-4 ">
          Wir freuen uns auf Ihre Anfrage. Füllen Sie einfach das Formular aus
          und wir melden uns umgehend bei Ihnen.
        </p>
        <div className="flex flex-col space-y-4 pt-8">
          <div className="flex items-center space-x-4">
            <Phone size={24} />
            <a href="tel:+49 0711 701112">+49 0711 701112</a>
          </div>
          <div className="flex items-center space-x-4">
            <Envelope size={24} />
            <a href="mailto:info@fi-da.de">info@fi-da.de</a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin size={24} />
            <a href="https://goo.gl/maps/6Z7Z1Z1Z1Z1Z1Z1Z9">
              Stützenweg 11, 70749 Filderstadt
            </a>
          </div>
        </div>
      </aside>
      <div className="max-w-2xl flex-1 pt-16 md:pt-8">
        {state.succeeded ? (
          <div className="text-green-500">
            Vielen Dank für Ihre Anfrage! <br /> Wir melden uns schnellstmöglich
            und kümmern uns um Ihr Anliegen.
          </div>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <fieldset className="flex flex-col ">
              <label className="font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                minLength={2}
                id="name"
                className="form-input mt-1 rounded-md border border-gray-500 p-2"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </fieldset>
            <fieldset className="flex flex-col ">
              <label className="font-semibold" htmlFor="email">
                E-Mail
              </label>
              <input
                type="text"
                required
                name="email"
                autoComplete="email"
                id="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                minLength={3}
                className="mt-1 rounded-md border border-gray-500 p-2"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </fieldset>
            <fieldset className="flex flex-col ">
              <label className="font-semibold" htmlFor="projektart">
                Projektart
              </label>
              <select
                name="projektart"
                id="projektart"
                className="form-select mt-1 rounded-md border border-gray-500 bg-white p-2"
              >
                <option value="auswaelen" selected>
                  Bitte auswählen
                </option>
                <option value="elektroinstallationen">
                  Elektroinstallationen
                </option>
                <option value="photovolatik">Photovolatik & Speicher</option>
                <option value="lichttechnik">Lichttechnik</option>
                <option value="datenverarbeitung">Datenverarbeitung</option>
                <option value="sicherheitstechnik">Sicherheitstechnik</option>
                <option value="gebaeudetechnik">Gebäudetechnik</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
              <ValidationError
                prefix="Projektart"
                field="projektart"
                errors={state.errors}
              />
            </fieldset>

            <fieldset className="flex flex-col ">
              <label className="font-semibold" htmlFor="nachricht">
                Nachricht
              </label>
              <textarea
                name="nachricht"
                rows={5}
                required
                minLength={6}
                id="nachricht"
                className="form-textarea mt-1 rounded-md border border-gray-500 p-2"
              />
              <ValidationError
                prefix="Nachricht"
                field="nachricht"
                errors={state.errors}
              />
            </fieldset>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-16 w-32 rounded-md bg-gradient-to-tr from-yellow to-[#f7da1e] p-2 font-semibold transition-colors  hover:bg-gradient-to-bl "
            >
              Absenden
            </button>
          </form>
        )}
      </div>
    </SectionContainer>
  );
};
export default Contact;
