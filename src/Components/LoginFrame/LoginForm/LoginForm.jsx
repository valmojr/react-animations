import LoginFrameFormStyled from "./LoginForm.style";

export const LoginFrameForm = (props) => {
    return (
        <LoginFrameFormStyled>
            {props.children}
        </LoginFrameFormStyled>
    );
}