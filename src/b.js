/**
 * @typedef {function} B
 * @param {string} one
 * @param {number} two
 * @returns {string}
 */

/**
 * Test global b
 *
 * @type {B}
 */
const globalB = (one, two) => one.repeat(two);

/**
 * Test module b
 *
 * @module
 * @type {B}
 */
module.exports = (one, two) => one.repeat(two);
