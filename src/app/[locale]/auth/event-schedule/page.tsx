import EventComponent from "@/components/event-component";
import TranslationsProvider from "../../../../components/translation-provider";
import initTranslations from "../../../i18n";
const namespaces = ["event"];
async function Event({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <EventComponent />
    </TranslationsProvider>
  );
}

export default Event;
