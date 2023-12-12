import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";

import style from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={style.mainLink}>{t('Main')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>{t('About')}</AppLink>
            </div>
        </div>
    )
}