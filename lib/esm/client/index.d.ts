/**
 * Client Module
 * @description The client module is the entry point for our SDK.
 *              It holds a Promise-based authentication method
 *              ([connect]{@link client#connect}) as well as
 *              allowing for raw use of the resources (without authentication).
 * @module client
 */
/// <reference types="ts-toolbelt" />
/**
 * Returns a version of client with
 * authentication data binded to the
 * resource requests.
 *
 * @example
 * // API Key Authentication
 * pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
 *
 * // Encryption Key Authentication
 * pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
 *
 * // Login Authentication
 * pagarme.client.connect({ email: 'user@email.com', password: '123456' })
 *
 * @param {Object} authentication
 * @returns {Promise} A Promise that resolves to a client with authentication data binded
 */
declare function connect(authentication: any): Promise<(<O1 extends object>(a: O1) => import("List/ObjectOf").ObjectOf<O1> extends import("Misc/BuiltInObject").BuiltInObject ? {
    authentication: any;
    withVersion: import("Function/Curry").Curry<(version: any) => any> & ((version: any) => any);
} : { [K in keyof ({
    authentication: any;
    withVersion: any;
} & import("List/ObjectOf").ObjectOf<import("List/ObjectOf").ObjectOf<O1>>)]: import("Object/Merge").MergeProp<import("Object/At").AtBasic<{
    authentication: any;
    withVersion: import("Function/Curry").Curry<(version: any) => any> & ((version: any) => any);
}, K>, import("Object/At").AtBasic<import("List/ObjectOf").ObjectOf<import("List/ObjectOf").ObjectOf<O1>>, K>, K, never, 1>; })>;
export declare const client: {
    company: {
        create: (opts: any, body: any) => Promise<any>;
        createTemporary: (opts: any, body: any) => Promise<any>;
        activate: (opts: any, body: any) => Promise<any>;
        emailConfirmation: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: any) => Promise<any>;
        current: (opts: any) => Promise<any>;
        resetKeys: (opts: any) => Promise<any>;
        affiliationProgress: (opts: any) => Promise<any>;
        updateBranding: (opts: any, body: any) => Promise<any>;
        emailTemplates: {
            find: (opts: any, body: any) => Promise<any>;
            update: (opts: any, body: any) => Promise<any>;
        };
        fees: (opts: any) => Promise<any>;
        updateAnticipation: (opts: any, body: any) => Promise<any>;
        anticipationOptions: (opts: any) => Promise<any>;
    };
    companySegments: {
        all: (opts: any) => Promise<any>;
    };
    chargebacks: {
        find: (opts: any, query: any) => Promise<any>;
    };
    search: (opts: any, query: any) => Promise<any>;
    session: {
        create: (opts: any, email: string, password: string, recaptchaToken: string, token: any) => Promise<any>;
        destroy: (opts: any, id: string) => Promise<any>;
        verify: (opts: any, payload: string) => Promise<any>;
    };
    transactions: {
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: any) => Promise<any>;
        capture: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        refund: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        collectPayment: (opts: any, body: {
            id: number;
            email: string;
        }) => Promise<any>;
        cardHashKey: (opts: any) => Promise<any>;
        update: (opts: any, body: {
            id: number;
            status: number;
        }) => Promise<any>;
        calculateInstallmentsAmount: (opts: any, body: any) => Promise<any>;
        reprocess: (opts: any, body: any) => Promise<any>;
    };
    payables: {
        find: (opts: any, body: {
            id?: number | undefined;
            transactionId?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: any) => Promise<any>;
        days: (opts: any, body: any) => Promise<any>;
    };
    pixKeys: {
        create: (opts: any, body: any) => Promise<any>;
        all: (opts: any) => Promise<any>;
    };
    user: {
        all: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        current: (opts: any) => Promise<any>;
        destroy: (opts: any, body: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        redefinePassword: (opts: any, body: any) => Promise<any>;
        resetPassword: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: any) => Promise<any>;
        updatePassword: (opts: any, body: any) => Promise<any>;
    };
    invites: {
        find: (opts: any, body?: {
            id?: string | undefined;
        }) => any;
        all: (opts: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        destroy: (opts: any, body: any) => Promise<any>;
    };
    splitRules: {
        find: (opts: any, body: {
            transactionId: number;
            id?: number | undefined;
        }) => any;
    };
    antifraudAnalyses: {
        find: (opts: any, body: {
            transactionId: number;
            id?: number | undefined;
        }) => any;
        create: (opts: any, body: {
            transactionId: number;
        }) => Promise<any>;
    };
    recipients: {
        find: (opts: any, body: {
            id?: string | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: {
            id: string;
        }) => Promise<any>;
    };
    bulkAnticipations: {
        find: (opts: any, body: {
            recipientId: string;
            id?: string | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: {
            recipientId: string;
        }) => Promise<any>;
        update: (opts: any, body: {
            recipientId: string;
            id: string;
        }) => Promise<any>;
        destroy: (opts: any, body: {
            recipientId: string;
            id: string;
        }) => Promise<any>;
        limits: (opts: any, body: {
            recipientId: string;
        }) => Promise<any>;
        days: (opts: any, body: {
            recipientId: string;
            id: string;
        }) => Promise<any>;
        confirm: (opts: any, body: {
            recipientId: string;
            id: string;
        }) => Promise<any>;
        cancel: (opts: any, body: {
            recipientId: string;
            id: string;
        }) => Promise<any>;
    };
    bankAccounts: {
        all: (opts: any, body: {
            count?: number | undefined;
            page?: number | undefined;
        }) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
    };
    plans: {
        all: (opts: any, pagination: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
        create: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: {
            id: number;
            name?: string | undefined;
            trial_days?: number | undefined;
        }) => Promise<any>;
    };
    subscriptions: {
        all: (opts: any, body: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
        create: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        cancel: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        createTransaction: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        findTransactions: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        settleCharge: (opts: any, body: {
            id: number;
        }) => Promise<any>;
    };
    cards: {
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, pagination: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
    };
    acquirersConfigurations: {
        all: (opts: any, pagination: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
        create: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: {
            id: number;
        }) => Promise<any>;
    };
    acquirers: {
        all: (opts: any, pagination: any) => Promise<any>;
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
        create: (opts: any, body: any) => Promise<any>;
        update: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        updateAnticipationDelay: (opts: any, body: {
            id: number;
            delay: number;
        }) => Promise<any>;
    };
    transfers: {
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, pagination: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        cancel: (opts: any, body: {
            id: number;
        }) => Promise<any>;
        days: (opts: any) => Promise<any>;
        limits: (opts: any, params: {
            recipient_id: string;
        }) => Promise<any>;
    };
    balance: {
        primary: (opts: any) => Promise<any>;
        find: (opts: any, body: {
            recipientId: string;
        }) => Promise<any>;
    };
    balanceOperations: {
        find: (opts: any, body: {
            id?: number | undefined;
            recipientId?: number | undefined;
            format?: string | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, pagination: any) => Promise<any>;
        days: (opts: any, body: any) => Promise<any>;
    };
    events: {
        find: (opts: any, body: {
            id?: number | undefined;
            transactionId?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        findCustom: (opts: any, body: any) => Promise<any>;
    };
    gatewayOperations: {
        find: (opts: any, body: {
            id?: number | undefined;
            transactionId?: number | undefined;
            subscriptionId?: number | undefined;
        }) => any;
        refuseMessage: (opts: any, body: {
            id: number;
            subscriptionId?: number | undefined;
        }) => Promise<any>;
    };
    chargebackOperations: {
        find: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
    };
    postbacks: {
        find: (opts: any, body: {
            id?: number | undefined;
            transactionId?: number | undefined; /**
             * Binds the `options` received as param
             * to the client's resources.
             * @private
             *
             * @param {Object} options
             * @param authentication
             * @returns A version of resources with its methods' first param binded to `options`
             */
            subscriptionId?: number | undefined;
        }) => any;
        redeliver: (opts: any, body: {
            id: number;
            subscriptionId: number;
        }) => Promise<any>;
    };
    security: {
        encrypt: (opts: any, card: {
            card_number: string;
            card_holder_name: string;
            card_expiration_date: string;
            card_cvv: string;
        }) => Promise<string>;
        sign: (opts: any, string: string) => any;
        verify: (opts: any, string: string, expected: string) => boolean;
    };
    customers: {
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: {
            count?: number | undefined;
            page?: number | undefined;
        }) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
    };
    zipcodes: {
        find: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
    };
    paymentLinks: {
        find: (opts: any, body: {
            id?: number | undefined;
            count?: number | undefined;
            page?: number | undefined;
        }) => any;
        all: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        cancel: (opts: any, body: any) => Promise<any>;
    };
    settlements: {
        all: (opts: any, body: any) => Promise<any>;
        contracts: {
            all: (opts: any, body: any) => Promise<any>;
        };
    };
    status: (opts: any) => Promise<any>;
    onboardingAnswers: {
        all: (opts: any, body: any) => Promise<any>;
        create: (opts: any, body: any) => Promise<any>;
        destroy: (opts: any, body: any) => Promise<any>;
    };
    onboardingQuestions: {
        find: (opts: any, body: {
            id: string;
        }) => Promise<any>;
    };
    orders: {
        all: (opts: any, body: any) => Promise<any>;
    };
    versions: (opts: any) => Promise<any>;
    reprocessedTransactions: {
        find: (opts: any, query: {
            transaction_id: any;
            original_transaction_id: any;
            starting_at: string;
            ending_at: string;
        }) => Promise<any>;
    };
    refunds: {
        cancel: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
        find: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
    };
    feePresets: {
        find: (opts: any, body: {
            id: string;
        }) => Promise<any>;
    };
    credit: {
        creditLines: {
            all: (opts: any) => Promise<any>;
        };
        proposals: {
            findOne: (opts: any, body: any) => Promise<any>;
            create: (opts: any, body: any) => Promise<any>;
            accept: (opts: any, body: any) => Promise<any>;
            settlementForecast: (opts: any, body: any) => Promise<any>;
        };
        loans: {
            all: import("Function/Curry").Curry<(opts: any) => Promise<any>>;
            find: (opts: any, body: any) => Promise<any>;
        };
        statements: {
            findMonthly: (opts: any, body: any) => Promise<any>;
            findDaily: (opts: any, body: any) => Promise<any>;
        };
    };
    connect: typeof connect;
};
export {};
