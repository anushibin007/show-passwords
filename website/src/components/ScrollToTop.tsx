import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Set up the scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 z-50 focus:outline-none"
					aria-label="Scroll to top"
				>
					<ArrowUp className="h-5 w-5" />
				</button>
			)}
		</>
	);
};

export default ScrollToTop;
