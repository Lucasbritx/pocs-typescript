/* https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union */

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
//    ^ = type T0 = "a"