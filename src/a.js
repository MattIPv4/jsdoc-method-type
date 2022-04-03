/**
 * Test global a
 *
 * @param {string} one
 * @param {number} two
 * @returns {string}
 */
const globalA = (one, two) => one.repeat(two);

/**
 * Test module a
 *
 * @module
 *
 * @param {string} one
 * @param {number} two
 * @returns {string}
 */
module.exports = (one, two) => one.repeat(two);
