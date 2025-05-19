/**
 * Universal Exchange API Request Parameters
 *
 * This object serves as a template for structuring parameters for requests to cryptocurrency exchange APIs.
 * It includes common fields found across many exchanges and provides sections for exchange-specific parameters.
 *
 * Naming Convention: snake_case is used for consistency within this object.
 * Comments may indicate typical camelCase equivalents or other common API field names.
 *
 * Usage:
 * 1. Create a new object based on this template.
 * 2. Fill in the required and optional parameters for your specific API call.
 * 3. Remove or leave empty any unused optional fields.
 * 4. Add any exchange-specific parameters to the `exchange_specific_params` object.
 * 
 * ⚠️ SECURITY WARNING: Never store actual credentials in this file or commit them to version control!
 */

// Define common enums used in the parameters
const ORDER_SIDE = Object.freeze({
    BUY: "BUY",
    SELL: "SELL"
});

const ORDER_TYPE = Object.freeze({
    LIMIT: "LIMIT",
    MARKET: "MARKET",
    STOP_LOSS: "STOP_LOSS", 
    STOP_LOSS_LIMIT: "STOP_LOSS_LIMIT",
    TAKE_PROFIT: "TAKE_PROFIT",
    TAKE_PROFIT_LIMIT: "TAKE_PROFIT_LIMIT",
    LIMIT_MAKER: "LIMIT_MAKER"
});

const TIME_IN_FORCE = Object.freeze({
    GTC: "GTC", // Good Til Canceled
    IOC: "IOC", // Immediate Or Cancel
    FOK: "FOK", // Fill Or Kill
    GTX: "GTX"  // Good Til Crossing (Post Only)
});

/**
 * Universal Exchange API Request Parameters Template
 * @typedef {Object} ExchangeParams
 * @description A standardized template for cryptocurrency exchange API request parameters
 * @property {string} api_key - API Key for the exchange
 * @property {string} secret_key - API Secret Key
 * @property {string} [passphrase] - Required by some exchanges (e.g., Coinbase Pro, KuCoin)
 * @property {string} [user_id] - Required by some exchanges
 * @property {number} [timestamp] - Request timestamp (ms)
 * @property {number} [recv_window] - Request validity window (ms)
 * @property {string} symbol - Trading pair symbol (e.g., "BTCUSDT")
 * @property {string} side - Order side (BUY or SELL)
 * @property {string} type - Order type (LIMIT, MARKET, etc.)
 * @property {string|number} quantity - Amount of base asset to buy/sell
 * @property {Object} exchange_specific_params - Parameters unique to specific exchanges
 */
const ExchangeParams = {
    // === Authentication & General API Settings ===
    // ⚠️ SECURITY WARNING ⚠️
    // NEVER hardcode actual credentials in this object or commit them to version control!
    // ALWAYS load sensitive credentials from environment variables or a secure credential store.
    // Examples: 
    //   - process.env.API_KEY
    //   - Use a secure vault or key management service
    //   - For local development, use .env files that are in .gitignore
    
    // ✅ Recommended pattern:
    // api_key: process.env.EXCHANGE_API_KEY,       // Load from environment variable
    // secret_key: process.env.EXCHANGE_SECRET_KEY, // Load from environment variable
    // passphrase: process.env.EXCHANGE_PASSPHRASE, // Load from environment variable
    
    api_key: "",                // string: [REQUIRED] API Key for the exchange
    secret_key: "",             // string: [REQUIRED] API Secret Key
    passphrase: "",             // string: [OPTIONAL] Required by some exchanges (e.g., Coinbase Pro, KuCoin)
    user_id: null,              // string: [OPTIONAL] Required by some exchanges
    
    // Dynamic runtime values - DO NOT pre-populate these values
    timestamp: null,           // number: [REQUIRED] MUST be generated fresh at request time using Date.now()
    recv_window: 5000,          // number: [OPTIONAL] Request validity window (milliseconds)
    // signature: null,          // string: [REQUIRED] MUST be generated at runtime from params using secret_key
    
    // === Endpoint & Request Type ===
    // http_method: "GET",      // string: e.g., "GET", "POST", "PUT", "DELETE" (Often handled by the SDK/library)
    
    // Import order parameter enums from a dedicated constants file
    // These constants should be defined in a separate exchangeConstants.js file

    // === Common Order Parameters ===
    symbol: "",                 // string: Trading pair symbol (e.g., "BTCUSDT", "ETH_BTC"). (e.g., symbol, instrument_id, market)
    side: ORDER_SIDE.BUY,       // string: Order side (BUY or SELL)
    type: ORDER_TYPE.LIMIT,     // string: Order type (LIMIT, MARKET, etc.)
    quantity: null,             // string | number: Amount of base asset to buy/sell. (e.g., qty, amount, size)
    quote_order_qty: null,      // string | number: Amount of quote asset to spend (for MARKET BUY orders on some exchanges). (e.g., quoteOrderQty)
    price: null,                // string | number: Price for LIMIT orders.
    time_in_force: TIME_IN_FORCE.GTC, // string: How long the order remains in effect (GTC, IOC, FOK)
    client_order_id: "",        // string: Custom order ID provided by the client. (e.g., clientOid, newClientOrderId)
    stop_price: null,           // string | number: Price for STOP_LOSS, TAKE_PROFIT orders. (e.g., triggerPrice)
    iceberg_qty: null,          // string | number: For iceberg orders, the visible quantity. (e.g., icebergQty)
    leverage: null,             // string | number: Leverage for margin/futures trading (e.g., "10", 10x).

    // === Order Management Parameters (Cancel, Query) ===
    order_id: null,             // string | number: Exchange-assigned order ID. (e.g., orderId)
    orig_client_order_id: "",   // string: Original client_order_id (for canceling/querying). (e.g., origClientOrderId)

    // === Pagination Parameters (for fetching lists like orders, trades) ===
    start_time: 0,              // number: Timestamp (ms) for filtering results from a certain time. (e.g., startTime)
    end_time: 0,                // number: Timestamp (ms) for filtering results up to a certain time. (e.g., endTime)
    from_id: null,              // string | number: ID to fetch results after (exclusive). (e.g., fromId, after)
    limit: 0,                   // number: Number of items to retrieve per page. (e.g., pageSize, count)
    page_index: 0,              // number: Page number (for offset-based pagination).
    cursor: "",                 // string: Cursor for cursor-based pagination.

    // === Market Data Parameters ===
    interval: "",               // string: Kline/candlestick interval (e.g., "1m", "1h", "1d"). (e.g., KLINE_INTERVAL_1MINUTE)
    depth: 0,                   // number: Depth for order book (e.g., 5, 10, 20).

    // === Wallet / Account Parameters ===
    asset: "",                  // string: Asset symbol (e.g., "BTC", "USDT"). (e.g., currency)
    network: "",                // string: Network/chain for deposits/withdrawals (e.g., "ERC20", "BEP20", "TRC20").
    address: "",                // string: Wallet address.
    address_tag: "",            // string: Destination tag or memo for certain currencies (e.g., XRP, XLM). (e.g., memo)
    transfer_type: "",          // string: Type of transfer (e.g., "MAIN_TO_MARGIN").
    amount: null,               // string | number: Amount for transfers, withdrawals.

    // === Exchange-Specific Parameters ===
    // Use this object to store any parameters that are unique to a specific exchange
    // and not covered by the common fields above.
    exchange_specific_params: {
        // example_binance_param: "",
        // example_kraken_param: 0,
    },

    // === Other Potential Fields ===
    // reduce_only: false,      // boolean: For margin/futures, if the order should only reduce a position.
    // close_position: false,   // boolean: For futures, if the order is to close a position.
    // margin_type: "",         // string: e.g., "ISOLATED", "CROSS" (for futures)
    // position_side: ""        // string: e.g., "LONG", "SHORT", "BOTH" (for futures)
};

// Export the ExchangeParams object and the enums
// Choose one of the following export patterns depending on your environment:

// For CommonJS environments (Node.js):
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ExchangeParams,
        ORDER_SIDE,
        ORDER_TYPE,
        TIME_IN_FORCE
    };
}

// For ES Modules (modern browsers, TypeScript, etc.):
export {
    ExchangeParams as default,
    ORDER_SIDE,
    ORDER_TYPE,
    TIME_IN_FORCE
};
