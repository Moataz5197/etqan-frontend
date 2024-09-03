import TranslationsProvider from "../../components/translation-provider";
import initTranslations from "../i18n";
import HomePageComponent from "../../components/home-page-component";
import LanguageChanger from "@/components/language-changer";


const namespaces = ['common']

export default async function Home({ params: { locale } }: any) {
  const { t , resources } = await initTranslations(locale, namespaces);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
        <HomePageComponent/>
        <LanguageChanger/>
      </TranslationsProvider>
    </main>
  );
}
