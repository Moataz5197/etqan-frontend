import Image from "next/image";
import initTranslations from "../i18n";
export default async function Home({ params: { locale } }: any) {
  const { t } = await initTranslations(locale,['common']);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        welcome
        {t("welcome")}
      </p>
    </main>
  );
}
