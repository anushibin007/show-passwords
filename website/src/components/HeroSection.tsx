import React from "react";
import { EyeIcon } from "lucide-react";
import BrowserIcons from "./BrowserIcons";

const HeroSection: React.FC = () => {
	return (
		<section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-10 md:mb-0">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
							🔍 One-Click to Reveal Passwords on Any Site
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-lg">
							Show Password Fields is a lightweight extension that makes all password
							fields visible instantly. No need to dig into the DOM.
						</p>
						<div className="flex flex-wrap gap-4">
							<a
								href="https://chromewebstore.google.com/detail/opeefpfibopmnbappibdchlbgpdpklac?utm_source=item-share-cb"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
							>
								<BrowserIcons />
								Add to Chrome/Edge
							</a>
							<a
								href="#demo"
								className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg font-medium transition duration-200 hover:bg-purple-50"
							>
								Try Demo
							</a>
						</div>
					</div>
					<div className="md:w-1/2">
						<div className="bg-white p-4 rounded-xl shadow-lg">
							<img
								src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Password reveal demonstration"
								className="w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
