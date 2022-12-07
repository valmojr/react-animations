import {RobotCheckCheckBoxStyle} from './RobotCheck.style';

export const RobotCheckInputBox = (props) => {
    const {isRobot, setIsRobot} = props;
    const variants = {
        isNotChecked: {
            backgroundColor: '#FFF'
        },
        isChecked: {
            backgroundColor: '#0F0'
        },
      }
      
    return(
        <RobotCheckCheckBoxStyle type='checkbox' onClick={()=>{
            setIsRobot(!isRobot);                        
        }}
            animate={isRobot ? "isNotChecked" : "isChecked"}
            whileHover={{
                scale:1.5,
                borderRadius:'50%'
            }}
            variants={variants}
        >
            {props.children}
        </RobotCheckCheckBoxStyle>
    );
};