
import { LoginFrameEmailInputStyle } from './InputEmail.style';

export const LoginFrameEmailInput = () => {

    return (
        <LoginFrameEmailInputStyle type='email' placeholder='user@email.com'
            initial={{
                width:'0px'
            }}
            animate={{
                width:'300px'
            }}
        />
    );
}