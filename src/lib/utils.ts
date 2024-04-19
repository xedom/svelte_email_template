export function keysOf<K extends string>(obj: Partial<Record<K, unknown>>): K[] {
	return Object.keys(obj) as K[];
}

export function valuesOf<V>(obj: Partial<Record<string | number | symbol, V>>): V[] {
	return Object.values(obj) as V[];
}
