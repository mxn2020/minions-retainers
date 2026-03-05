/**
 * Minions Retainers SDK
 *
 * Recurring service agreements, care plans, monthly retainers, and subscription management
 *
 * @module @minions-retainers/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Retainers.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
