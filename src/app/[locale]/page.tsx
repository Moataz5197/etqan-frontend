import TranslationsProvider from "../../components/translation-provider";
import initTranslations from "../i18n";
import HomePageComponent from "../../components/home-page-component";

const namespaces = ["common"];

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <main className="">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={namespaces}
      >
        <HomePageComponent />
      </TranslationsProvider>
    </main>
  );
}
