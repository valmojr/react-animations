
import { LoginFramePasswordInputStyle } from './InputPassword.style';

export const LoginFramePasswordInput = () => {
    return (
        <LoginFramePasswordInputStyle type='Password' placeholder='password'
            initial={{
                width:'0px'
            }}
            animate={{
                width:'300px'
            }}
        />
    );
}