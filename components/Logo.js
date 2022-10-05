import React from 'react'
import tw from "tailwind-styled-components"
import { motion } from "framer-motion"



const LogoContainer = tw(motion.a)`
    font-bold
    text-4xl
    text
`
const logoTransition = {
    duration: 0.5,
    stiffness: 70,
    delay: 0.1,
};

const Logo = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <LogoContainer href={href} onClick={onClick}
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut'}}

        >Sitename</LogoContainer>
    )
})

export default Logo