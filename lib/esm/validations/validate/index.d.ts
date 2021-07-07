declare const _default: {
    card: (card: any) => <T>(obj: T) => Omit<T, string>;
    cnpj: () => import("ramda").Pred;
    cpf: () => import("ramda").Pred;
    ddd: () => boolean;
    email: (str: string) => boolean;
    phone: import("ramda").SafePred<never>;
    zipcode: () => boolean;
};
export default _default;
