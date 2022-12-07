import { useState } from "react";
import { LoginFrameForm } from "../LoginForm/LoginForm";
import { LoginFrameEmailInput } from "../LoginForm/ImputEmail/InputEmail";
import { LoginButton } from "../LoginButton/LoginButton";
import { LoginFramePasswordInput } from "../LoginForm/ImputPassword/InputPassword";
import { AnimateLoginFrame } from "./AnimateLoginFrame";

const LoginFrame = (props) => {
    const {isLogged, setLogged} = props;
    const [storedEmail, setstoredEmail] = useState('');
    const [storedPassword, setstoredPassword] = useState('');

    return (
        <AnimateLoginFrame>
            <h1>Login</h1>
            <LoginFrameForm>
                <LoginFrameEmailInput email={{storedEmail,setstoredEmail}}/>
                <LoginFramePasswordInput password={{storedPassword,setstoredPassword}}/>
                <p>(just click the login button)</p>
                <LoginButton logged={isLogged} setLogged={setLogged}/>
            </LoginFrameForm>
        </AnimateLoginFrame>
    );
}

export default LoginFrame;