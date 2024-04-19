import Test from './Test.svelte';
import type { ComponentType } from 'svelte';

export const templates = {
	Test,
} as Record<string, ComponentType>;

export type TemplatesKey = keyof typeof templates;

export default templates;
