import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";
// import { Button } from "shared/ui/Button/Button";

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <>
      <div>{t('Main page')}</div>
      <Counter/>
      <BugButton />
    </>
  )
}