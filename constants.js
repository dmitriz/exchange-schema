/**
 * Exchange API Constants
 * 
 * This file contains standardized constants used across exchange integrations.
 * Separating these from the main parameters file improves code organization.
 */

/**
 * @enum {string} ORDER_SIDE
 * @readonly
 * @description Order direction (buy or sell)
 */
const ORDER_SIDE = Object.freeze({
    BUY: "BUY",
    SELL: "SELL"
});

/**
 * @enum {string} ORDER_TYPE
 * @readonly
 * @description Types of orders supported by exchanges
 */
const ORDER_TYPE = Object.freeze({
    LIMIT: "LIMIT",
    MARKET: "MARKET",
    STOP_LOSS: "STOP_LOSS", 
    STOP_LOSS_LIMIT: "STOP_LOSS_LIMIT",
    TAKE_PROFIT: "TAKE_PROFIT",
    TAKE_PROFIT_LIMIT: "TAKE_PROFIT_LIMIT",
    LIMIT_MAKER: "LIMIT_MAKER"
});

/**
 * @enum {string} TIME_IN_FORCE
 * @readonly
 * @description Specifies how long an order remains active before execution or expiration
 */
const TIME_IN_FORCE = Object.freeze({
    GTC: "GTC", // Good Til Canceled
    IOC: "IOC", // Immediate Or Cancel
    FOK: "FOK", // Fill Or Kill
    GTX: "GTX"  // Good Til Crossing (Post Only)
});

// For CommonJS environments (Node.js):
module.exports = {
    ORDER_SIDE,
    ORDER_TYPE,
    TIME_IN_FORCE
};
