import LoginComponent from "@/components/login-component";
import TranslationsProvider from "../../../../components/translation-provider";
import initTranslations from "../../../i18n";
const namespaces = ["login"];

async function Login({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <LoginComponent />
    </TranslationsProvider>
  );
}

export default Login;
