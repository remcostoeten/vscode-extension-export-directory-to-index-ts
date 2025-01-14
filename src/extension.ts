	import * as vscode from 'vscode';
	import * as fs from 'fs';
	import * as path from 'path';

	export function activate(context: vscode.ExtensionContext) {
		const config = vscode.workspace.getConfiguration('auto-export-folder-to-index-ts');
		const FILES_WITH_EXTENSION = config.get<string>('filesWithExtension', 'tsx');
		const EXCLUDE_FILE = config.get<string[]>('excludeFile', ['index.tsx']);

		const exportDirectory = () => {
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (workspaceFolders) {
				const rootPath = workspaceFolders[0].uri.fsPath;
				const indexPath = path.join(rootPath, 'index.ts');
				const files = fs.readdirSync(rootPath).filter((file: string) => !EXCLUDE_FILE.includes(file) && file.endsWith(`.${FILES_WITH_EXTENSION}`));
				const exportStatements = files.map((file: string) => `export * from './${file.replace(`.${FILES_WITH_EXTENSION}`, '')}';`).join('\n');
				fs.writeFileSync(indexPath, exportStatements);
				vscode.window.showInformationMessage('Directory exported to index.ts');
			} else {
				vscode.window.showErrorMessage('No workspace folder found');
			}
		};

		let disposableExportDirectory = vscode.commands.registerCommand('auto-export-folder-to-index-ts.exportDirectory', exportDirectory);
		let disposableCreateIndex = vscode.commands.registerCommand('auto-export-folder-to-index-ts.createIndex', exportDirectory);
		let disposableGenerateIndex = vscode.commands.registerCommand('auto-export-folder-to-index-ts.generateIndex', exportDirectory);
		let disposableExportAllFiles = vscode.commands.registerCommand('auto-export-folder-to-index-ts.exportAllFiles', exportDirectory);

		context.subscriptions.push(disposableExportDirectory);
		context.subscriptions.push(disposableCreateIndex);
		context.subscriptions.push(disposableGenerateIndex);
		context.subscriptions.push(disposableExportAllFiles);
	}

	export function deactivate() { }
