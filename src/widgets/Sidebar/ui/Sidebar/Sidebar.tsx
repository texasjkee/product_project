import { useState } from "react";
import { t } from "i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/LanguageSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

import style from "./Sidebar.module.scss";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => setCollapsed(prev => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggle}
                className={style.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={style.items}>
                <AppLink className={style.item}
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={style.icon} />
                    <span className={style.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink className={style.item}
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                // className={style.mainLink}
                >
                    <AboutIcon className={style.icon} />
                    <span className={style.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    short={collapsed}
                    className={style.lang}
                />
            </div>
        </div>
    );
};