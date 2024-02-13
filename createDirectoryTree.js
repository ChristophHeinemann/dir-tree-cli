// createDirectoryTree.js
import fs from "fs";
import path from "path";
import chalk from "chalk";

export function createDirectoryTree(
	dirPath,
	level = 0,
	ignore = "node_modules",
) {
	let tree = "";
	const files = fs.readdirSync(dirPath, { withFileTypes: true });
	const dirs = files.filter(
		(dirent) => dirent.isDirectory() && dirent.name !== ignore,
	);
	const regularFiles = files.filter((dirent) => !dirent.isDirectory());

	dirs.forEach((dirent, index) => {
		const isLastDir = index === dirs.length - 1 && regularFiles.length === 0;
		const connector = isLastDir ? "└── " : "├── ";
		tree += chalk.blue(`${"│   ".repeat(level)}${connector}${dirent.name}\n`);
		tree += createDirectoryTree(
			path.join(dirPath, dirent.name),
			level + 1 + (isLastDir ? 0 : 1),
			ignore,
		);
	});

	regularFiles.forEach((file, index) => {
		const isLastFile = index === regularFiles.length - 1;
		const connector = isLastFile ? "└── " : "├── ";
		tree += chalk.green(`${"│   ".repeat(level)}${connector}${file.name}\n`);
	});

	return tree;
}
