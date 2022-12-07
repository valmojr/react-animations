import { LoginButtonStyle } from "./LoginButton.style";

export const LoginButton = (props) => {
    const {isLogged, setLogged} = props;

    return(
        <LoginButtonStyle
            initial={{
                marginTop: '0px'
            }}
            animate={{
                marginTop: '25px'
            }}
            onClick={()=>{
                setLogged(!isLogged);
            }}
        >
            LOGIN
        </LoginButtonStyle>
    );
}