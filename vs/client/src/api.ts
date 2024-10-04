import { commands, ExtensionContext, WorkspaceFolder } from 'vscode';
import { LanguageClientManager } from './languageClientManager';

export namespace Api {
	export function registerCommands(context: ExtensionContext) {
		context.subscriptions.push(
			commands.registerCommand(`vscode-sourceorbit.autoFix`, (workspaceFolder: WorkspaceFolder, type: "includes" | "renames") => {
				if (workspaceFolder && type) {
					return LanguageClientManager.fixProject(workspaceFolder, type);
				}
			}),

			commands.registerCommand(`vscode-sourceorbit.generateBuildFile`, async (workspaceFolder: WorkspaceFolder, type: string) => {
				if (workspaceFolder && type) {
					await LanguageClientManager.generateBuildFile(workspaceFolder, type);
				}
			})
		);
	}
}