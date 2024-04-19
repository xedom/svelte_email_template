import type { TemplatesKey } from './templates';

export function keysOf<K extends string>(obj: Partial<Record<K, unknown>>): K[] {
	return Object.keys(obj) as K[];
}

export function valuesOf<V>(obj: Partial<Record<string | number | symbol, V>>): V[] {
	return Object.values(obj) as V[];
}

// ----------------------------

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>;

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
	? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
	: [T, ...A];

export const func = <T>(): UnionToArray<T> => null as any;
