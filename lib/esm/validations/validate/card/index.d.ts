declare const validate: (card: any) => <T>(obj: T) => Omit<T, string>;
export default validate;
