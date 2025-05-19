/**
 * API Constants and Enums for Cryptocurrency Exchange Interactions
 *
 * This file defines common constants and enumerations that are frequently used
 * when specifying parameters for API requests to cryptocurrency exchanges.
 * Using these constants can help improve code clarity, reduce typos, and make
 * it easier to manage predefined values.
 */

// Order Side: Indicates whether an order is to buy or sell.
const ORDER_SIDE = {
    BUY: "BUY",
    SELL: "SELL"
};

// Order Type: Specifies the execution strategy for an order.
const ORDER_TYPE = {
    LIMIT: "LIMIT",                     // An order to buy or sell at a specific price or better.
    MARKET: "MARKET",                   // An order to buy or sell immediately at the current best available market price.
    STOP_LOSS: "STOP_LOSS",             // A market order that triggers when the market price reaches the stopPrice. (Binance: STOP_LOSS)
    STOP_LOSS_LIMIT: "STOP_LOSS_LIMIT", // A limit order that triggers when the market price reaches the stopPrice. (Binance: STOP_LOSS_LIMIT)
    TAKE_PROFIT: "TAKE_PROFIT",           // A market order that triggers when the market price reaches the stopPrice. (Binance: TAKE_PROFIT)
    TAKE_PROFIT_LIMIT: "TAKE_PROFIT_LIMIT", // A limit order that triggers when the market price reaches the stopPrice. (Binance: TAKE_PROFIT_LIMIT)
    LIMIT_MAKER: "LIMIT_MAKER",         // A limit order that will only be accepted if it can be posted to the order book (i.e., it does not immediately fill). Also known as "Post-Only". (Binance: LIMIT_MAKER)
    // Other potential types depending on the exchange:
    // STOP: "STOP", // Deprecated or less common on some exchanges, often replaced by STOP_LOSS or STOP_MARKET
    // STOP_MARKET: "STOP_MARKET", // Similar to STOP_LOSS
    // TAKE_PROFIT_MARKET: "TAKE_PROFIT_MARKET", // Similar to TAKE_PROFIT
    // TRAILING_STOP_MARKET: "TRAILING_STOP_MARKET" // For trailing stop orders
};

// Time In Force: Specifies how long an order will remain active before it is executed or expires.
const TIME_IN_FORCE = {
    GTC: "GTC", // Good Til Canceled: The order remains active until it is filled or manually canceled.
    IOC: "IOC", // Immediate Or Cancel: The order must be filled immediately for any portion that can be, and any unfilled portion is canceled.
    FOK: "FOK", // Fill Or Kill: The order must be filled entirely and immediately, or it is canceled.
    GTX: "GTX", // Good Til Crossing (Post Only): The order will only be posted to the order book and will not execute against existing orders. Some exchanges might use a different term or a boolean flag (e.g., `postOnly: true`). Binance uses LIMIT_MAKER for this concept with type.
    GTD: "GTD"  // Good Til Date/Time: The order remains active until a specified date and time. (Less common in crypto spot, more in traditional or some derivatives platforms)
};

// Kline/Candlestick Intervals: Common intervals for fetching historical market data.
const KLINE_INTERVALS = {
    ONE_MINUTE: "1m",
    THREE_MINUTES: "3m",
    FIVE_MINUTES: "5m",
    FIFTEEN_MINUTES: "15m",
    THIRTY_MINUTES: "30m",
    ONE_HOUR: "1h",
    TWO_HOURS: "2h",
    FOUR_HOURS: "4h",
    SIX_HOURS: "6h",
    EIGHT_HOURS: "8h",
    TWELVE_HOURS: "12h",
    ONE_DAY: "1d",
    THREE_DAYS: "3d",
    ONE_WEEK: "1w",
    ONE_MONTH: "1M" // Note: 'M' is typically for Month, 'm' for minute.
};

// Position Side (Primarily for Futures/Derivatives)
const POSITION_SIDE = {
    BOTH: "BOTH",   // For one-way mode
    LONG: "LONG",   // For hedge mode, long position
    SHORT: "SHORT"  // For hedge mode, short position
};

// Margin Type (Primarily for Futures/Derivatives)
const MARGIN_TYPE = {
    ISOLATED: "ISOLATED",
    CROSS: "CROSSED" // Or "CROSS" depending on the exchange (e.g., Binance uses "CROSSED" for /fapi/v1/marginType, "CROSS" for /papi/v1/marginType)
};


// To use these in your code, you might import them if using modules:
// import { ORDER_SIDE, ORDER_TYPE } from './apiConstants.js';
//
// Example usage:
// const myOrder = {
//   side: ORDER_SIDE.BUY,
//   type: ORDER_TYPE.LIMIT,
//   // ... other params
// };

// If you are using Node.js or a module system, you might want to export them:
// module.exports = { // For CommonJS
//   ORDER_SIDE,
//   ORDER_TYPE,
//   TIME_IN_FORCE,
//   KLINE_INTERVALS,
//   POSITION_SIDE,
//   MARGIN_TYPE
// };
// Or for ES Modules:
// export {
//   ORDER_SIDE,
//   ORDER_TYPE,
//   TIME_IN_FORCE,
//   KLINE_INTERVALS,
//   POSITION_SIDE,
//   MARGIN_TYPE
// };

// console.log("API Constants loaded:", { ORDER_SIDE, ORDER_TYPE, TIME_IN_FORCE, KLINE_INTERVALS }); // For testing
