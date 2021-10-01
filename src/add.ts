export const add = (a: number, b: number): number => a + b

export const hoge = <T extends number | string>(value: T): T => value
