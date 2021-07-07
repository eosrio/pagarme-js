/**
 * @name Request
 * @description This module handles the HTTP requests to Pagar.me's API.  '
 *              It exports GET, PUT, POST, DELETE functions based upon
 *              the `fetch` module.
 *
 * @module request
 * @private
 */
declare const _default: {
    get: (options: any, path: string, body?: {}) => Promise<any>;
    put: (options: any, path: string, body?: {}) => Promise<any>;
    post: (options: any, path: string, body?: {}) => Promise<any>;
    delete: (options: any, path: string, body?: {}) => Promise<any>;
};
export default _default;
