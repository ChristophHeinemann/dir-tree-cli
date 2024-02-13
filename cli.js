#!/usr/bin/env node

import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { osLocale } from "os-locale";
import { createDirectoryTree } from "./createDirectoryTree.js";

// Systemsprache ermitteln
// osLocale().then((locale) => {
// 	const language = locale.split("-")[0]; // 'en_US' zu 'en' konvertieren, falls nötig

// 	// Initialisieren von i18next mit der ermittelten Sprache
// 	i18next.use(Backend).init(
// 		{
// 			lng: language, // Verwenden der ermittelten Sprache
// 			fallbackLng: "en", // Fallback-Sprache, falls die ermittelte Sprache nicht unterstützt wird
// 			backend: {
// 				loadPath: "locales/{{lng}}/translation.json",
// 			},
// 			interpolation: {
// 				escapeValue: false, // Nicht notwendig für Node.js
// 			},
// 		},
// 		(err, t) => {
// if (err) return console.log("error loading i18next", err);
// i18next ist bereit, also führen Sie Ihren Code hier aus
const targetDirectory = process.argv[2] || ".";
const ignoreDirectory = process.argv[3] || ["node_modules", ".git"];

const targetDirectoryName =
	targetDirectory === "." ? "current" : targetDirectory;

console.log(
	`Directory tree for ${targetDirectoryName}, ignoring '${ignoreDirectory}':`,
);
console.log(createDirectoryTree(targetDirectory, 0, ignoreDirectory));
// 		},
// 	);
// });
