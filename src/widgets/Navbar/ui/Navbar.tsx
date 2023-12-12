import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import style from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={style.links}>
                <Link to={'/'} className={style.mainLink}>Main</Link>
                <Link to={'/about'}> About</Link>
            </div>
        </div>
    )
}