import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginFrameStyled = styled(motion.div)`
    background-color: #ddd;
    color: #000;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export const LoginFrameOpen = styled(motion.div)`
    display:flex;
    flex-flow: column nowrap;
`