import styled from 'styled-components';
import { motion } from 'framer-motion'

export const RobotCheckInternal = styled(motion.div)`
    width: 400px;
    height: 150px;
    background-color: #ddd;
    color: #000;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

export const RobotCheckCheckBoxStyle = styled(motion.div)`
    width: 30px;
    height: 30px;
    background-color: #fff;
`

export const RobotCheckHint = styled.h2`
    margin-left: 10px;
`