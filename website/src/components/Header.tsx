import React from "react";
import { EyeIcon } from "lucide-react";
import BrowserIcons from "./BrowserIcons";

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<EyeIcon className="h-6 w-6 text-purple-600" />
					<span className="font-semibold text-lg text-gray-800">
						Show Password Fields
					</span>
				</div>
				<nav>
					<ul className="flex space-x-6">
						{/* <li>
							<a
								href="#how-it-works"
								className="text-gray-600 hover:text-purple-600 transition duration-200"
							>
								How It Works
							</a>
						</li> */}
						<li>
							<a
								href="#demo"
								className="text-gray-600 hover:text-purple-600 transition duration-200"
							>
								Try It
							</a>
						</li>
						<li>
							<a
								href="#features"
								className="text-gray-600 hover:text-purple-600 transition duration-200"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#compare"
								className="text-gray-600 hover:text-purple-600 transition duration-200"
							>
								Compare
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="text-gray-600 hover:text-purple-600 transition duration-200"
							>
								About
							</a>
						</li>
					</ul>
				</nav>
				<a
					href="https://chromewebstore.google.com/detail/opeefpfibopmnbappibdchlbgpdpklac?utm_source=item-share-cb"
					target="_blank"
					rel="noreferrer"
					className="hidden md:inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium transition duration-200"
				>
					<BrowserIcons />
					Add to Chrome/Edge
				</a>
			</div>
		</header>
	);
};

export default Header;
