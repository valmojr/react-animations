import {motion} from 'framer-motion';

export const LoremIpsun = () => {
    return (
        <article>
            <h1>Title</h1>
            <motion.div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'blue'
                }}
                initial={{
                    marginLeft: '10%',
                    opacity: 0
                }}
                whileInView={{
                    transition:'3s',
                    marginLeft: '65%',
                    opacity: 1
                }}
            />
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
                Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
                blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
                ipsum tellus, eu tincidunt neque tincidunt a.
            </motion.p>
            <h2>Sub-header</h2>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                tincidunt odio, sit amet laoreet massa fringilla eu.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
            </motion.p>
            <h2>Sub-header</h2>
            <motion.div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red'
                }}
                initial={{
                    marginLeft: '65%',
                    opacity: 0
                }}
                whileInView={{
                    transition:'3s',
                    marginLeft: '10%',
                    opacity: 1
                }}
            />
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                pretium.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                ultricies, mollis mi in, euismod dolor.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >Quisque convallis ligula non magna efficitur tincidunt.</motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
            </motion.p>
            <h2>Sub-header</h2>
            <motion.div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'green'
                }}
                initial={{
                    marginLeft: '10%',
                    opacity: 0
                }}
                whileInView={{
                    transition:'3s',
                    marginLeft: '65%',
                    opacity: 1
                }}
            />
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                pretium.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >
                Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                ultricies, mollis mi in, euismod dolor.
            </motion.p>
            <motion.p
                initial={{opacity:0}}
                whileInView={{transition:'3s',opacity:1}}
            >Quisque convallis ligula non magna efficitur tincidunt.</motion.p>
        </article>
    );
}