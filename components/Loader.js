import React from "react";
import tw from "tailwind-styled-components"
import { motion } from "framer-motion";


const fullScreenDiv = tw(motion.div)`
	absolute
	top-0
	left-0
	right-0
	bottom-0
	touch-none
	overflow-hidden
	w-[100vw]
	h-[100vh]
`;

const WhiteOverlay = tw(fullScreenDiv)`
	z-20
	bg-white
`;



const Container = tw(fullScreenDiv)`
	z-10
	flex
	flex-col
	justify-center
	items-center
	bg-fixed
    bg-center
    bg-cover
	custom-img   
`;


const Loader = () => {
	return (
		<>
			<WhiteOverlay
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
			</WhiteOverlay>
			<Container
				initial={{
					scale: 1.2, 
					opacity: 1,
				}}
				animate={{ scale: 1 }}

				exit={{
					opacity: 0,
				}}
				transition={{
					duration: 2,
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enableBackground="new 0 0 24 24"
					height="48px"
					viewBox="0 0 24 24"
					width="48px"
					fill="none"
				>
					<g stroke="#fff"></g>
					<g stroke="#fff" >
						<motion.path
							      animate={{
									opacity: [1, 1, 0],
									pathLength: [0, 1, 1],
								  }}
								  transition={{
									delay: 1.5,
									duration: 3,
									times: [1.5, 2],
								  }}

							d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
						/>
					</g>
				</svg>
			</Container>
		</>
	);
};

export default Loader;
