import { MainFrameStyle } from "./MainFrame.style.js";
import { motion } from 'framer-motion';
import { LoremIpsun } from './Lorem';

const MainFrame = () => {
        return (
            <MainFrameStyle>
                <motion.div>
                    <LoremIpsun/>
                </motion.div>
            </MainFrameStyle>
        )
}

export default MainFrame;