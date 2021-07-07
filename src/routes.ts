export const base = 'https://api.pagar.me:443/1'

export const session = {
	base: '/sessions',
	destroy: (id: string) => `/sessions/${id}`,
	verify: (id: string) => `/sessions/${id}/verify`,
}

export const transactions = {
	base: '/transactions',
	cardHashKey: '/transactions/card_hash_key',
	calculateInstallmentsAmount: '/transactions/calculate_installments_amount',
	details: (id: string) => `/transactions/${id}`,
	refund: (id: string) => `/transactions/${id}/refund`,
	capture: (id: string) => `/transactions/${id}/capture`,
	collectPayment: (id: string) => `/transactions/${id}/collect_payment`,
	antifraudAnalyses: {
		findAll: (id: string) => `/transactions/${id}/antifraud_analyses`,
		find: (id: string, antifraudId: string) => `/transactions/${id}/antifraud_analyses/${antifraudId}`,
		create: (id: string) => `/transactions/${id}/antifraud_analyses`,
	},
	reprocess: (id: string) => `/transactions/${id}/reprocess`,
}

export const payables = {
	base: '/payables',
	transaction: (transactionId: string) => `/transactions/${transactionId}/payables`,
	find: (id: string) => `/payables/${id}`,
	days: '/payables/days',
}

export const invites = {
	base: '/invites',
	details: (id: string) => `/invites/${id}`,
}

export const recipients = {
	base: '/recipients',
	details: (id: string) => `/recipients/${id}`,
}

export const bulkAnticipations = {
	base: (recipientId: string) => `/recipients/${recipientId}/bulk_anticipations`,
	details: (recipientId: string, id: string) => `/recipients/${recipientId}/bulk_anticipations/${id}`,
	limits: (recipientId: string) => `/recipients/${recipientId}/bulk_anticipations/limits`,
	days: (recipientId: string, id: string) => `/recipients/${recipientId}/bulk_anticipations/${id}/days`,
	confirm: (recipientId: string, id: string) => `/recipients/${recipientId}/bulk_anticipations/${id}/confirm`,
	cancel: (recipientId: string, id: string) => `/recipients/${recipientId}/bulk_anticipations/${id}/cancel`,
}

export const search = '/search'

export const user = {
	base: '/users',
	resetPassword: '/users/reset_password',
	redefinePassword: '/users/redefine_password',
	details: (id: string) => `/users/${id}`,
	updatePassword: (id: string) => `/users/${id}/update_password`,
	singular: '/user',
}

export const company = {
	basePlural: '/companies',
	base: '/company',
	temporary: '/companies/temporary',
	emailConfirmation: '/company/email_confirmation',
	activate: '/companies/activate',
	resetKeys: '/company/reset_keys',
	affiliationProgress: '/company/affiliation_progress',
	branding: (id: string) => `/company/branding/${id}`,
	emailTemplates: (id: string) => `/company/email_templates/${id}`,
	fees: '/company/fees',
	anticipation: {
		base: '/company/anticipation',
		options: '/company/anticipation/options',
	},
}

export const splitRules = {
	findAll: (transactionId: any) => `/transactions/${transactionId}/split_rules`,
	find: (transactionId: string, splitId: string) => `/transactions/${transactionId}/split_rules/${splitId}`,
}

export const antifraudAnalyses = {
	findAll: (transactionId: string) => `/transactions/${transactionId}/antifraud_analyses`,
	find: (
		transactionId: string,
		antifraudId: string) => `/transactions/${transactionId}/antifraud_analyses/${antifraudId}`,
	create: (transactionId: string) => `/transactions/${transactionId}/antifraud_analyses`,
}

export const bankAccounts = {
	base: '/bank_accounts',
	details: (id: string) => `/bank_accounts/${id}`,
}

export const plans = {
	base: '/plans',
	details: (id: string) => `/plans/${id}`,
}

export const acquirersConfigurations = {
	base: '/acquirers_configurations',
	details: (id: string) => `/acquirers_configuration/${id}`,
}

export const acquirers = {
	base: '/acquirers',
	details: (id: string) => `/acquirer/${id}`,
	anticipation: (id: string, delay: string) => `/acquirer/${id}/anticipation_delay/${delay}`,
}

export const subscriptions = {
	base: '/subscriptions',
	details: (id: string) => `/subscriptions/${id}`,
	cancel: (id: string) => `/subscriptions/${id}/cancel`,
	transactions: (id: string) => `/subscriptions/${id}/transactions`,
	settleCharge: (id: string) => `/subscriptions/${id}/settle_charge`,
}

export const chargebacks = '/chargebacks'

export const cards = {
	base: '/cards',
	details: (id: string) => `/cards/${id}`,
}

export const transfers = {
	base: '/transfers',
	details: (id: string) => `/transfers/${id}`,
	days: '/transfers/days',
	limits: '/transfers/limits',
	cancel: (id: string) => `/transfers/${id}/cancel`,
}

export const balance = {
	base: '/balance',
	recipient: (id: string) => `/recipients/${id}/balance`,
}

export const balanceOperations = {
	base: '/balance/operations',
	days: '/balance/operations/days',
	details: (id: string) => `/balance/operations/${id}`,
	recipients: {
		findAll: (recipientId: string) => `/recipients/${recipientId}/balance/operations`,
		find: (id: string, recipientId: string) => `/recipients/${recipientId}/balance/operations/${id}`,
		findWithFormat: (
			recipientId: string, format: string) => `/recipients/${recipientId}/balance/operations.${format}`,
	},
}

export const events = {
	base: '/events',
	transaction: (transactionId: string) => `/transactions/${transactionId}/events`,
	transactionDetails: (id: string, transactionId: string) => `/transactions/${transactionId}/events/${id}`,
	subscription: (subscriptionId: string) => `/subscriptions/${subscriptionId}/events`,
	subscriptionDetails: (id: string, subscriptionId: string) => `/subscriptions/${subscriptionId}/events/${id}`,
}

export const gatewayOperations = {
	transaction: (transactionId: any) => `/transactions/${transactionId}/operations`,
	transactionDetails: (id: string, transactionId: string) => `/transactions/${transactionId}/operations/${id}`,
	subscription: (subscriptionId: any) => `/subscriptions/${subscriptionId}/operations`,
	refuseMessage: (
		subscriptionId: string, id: string) => `/subscriptions/${subscriptionId}/operations/${id}/refuse_message`,
}

export const chargebackOperations = {
	transaction: (transactionId: string) => `/transactions/${transactionId}/chargeback_operations`,
}

export const postbacks = {
	transaction: (transactionId: string) => `/transactions/${transactionId}/postbacks`,
	transactionDetails: (id: string, transactionId: string) => `/transactions/${transactionId}/postbacks/${id}`,
	subscription: (subscriptionId: string) => `/subscriptions/${subscriptionId}/postbacks`,
	redeliver: (subscriptionId: string, id: string) => `/subscriptions/${subscriptionId}/postbacks/${id}/redeliver`,
}

export const customers = {
	base: '/customers',
	details: (id: string) => `/customers/${id}`,
}

export const zipcodes = {
	details: (zipcode: string) => `/zipcodes/${zipcode}`,
}

export const paymentLinks = {
	base: '/payment_links',
	cancel: (id: string) => `/payment_links/${id}/cancel`,
	details: (id: string) => `/payment_links/${id}`,
}

export const onboardingAnswers = {
	base: '/onboarding_answers',
}

export const onboardingQuestions = {
	details: (id: string) => `/onboarding_questions/${id}`,
}

export const orders = {
	base: '/orders',
}

export const refunds = {
	base: '/refunds',
	cancel: (id: string) => `/refunds/${id}/cancel`,
}

export const companySegments = '/company_segments'

export const status = '/status'

export const versions = '/versions'

export const reprocessedTransactions = '/reprocessed_transactions'

export const feePresets = {
	details: (id: string) => `/fee_presets/${id}`,
}

export const pix = {
	base: '/pix',
	keys: '/pix/keys',
}

export const settlements = {
	all: (recipientId: string) => `/recipients/${recipientId}/settlements`,
	contracts: {
		all: (recipientId: string) => `/recipients/${recipientId}/settlements/contracts`,
	},
}

export const credit = {
	creditLines: {
		all: '/credit/credit_lines',
	},
	proposals: {
		create: (creditLineId: string) => `/credit/credit_lines/${creditLineId}/proposals`,
		details: (
			creditLineId: string, proposalId: string) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}`,
		accept: (
			creditLineId: string,
			proposalId: string) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}/accept`,
		settlementForecast: (
			creditLineId: string,
			proposalId: string) => `/credit/credit_lines/${creditLineId}/proposals/${proposalId}/settlement_forecast`,
	},
	loans: {
		all: '/credit/loans',
		details: (loanId: string) => `/credit/loans/${loanId}`,
	},
	statements: {
		daily: (loanId: string) => `/credit/loans/${loanId}/statements/daily`,
		monthly: (loanId: string) => `/credit/loans/${loanId}/statements/monthly`,
	},
}
