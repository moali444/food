import FormCart from "./FormCart";
import { LoginForm } from "@components/index";
import { useTranslation } from "react-i18next";
import "./Auth.scss";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <FormCart
        bx_width="small_bx"
        bx_title={t("login")}
        title_text={t("login_text")}
        content={
            <div >
                <LoginForm />
            </div>
        }
      />
    </>
  );
};

export default Login;
