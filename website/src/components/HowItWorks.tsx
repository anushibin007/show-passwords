import React from "react";
import { MousePointerClick, Eye, EyeOff } from "lucide-react";

const HowItWorks: React.FC = () => {
	return (
		<section id="how-it-works" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					How It Works
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
						<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
							<MousePointerClick className="h-8 w-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Click the Icon</h3>
						<p className="text-gray-600">
							Click the "Show Password Fields" icon in your browser's toolbar
						</p>
						<div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
							<img
								src="https://images.pexels.com/photos/8439099/pexels-photo-8439099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Step 1: Click the extension icon"
								className="w-full h-auto rounded"
							/>
						</div>
					</div>

					<div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
						<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
							<Eye className="h-8 w-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold mb-4">See Passwords</h3>
						<p className="text-gray-600">
							All password fields on the page instantly become readable
						</p>
						<div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
							<img
								src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Step 2: Passwords become visible"
								className="w-full h-auto rounded"
							/>
						</div>
					</div>

					<div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
						<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
							<EyeOff className="h-8 w-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Click Again to Hide</h3>
						<p className="text-gray-600">
							Click the icon again to mask password fields back for security
						</p>
						<div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
							<img
								src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Step 3: Click again to hide passwords"
								className="w-full h-auto rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
