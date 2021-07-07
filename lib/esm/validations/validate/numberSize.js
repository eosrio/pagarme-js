import { equals, length, pipe, replace, toString, } from 'ramda';
const clean = replace(/[^0-9]+/g, '');
// @ts-ignore
export default size => pipe(toString, clean, length, equals(size));
//# sourceMappingURL=numberSize.js.map