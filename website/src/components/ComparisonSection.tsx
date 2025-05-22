import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection: React.FC = () => {
	const comparisonData = [
		{
			feature: "0 extra permissions needed",
			showPasswordFields: true,
			others: false,
			othersText: "Require access to all sites",
		},
		{
			feature: "Simple one-click toggle",
			showPasswordFields: true,
			others: false,
			othersText: "Complicated UI",
		},
		{
			feature: "Lightweight, ~20KB",
			showPasswordFields: true,
			others: false,
			othersText: "Bloated",
		},
		{
			feature: "No tracking, ads, or analytics",
			showPasswordFields: true,
			others: false,
			othersText: "May collect user data",
		},
		{
			feature: "Open source",
			showPasswordFields: true,
			others: false,
			othersText: "Closed source",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
					Why It's Better Than Other Tools
				</h2>

				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead>
								<tr className="bg-purple-600 text-white">
									<th className="py-4 px-6 text-left">Feature</th>
									<th className="py-4 px-6 text-center">Show Password Fields</th>
									<th className="py-4 px-6 text-center">Others</th>
								</tr>
							</thead>
							<tbody>
								{comparisonData.map((item, index) => (
									<tr
										key={index}
										className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
									>
										<td className="py-4 px-6 font-medium">{item.feature}</td>
										<td className="py-4 px-6 text-center">
											{item.showPasswordFields ? (
												<Check className="h-6 w-6 text-green-500 mx-auto" />
											) : (
												<X className="h-6 w-6 text-red-500 mx-auto" />
											)}
										</td>
										<td className="py-4 px-6 text-center">
											<div className="flex flex-col items-center">
												{item.others ? (
													<Check className="h-6 w-6 text-green-500" />
												) : (
													<X className="h-6 w-6 text-red-500" />
												)}
												<span className="text-xs text-gray-500 mt-1">
													{item.othersText}
												</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ComparisonSection;
