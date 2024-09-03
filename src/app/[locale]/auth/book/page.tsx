import BookComponent from "@/components/book-component";
import TranslationsProvider from "../../../../components/translation-provider";
import initTranslations from "../../../i18n";
const namespaces = ["book"];
async function Book({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <BookComponent />
    </TranslationsProvider>
  );
}

export default Book;
