# Directory Tree CLI

The Directory Tree CLI is a Node.js-based command line tool that displays a graphical representation of the directory structure of a given path. It supports internationalization by automatically detecting the system language and using appropriate translations.

## Features

- Display of the directory structure with support for hiding specific directories (e.g. `node_modules`).
- Automatic detection of the system language and display of the output in this language.
- Fallback to English if translations are not available for the recognized language.

## Prerequisites

Make sure that Node.js and npm are installed on your system to use the Directory Tree CLI.

## Installation

The tool can be installed globally via npm:

```bash
npm install -g dir-tree-cli
```

## Usage

After installation, you can use the tool as follows:

```bash
dir-tree [path] [ignore]
```

- `[path]` (optional): The path of the directory whose structure is to be displayed. The current directory is used by default.
- `[Ignore]` (optional): A directory name to be ignored when displaying the directory structure. By default, `node_modules` is ignored.

Example:

```bash
dir-tree ./myproject
```

## Internationalization

The tool automatically recognizes the system language and uses corresponding translations for the output. Currently supported

Translated with DeepL.com (free version)