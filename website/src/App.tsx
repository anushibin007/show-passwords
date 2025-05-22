import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import ComparisonSection from "./components/ComparisonSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	// Update document title
	useEffect(() => {
		document.title = "Show Password Fields | Browser Extension";

		// Add smooth scrolling for anchor links
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
				e.preventDefault();
				const targetId = target.getAttribute("href");
				const targetElement = document.querySelector(targetId as string);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				}
			}
		};

		document.addEventListener("click", handleAnchorClick);
		return () => document.removeEventListener("click", handleAnchorClick);
	}, []);

	return (
		<div className="font-sans">
			<Header />
			<main>
				<HeroSection />
				{/* <HowItWorks /> */}
				<DemoSection />
				<FeaturesSection />
				<ComparisonSection />
				<AboutSection />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
