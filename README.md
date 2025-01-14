# auto-export-folder-to-index-ts

Export all files in a directory to an `index.ts` file for cleaner code.

## Features

- Automatically generates an `index.ts` file that exports all `.tsx` files in the directory.
- Simplifies the process of managing exports in large projects.
- Easy to use with a single command.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Cmd+Shift+X`.
3. Search for `auto-export-folder-to-index-ts`.
4. Click Install.

## Usage

1. Open the command palette by pressing `Cmd+Shift+P`.
2. Type `Export Directory` and select `Export Directory` from the list.
3. The extension will generate an `index.ts` file in the root of your workspace, exporting all `.ts` files in the directory.

## Requirements

- Visual Studio Code version 1.96.0 or higher.
- Node.js version 14 or higher.

## Extension Settings

This extension does not contribute any settings.

## Known Issues

- The extension currently only supports exporting `.ts` files. Other file types are not included.
- The extension does not handle nested directories.

## Release Notes

### 0.0.1

- Initial release of `auto-export-folder-to-index-ts`.

## License

MIT License

## Author

Remco Stoeten

## Repository

[GitHub Repository](https://github.com/remcostoeten/vscode-extension-export-directory-to-index-ts)
