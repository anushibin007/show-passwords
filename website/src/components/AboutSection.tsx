import React from "react";
import { Github, Linkedin } from "lucide-react";

const AboutSection: React.FC = () => {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					Meet the Team
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
					<div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
						<div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
							<img
								src="divya-dp.jpeg"
								alt="Developer Divya M"
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-xl font-semibold mb-2">Divya M</h3>
						<p className="text-purple-600 mb-4">Developer</p>
						<p className="text-gray-600 mb-6">
							Software engineer passionate about creating tools that simplify everyday
							tasks for users.
						</p>
						<a
							href="https://www.linkedin.com/in/divyamahankali29/"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors"
						>
							<Linkedin className="h-5 w-5 mr-2" />
							<span>Connect on LinkedIn</span>
						</a>
					</div>

					<div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
						<div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
							<img
								src="/shibin-dp.jpeg"
								alt="Publisher Shibin"
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-xl font-semibold mb-2">Shibin J</h3>
						<p className="text-purple-600 mb-4">Publisher</p>
						<p className="text-gray-600 mb-6">
							Digital product specialist with a focus on creating privacy-friendly
							browser tools.
						</p>
						<a
							href="https://www.linkedin.com/in/anushibinj/"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors"
						>
							<Linkedin className="h-5 w-5 mr-2" />
							<span>Connect on LinkedIn</span>
						</a>
					</div>
				</div>

				<div className="mt-20 max-w-3xl mx-auto bg-purple-50 p-8 rounded-xl shadow-md text-center">
					<h3 className="text-2xl font-semibold mb-4">Open Source Code</h3>
					<p className="text-gray-600 mb-6">
						Curious how it works? View the full source code on GitHub. We believe in
						transparency and community-driven development.
					</p>
					<a
						href="https://github.com/anushibin007/show-passwords"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
					>
						<Github className="h-5 w-5 mr-2" />
						View on GitHub
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
