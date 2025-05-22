import React from "react";
import AppIcon from "./AppIcon";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-8 md:mb-0">
						<div className="flex items-center gap-2 mb-4">
							<AppIcon />
							<span className="font-semibold text-xl">Show Password Fields</span>
						</div>
						<p className="text-gray-400 max-w-md">
							A lightweight browser extension that reveals password fields with a
							single click.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-x-12 gap-y-4">
						<div>
							<h4 className="font-medium mb-3 text-purple-300">Links</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="https://chromewebstore.google.com/detail/opeefpfibopmnbappibdchlbgpdpklac?utm_source=item-share-cb"
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 hover:text-white transition"
									>
										Chrome Web Store
									</a>
								</li>
								<li>
									<a
										href="https://github.com/anushibin007/show-passwords"
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 hover:text-white transition"
									>
										GitHub Repo
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-medium mb-3 text-purple-300">Legal</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white transition"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-white transition"
									>
										Terms of Use
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} Show Password Fields. All rights reserved.
					</p>
					<div className="flex space-x-4">
						<a href="#" className="text-gray-400 hover:text-white transition">
							Contact Us
						</a>
						<span className="text-gray-600">|</span>
						<a href="#" className="text-gray-400 hover:text-white transition">
							Report an Issue
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
