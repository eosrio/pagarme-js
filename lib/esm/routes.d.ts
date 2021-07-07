export declare const base = "https://api.pagar.me:443/1";
export declare const session: {
    base: string;
    destroy: (id: string) => string;
    verify: (id: string) => string;
};
export declare const transactions: {
    base: string;
    cardHashKey: string;
    calculateInstallmentsAmount: string;
    details: (id: string) => string;
    refund: (id: string) => string;
    capture: (id: string) => string;
    collectPayment: (id: string) => string;
    antifraudAnalyses: {
        findAll: (id: string) => string;
        find: (id: string, antifraudId: string) => string;
        create: (id: string) => string;
    };
    reprocess: (id: string) => string;
};
export declare const payables: {
    base: string;
    transaction: (transactionId: string) => string;
    find: (id: string) => string;
    days: string;
};
export declare const invites: {
    base: string;
    details: (id: string) => string;
};
export declare const recipients: {
    base: string;
    details: (id: string) => string;
};
export declare const bulkAnticipations: {
    base: (recipientId: string) => string;
    details: (recipientId: string, id: string) => string;
    limits: (recipientId: string) => string;
    days: (recipientId: string, id: string) => string;
    confirm: (recipientId: string, id: string) => string;
    cancel: (recipientId: string, id: string) => string;
};
export declare const search = "/search";
export declare const user: {
    base: string;
    resetPassword: string;
    redefinePassword: string;
    details: (id: string) => string;
    updatePassword: (id: string) => string;
    singular: string;
};
export declare const company: {
    basePlural: string;
    base: string;
    temporary: string;
    emailConfirmation: string;
    activate: string;
    resetKeys: string;
    affiliationProgress: string;
    branding: (id: string) => string;
    emailTemplates: (id: string) => string;
    fees: string;
    anticipation: {
        base: string;
        options: string;
    };
};
export declare const splitRules: {
    findAll: (transactionId: any) => string;
    find: (transactionId: string, splitId: string) => string;
};
export declare const antifraudAnalyses: {
    findAll: (transactionId: string) => string;
    find: (transactionId: string, antifraudId: string) => string;
    create: (transactionId: string) => string;
};
export declare const bankAccounts: {
    base: string;
    details: (id: string) => string;
};
export declare const plans: {
    base: string;
    details: (id: string) => string;
};
export declare const acquirersConfigurations: {
    base: string;
    details: (id: string) => string;
};
export declare const acquirers: {
    base: string;
    details: (id: string) => string;
    anticipation: (id: string, delay: string) => string;
};
export declare const subscriptions: {
    base: string;
    details: (id: string) => string;
    cancel: (id: string) => string;
    transactions: (id: string) => string;
    settleCharge: (id: string) => string;
};
export declare const chargebacks = "/chargebacks";
export declare const cards: {
    base: string;
    details: (id: string) => string;
};
export declare const transfers: {
    base: string;
    details: (id: string) => string;
    days: string;
    limits: string;
    cancel: (id: string) => string;
};
export declare const balance: {
    base: string;
    recipient: (id: string) => string;
};
export declare const balanceOperations: {
    base: string;
    days: string;
    details: (id: string) => string;
    recipients: {
        findAll: (recipientId: string) => string;
        find: (id: string, recipientId: string) => string;
        findWithFormat: (recipientId: string, format: string) => string;
    };
};
export declare const events: {
    base: string;
    transaction: (transactionId: string) => string;
    transactionDetails: (id: string, transactionId: string) => string;
    subscription: (subscriptionId: string) => string;
    subscriptionDetails: (id: string, subscriptionId: string) => string;
};
export declare const gatewayOperations: {
    transaction: (transactionId: any) => string;
    transactionDetails: (id: string, transactionId: string) => string;
    subscription: (subscriptionId: any) => string;
    refuseMessage: (subscriptionId: string, id: string) => string;
};
export declare const chargebackOperations: {
    transaction: (transactionId: string) => string;
};
export declare const postbacks: {
    transaction: (transactionId: string) => string;
    transactionDetails: (id: string, transactionId: string) => string;
    subscription: (subscriptionId: string) => string;
    redeliver: (subscriptionId: string, id: string) => string;
};
export declare const customers: {
    base: string;
    details: (id: string) => string;
};
export declare const zipcodes: {
    details: (zipcode: string) => string;
};
export declare const paymentLinks: {
    base: string;
    cancel: (id: string) => string;
    details: (id: string) => string;
};
export declare const onboardingAnswers: {
    base: string;
};
export declare const onboardingQuestions: {
    details: (id: string) => string;
};
export declare const orders: {
    base: string;
};
export declare const refunds: {
    base: string;
    cancel: (id: string) => string;
};
export declare const companySegments = "/company_segments";
export declare const status = "/status";
export declare const versions = "/versions";
export declare const reprocessedTransactions = "/reprocessed_transactions";
export declare const feePresets: {
    details: (id: string) => string;
};
export declare const pix: {
    base: string;
    keys: string;
};
export declare const settlements: {
    all: (recipientId: string) => string;
    contracts: {
        all: (recipientId: string) => string;
    };
};
export declare const credit: {
    creditLines: {
        all: string;
    };
    proposals: {
        create: (creditLineId: string) => string;
        details: (creditLineId: string, proposalId: string) => string;
        accept: (creditLineId: string, proposalId: string) => string;
        settlementForecast: (creditLineId: string, proposalId: string) => string;
    };
    loans: {
        all: string;
        details: (loanId: string) => string;
    };
    statements: {
        daily: (loanId: string) => string;
        monthly: (loanId: string) => string;
    };
};
