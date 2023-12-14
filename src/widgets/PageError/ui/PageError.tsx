import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import style from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(style.PageError, {}, [className])}>
            <h1>{t('Something went wrong')}</h1>
            <button onClick={reloadPage}>Reload</button>
        </div>
    )
};