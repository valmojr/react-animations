import { RobotCheckFrame } from "./RobotCheckFrame";
import { RobotCheckHint } from "./RobotCheck.style";
import { RobotCheckInputBox } from "./RobotCheckInputBox";
const RobotCheck = (props) => {
    const {isRobot,setIsRobot} = props;

    return (
            <RobotCheckFrame isRobot={isRobot}>
                <RobotCheckInputBox isRobot={isRobot}  setIsRobot={setIsRobot}/>
                <RobotCheckHint>Are you a human?</RobotCheckHint>
            </RobotCheckFrame>
        )
}

export default RobotCheck;