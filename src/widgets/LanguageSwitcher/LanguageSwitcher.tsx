import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { Button, ThemeButton } from "shared/ui/Button/Button";

import style from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
};

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(style.LanguageSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    )
};