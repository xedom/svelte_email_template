const path = require('node:path');
const fs = require('node:fs');

const templatesDirectoryRelative = process.argv[2] || './src/lib/templates';
const templatesDirectoryAbsolute = path.join(__dirname, '..', templatesDirectoryRelative);

const files = fs.readdirSync(templatesDirectoryAbsolute); // TODO add recursive search
const filteredFiles = files.filter((file) => file.endsWith('.svelte'));

const parseFilename = (filename) => filename.replace('.svelte', '').replace(' ', '_');

const filesImports = filteredFiles.map((file) => `import ${parseFilename(file)} from './${file}';\n`).join('');
const filesExports = filteredFiles
	.map((file) => `  ${parseFilename(file)},\n`)
	.join('')
	.trim();

const indexFileContent = `// File generated automatically, do not modify
import type { ComponentType } from 'svelte';
${filesImports}
export const templates = {
  ${filesExports}
} as Record<string, ComponentType>;

export type TemplatesKey = keyof typeof templates;

export default templates;
`;

fs.writeFileSync(path.join(templatesDirectoryAbsolute, 'index.ts'), indexFileContent);
