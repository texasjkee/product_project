import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from 'shared/lib/classNames/classNames';

import style from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIME= 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};