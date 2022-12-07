import { RobotCheckInternal } from './RobotCheck.style';

export const RobotCheckFrame = (props) => {
    const { isRobot } = props;
    const variants = {
        isNotChecked: {
            backgroundColor: '#ddd',
            opacity: 1,
            scale: 0.9
        },
        isChecked: {
            backgroundColor: '#0F0',
            color: '#0F0',
            opacity: 1,
            scale:0
        },
      }
    return(
        <RobotCheckInternal
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isRobot? 'isNotChecked' : 'isChecked'}
            whileHover={{
                scale: 1
            }}
            variants={variants}
        >
            {props.children}
        </RobotCheckInternal>
    );
};