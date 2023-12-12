import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";

import style from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>About</AppLink>
            </div>
        </div>
    )
}