import FormCart from "./FormCart";
import { LoginForm } from "@components/index";
import { useTranslation } from "react-i18next";
import "./Auth.scss";

interface LoginProps {
  saveLoginData: (data: string) => void; 
}

const Login: React.FC<LoginProps> = ({ saveLoginData }) => {
  const { t } = useTranslation();

  return (
    <>
      <FormCart
        bx_width="small_bx"
        bx_title={t("login")}
        title_text={t("login_text")}
        content={
            <div >
                <LoginForm saveLoginData={saveLoginData} />
            </div>
        }
      />
    </>
  );
};

export default Login;
