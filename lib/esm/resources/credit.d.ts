/// <reference types="ts-toolbelt" />
declare namespace _default {
    namespace creditLines {
        export { findAllCreditLines as all };
    }
    namespace proposals {
        export { findOneProposal as findOne };
        export { createProposal as create };
        export { acceptProposal as accept };
        export { settlementForecast };
    }
    namespace loans {
        export { findAllLoans as all };
        export { findLoans as find };
    }
    namespace statements {
        export { monthlyStatement as findMonthly };
        export { dailyStatement as findDaily };
    }
}
export default _default;
/**
 * `GET /credit/credit_lines`
 *
 * Returns all credit lines.
 *
 * @param {Object} opts   An options params which
 *                        is usually already bound
 *                        by `connect` functions.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function findAllCreditLines(opts: any): Promise<any>;
/**
 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId`
 *
 * Returns requested proposal.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function findOneProposal(opts: any, body: any): Promise<any>;
/**
 * `POST /credit/credit_lines/:creditLineId/proposals`
 *
 * Creates a proposals based on credit line.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.amount The proposal amount
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function createProposal(opts: any, body: any): Promise<any>;
/**
 * `POST /credit/credit_lines/:creditLineId/proposals/:proposalId/accept`
 *
 * Accepts a proposal
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function acceptProposal(opts: any, body: any): Promise<any>;
/**
 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId/settlement_forecast`
 *
 * Returns the settlement forecast from the given proposal
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function settlementForecast(opts: any, body: any): Promise<any>;
/**
 * `GET /credit/loans`
 *
 * Returns all loans
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare const findAllLoans: import("Function/Curry").Curry<(opts: any) => Promise<any>>;
/**
 * `GET /credit/loans` OR `GET /credit/loans/:loanId`
 *
 * Returns the requested loan if the loan's ID is passed; otherwise returns all loans.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} [body.loanId] The optional loan's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function findLoans(opts: any, body: any): Promise<any>;
/**
 * `GET /credit/loans/:loanId/statements/monthly`
 *
 * Returns the monthly statements of the given loan
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.loanId The optional loan's ID
 *
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function monthlyStatement(opts: any, body: any): Promise<any>;
/**
 * `GET /credit/loans/:loanId/statements/daily`
 *
 * Returns the daily statements of the given loan
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 * @param {String} body.loanId The optional loan's ID
 *
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function dailyStatement(opts: any, body: any): Promise<any>;
