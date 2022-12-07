import { LoginFrameStyled , LoginFrameOpen } from "./LoginFrame.style";

export const AnimateLoginFrame = (props) => {
    return (
        <LoginFrameStyled
            initial={{
                height: '120px',
                opacity: 0
            }}
            animate={{
                height: '500px',
                opacity: 1
            }}
        >
            <LoginFrameOpen
                initial={{
                    width: '10px'
                }}
                animate={{
                    width:'350px'
                }}
            >
            {props.children}
            </LoginFrameOpen>
        </LoginFrameStyled>
    );
}