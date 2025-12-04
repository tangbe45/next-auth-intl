import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("app");

  return <h1>{t("welcome")}</h1>;
}
