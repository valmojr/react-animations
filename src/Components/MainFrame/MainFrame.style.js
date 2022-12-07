import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainFrameStyle = styled(motion.div)`
    background-color: #ddd;
    color: #000;
    overflow: auto;
    @media (min-width: 760px) {
        width: 600px;
        height: 500px
    }
`