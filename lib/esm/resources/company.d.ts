declare namespace _default {
    export { create };
    export { createTemporary };
    export { activate };
    export { emailConfirmation };
    export { update };
    export { current };
    export { resetKeys };
    export { affiliationProgress };
    export { updateBranding };
    export { emailTemplates };
    export { fees };
    export { updateAnticipation };
    export { anticipationOptions };
}
export default _default;
/**
 * `POST /companies`
 * Creates a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function create(opts: any, body: any): Promise<any>;
/**
 * `POST /companies/temporary`
 * Creates a test-only temporary company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function createTemporary(opts: any, body: any): Promise<any>;
/**
 * `POST /companies/activate`
 * Activates a company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function activate(opts: any, body: any): Promise<any>;
/**
 * `POST /company/email_confirmation`
 * Resend account confirmation email to a previously registered company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {String} body.email The email address to resend the account confirmation
 * @returns {Promise} A promise that resolves to
 *                    the send email confirmation company's
 *                    data or to an error.
 **/
declare function emailConfirmation(opts: any, body: any): Promise<any>;
/**
 * `PUT /company`
 * Updates a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function update(opts: any, body: any): Promise<any>;
/**
 * `GET /company`
 * Return a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function current(opts: any): Promise<any>;
/**
 * `PUT /company/reset_keys`
 * Reset the company API keys.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function resetKeys(opts: any): Promise<any>;
/**
 * `GET /company/affiliation_progress`
 * Information about the affiliation progress.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function affiliationProgress(opts: any): Promise<any>;
/**
 * `PUT /company/branding/:id`
 * Updates a company branding from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function updateBranding(opts: any, body: any): Promise<any>;
declare namespace emailTemplates {
    export function find(opts: any, body: any): Promise<any>;
    export function update_1(opts: any, body: any): Promise<any>;
    export { update_1 as update };
}
/**
 * `GET /company/fees`
 * Return company fees configuration available.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
declare function fees(opts: any): Promise<any>;
/**
 * `PUT /company/anticipation`
 * Sets the delay for the automatic anticipation based on the options
 * available. It's also possible to disable the automatic anticipation.
 *
 * Check GET /company/anticipation/options for the options available.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Boolean} body.enabled Enables the automatic anticipation.
 * @param {Number} body.delay Days for the anticipation delay.
 *
 * @returns {Promise} A promise that resolves to
 *                    a confirmation or to an error.
 **/
declare function updateAnticipation(opts: any, body: any): Promise<any>;
/**
 * `GET /company/anticipation/options`
 * Available anticipation options that can be set using PUT /company/anticipation.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the available anticipation options
 *                    or to an error.
 **/
declare function anticipationOptions(opts: any): Promise<any>;
