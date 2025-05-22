import React from "react";
import { Check } from "lucide-react";

const FeaturesSection: React.FC = () => {
	const features = [
		"Instantly toggle visibility of password fields",
		"Avoid login errors due to typos",
		"Simple, one-click operation",
		"No data collection, ever",
		"100% Free and ad-free",
		"Needs 0 extra permissions",
	];

	return (
		<section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					Why Use Show Password Fields?
				</h2>

				<div className="max-w-3xl mx-auto">
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<li
								key={index}
								className="flex items-start bg-white p-6 rounded-xl shadow-sm"
							>
								<div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4">
									<Check className="h-5 w-5 text-green-600" />
								</div>
								<span className="text-gray-700 text-lg">{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
