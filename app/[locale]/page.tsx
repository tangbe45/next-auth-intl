import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("app");
  console.log(t);
  return <h1>{t("welcome")}</h1>;
}
