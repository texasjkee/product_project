import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

import style from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <input type="text" className={style.input}/>
            <input type="password" className={style.input}/>
            <Button className={style.loginBtn}>
                {t('Sign in ')}
            </Button>
        </div>
    )
};