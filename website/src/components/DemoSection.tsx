import React from "react";
import BrowserIcons from "./BrowserIcons";

const DemoSection: React.FC = () => {
	return (
		<section id="demo" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					Try It Yourself
				</h2>

				<div className="max-w-lg mx-auto">
					<div className="bg-purple-50 p-8 rounded-xl shadow-md space-y-8">
						{/* Step 1: Get the Extension */}
						<div>
							<h3 className="text-xl font-semibold mb-4">1. Get the Extension</h3>
						</div>
						<div className="text-center">
							<a
								href="https://chromewebstore.google.com/detail/opeefpfibopmnbappibdchlbgpdpklac?utm_source=item-share-cb"
								target="_blank"
								rel="noreferrer"
								className="text-center inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
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
									type="password"
									id="try-password"
									placeholder="Enter a password"
									className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
							</div>
						</div>

						{/* Step 3: Click the Icon */}
						<div>
							<h3 className="text-xl font-semibold mb-4">
								3. Click the Extension Icon
							</h3>
							<div className="bg-white p-4 rounded-lg shadow-sm">
								<img
									src="extension-click.gif"
									alt="Extension icon in browser toolbar"
									className="w-full h-auto rounded-lg"
								/>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								Click the extension icon in your browser's toolbar to toggle the
								password field between plain text and masked text.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DemoSection;
