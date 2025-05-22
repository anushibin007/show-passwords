import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import BrowserIcons from "./BrowserIcons";

const DemoSection: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<section id="demo" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					Try It Yourself
				</h2>

				<div className="max-w-lg mx-auto">
					<div className="bg-purple-50 p-8 rounded-xl shadow-md space-y-8">
						{/* Step 1: Get the Extension */}
						<div className="text-center">
							<h3 className="text-xl font-semibold mb-4">1. Get the Extension</h3>
							<a
								href="https://chromewebstore.google.com/detail/opeefpfibopmnbappibdchlbgpdpklac?utm_source=item-share-cb"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
							>
								<BrowserIcons />
								Add to Chrome/Edge
							</a>
						</div>

						{/* Step 2: Enter Password */}
						<div>
							<h3 className="text-xl font-semibold mb-4">2. Enter a Password</h3>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									id="try-password"
									placeholder="Enter a password"
									className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
								<button
									type="button"
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition"
									onClick={togglePasswordVisibility}
								>
									{showPassword ? (
										<EyeOff className="h-5 w-5" />
									) : (
										<Eye className="h-5 w-5" />
									)}
								</button>
							</div>
						</div>

						{/* Step 3: Click the Icon */}
						<div className="text-center">
							<h3 className="text-xl font-semibold mb-4">
								3. Click the Extension Icon
							</h3>
							<div className="bg-white p-4 rounded-lg shadow-sm">
								<img
									src="https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt="Extension icon in browser toolbar"
									className="w-full h-auto rounded-lg"
								/>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								Click the extension icon in your browser's toolbar to toggle ALL
								password fields on the page at once!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DemoSection;
