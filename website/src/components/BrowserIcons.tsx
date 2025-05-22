import React from "react";

const BrowserIcons: React.FC = () => {
	return (
		<div className="flex items-center gap-2 mr-2">
			<img src="chrome-logo.svg" alt="Chrome" className="w-5 h-5" />
			<img src="edge-logo.svg" alt="Edge" className="w-5 h-5" />
		</div>
	);
};

export default BrowserIcons;
