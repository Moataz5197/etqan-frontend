import RegisterComponent from "@/components/register-component";
import TranslationsProvider from "../../../../components/translation-provider";
import initTranslations from "../../../i18n";
const namespaces = ["register"];
async function RegistrationForm({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <RegisterComponent />
    </TranslationsProvider>
  );
}

export default RegistrationForm;
