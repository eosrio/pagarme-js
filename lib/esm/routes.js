export const base = 'https://api.pagar.me:443/1';
export const session = {
    base: '/sessions',
    destroy: (id) => `/sessions/${id}`,
    verify: (id) => `/sessions/${id}/verify`,
};
export const transactions = {
    base: '/transactions',
    cardHashKey: '/transactions/card_hash_key',
    calculateInstallmentsAmount: '/transactions/calculate_installments_amount',
    details: (id) => `/transactions/${id}`,
    refund: (id) => `/transactions/${id}/refund`,
    capture: (id) => `/transactions/${id}/capture`,
    collectPayment: (id) => `/transactions/${id}/collect_payment`,
    antifraudAnalyses: {
        findAll: (id) => `/transactions/${id}/antifraud_analyses`,
        find: (id, antifraudId) => `/transactions/${id}/antifraud_analyses/${antifraudId}`,
        create: (id) => `/transactions/${id}/antifraud_analyses`,
    },
    reprocess: (id) => `/transactions/${id}/reprocess`,
};
export const payables = {
    base: '/payables',
    transaction: (transactionId) => `/transactions/${transactionId}/payables`,
    find: (id) => `/payables/${id}`,
    days: '/payables/days',
};
export const invites = {
    base: '/invites',
    details: (id) => `/invites/${id}`,
};
export const recipients = {
    base: '/recipients',
    details: (id) => `/recipients/${id}`,
};
export const bulkAnticipations = {
    base: (recipientId) => `/recipients/${recipientId}/bulk_anticipations`,
    details: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}`,
    limits: (recipientId) => `/recipients/${recipientId}/bulk_anticipations/limits`,
    days: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/days`,
    confirm: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/confirm`,
    cancel: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/cancel`,
};
export const search = '/search';
export const user = {
    base: '/users',
    resetPassword: '/users/reset_password',
    redefinePassword: '/users/redefine_password',
    details: (id) => `/users/${id}`,
    updatePassword: (id) => `/users/${id}/update_password`,
    singular: '/user',
};
export const company = {
    basePlural: '/companies',
    base: '/company',
    temporary: '/companies/temporary',
    emailConfirmation: '/company/email_confirmation',
    activate: '/companies/activate',
    resetKeys: '/company/reset_keys',
    affiliationProgress: '/company/affiliation_progress',
    branding: (id) => `/company/branding/${id}`,
    emailTemplates: (id) => `/company/email_templates/${id}`,
    fees: '/company/fees',
    anticipation: {
        base: '/company/anticipation',
        options: '/company/anticipation/options',
    },
};
export const splitRules = {
    findAll: (transactionId) => `/transactions/${transactionId}/split_rules`,
    find: (transactionId, splitId) => `/transactions/${transactionId}/split_rules/${splitId}`,
};
export const antifraudAnalyses = {
    findAll: (transactionId) => `/transactions/${transactionId}/antifraud_analyses`,
    find: (transactionId, antifraudId) => `/transactions/${transactionId}/antifraud_analyses/${antifraudId}`,
    create: (transactionId) => `/transactions/${transactionId}/antifraud_analyses`,
};
export const bankAccounts = {
    base: '/bank_accounts',
    details: (id) => `/bank_accounts/${id}`,
};
export const plans = {
    base: '/plans',
    details: (id) => `/plans/${id}`,
};
export const acquirersConfigurations = {
    base: '/acquirers_configurations',
    details: (id) => `/acquirers_configuration/${id}`,
};
export const acquirers = {
    base: '/acquirers',
    details: (id) => `/acquirer/${id}`,
    anticipation: (id, delay) => `/acquirer/${id}/anticipation_delay/${delay}`,
};
export const subscriptions = {
    base: '/subscriptions',
    details: (id) => `/subscriptions/${id}`,
    cancel: (id) => `/subscriptions/${id}/cancel`,
    transactions: (id) => `/subscriptions/${id}/transactions`,
    settleCharge: (id) => `/subscriptions/${id}/settle_charge`,
};
export const chargebacks = '/chargebacks';
export const cards = {
    base: '/cards',
    details: (id) => `/cards/${id}`,
};
export const transfers = {
    base: '/transfers',
    details: (id) => `/transfers/${id}`,
    days: '/transfers/days',
    limits: '/transfers/limits',
    cancel: (id) => `/transfers/${id}/cancel`,
};
export const balance = {
    base: '/balance',
    recipient: (id) => `/recipients/${id}/balance`,
};
export const balanceOperations = {
    base: '/balance/operations',
    days: '/balance/operations/days',
    details: (id) => `/balance/operations/${id}`,
    recipients: {
        findAll: (recipientId) => `/recipients/${recipientId}/balance/operations`,
        find: (id, recipientId) => `/recipients/${recipientId}/balance/operations/${id}`,
        findWithFormat: (recipientId, format) => `/recipients/${recipientId}/balance/operations.${format}`,
    },
};
export const events = {
    base: '/events',
    transaction: (transactionId) => `/transactions/${transactionId}/events`,
    transactionDetails: (id, transactionId) => `/transactions/${transactionId}/events/${id}`,
    subscription: (subscriptionId) => `/subscriptions/${subscriptionId}/events`,
    subscriptionDetails: (id, subscriptionId) => `/subscriptions/${subscriptionId}/events/${id}`,
};
export const gatewayOperations = {
    transaction: (transactionId) => `/transactions/${transactionId}/operations`,
    transactionDetails: (id, transactionId) => `/transactions/${transactionId}/operations/${id}`,
    subscription: (subscriptionId) => `/subscriptions/${subscriptionId}/operations`,
    refuseMessage: (subscriptionId, id) => `/subscriptions/${subscriptionId}/operations/${id}/refuse_message`,
};
export const chargebackOperations = {
    transaction: (transactionId) => `/transactions/${transactionId}/chargeback_operations`,
};
export const postbacks = {
    transaction: (transactionId) => `/transactions/${transactionId}/postbacks`,
    transactionDetails: (id, transactionId) => `/transactions/${transactionId}/postbacks/${id}`,
    subscription: (subscriptionId) => `/subscriptions/${subscriptionId}/postbacks`,
    redeliver: (subscriptionId, id) => `/subscriptions/${subscriptionId}/postbacks/${id}/redeliver`,
};
export const customers = {
    base: '/customers',
    details: (id) => `/customers/${id}`,
};
export const zipcodes = {
    details: (zipcode) => `/zipcodes/${zipcode}`,
};
export const paymentLinks = {
    base: '/payment_links',
    cancel: (id) => `/payment_links/${id}/cancel`,
    details: (id) => `/payment_links/${id}`,
};
export const onboardingAnswers = {
    base: '/onboarding_answers',
};
export const onboardingQuestions = {
    details: (id) => `/onboarding_questions/${id}`,
};
export const orders = {
    base: '/orders',
};
export const refunds = {
    base: '/refunds',
    cancel: (id) => `/refunds/${id}/cancel`,
};
export const companySegments = '/company_segments';
export const status = '/status';
export const versions = '/versions';
export const reprocessedTransactions = '/reprocessed_transactions';
export const feePresets = {
    details: (id) => `/fee_presets/${id}`,
};
export const pix = {
    base: '/pix',
    keys: '/pix/keys',
};
export const settlements = {
    all: (recipientId) => `/recipients/${recipientId}/settlements`,
    contracts: {
        all: (recipientId) => `/recipients/${recipientId}/settlements/contracts`,
    },
};
export const credit = {
    creditLines: {
        all: '/credit/credit_lines',
    },
    proposals: {
        create: (creditLineId) => `/credit/credit_lines/${creditLineId}/proposals`,
        details: (creditLineId, proposalId) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}`,
        accept: (creditLineId, proposalId) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}/accept`,
        settlementForecast: (creditLineId, proposalId) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}/settlement_forecast`,
    },
    loans: {
        all: '/credit/loans',
        details: (loanId) => `/credit/loans/${loanId}`,
    },
    statements: {
        daily: (loanId) => `/credit/loans/${loanId}/statements/daily`,
        monthly: (loanId) => `/credit/loans/${loanId}/statements/monthly`,
    },
};
//# sourceMappingURL=routes.js.map