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
 */

const ExchangeParams = {
    // === Authentication & General API Settings ===
    api_key: "",                // string: API Key for the exchange. (e.g., apiKey)
    secret_key: "",             // string: API Secret Key. (e.g., secretKey, apiSecret)
    passphrase: "",             // string: API Passphrase (required by some exchanges like Coinbase Pro, KuCoin). (e.g., passphrase)
    user_id: "",                // string: User ID (required by some exchanges). (e.g., uid)
    timestamp: 0,               // number: Current timestamp in milliseconds (often required for signed requests).
    recv_window: 5000,          // number: Milliseconds for request validity (e.g., Binance's recvWindow).
    signature: "",              // string: Generated signature for authenticated requests.

    // === Endpoint & Request Type ===
    // http_method: "GET",      // string: e.g., "GET", "POST", "PUT", "DELETE" (Often handled by the SDK/library)
    // endpoint_path: "",       // string: e.g., "/api/v3/order" (Often handled by the SDK/library)

    // === Common Order Parameters ===
    symbol: "",                 // string: Trading pair symbol (e.g., "BTCUSDT", "ETH_BTC"). (e.g., symbol, instrument_id, market)
    side: "",                   // string: Order side ("BUY" or "SELL"). Use constants/enums. (e.g., orderSide)
                                // Suggested Enum: ORDER_SIDE = { BUY: "BUY", SELL: "SELL" };
    type: "",                   // string: Order type ("LIMIT", "MARKET", "STOP_LOSS", "TAKE_PROFIT", etc.). Use constants/enums. (e.g., orderType)
                                // Suggested Enum: ORDER_TYPE = { LIMIT: "LIMIT", MARKET: "MARKET", STOP_LOSS_LIMIT: "STOP_LOSS_LIMIT", ... };
    quantity: "",               // string | number: Amount of base asset to buy/sell. (e.g., qty, amount, size)
    quote_order_qty: "",        // string | number: Amount of quote asset to spend (for MARKET BUY orders on some exchanges). (e.g., quoteOrderQty)
    price: "",                  // string | number: Price for LIMIT orders.
    time_in_force: "",          // string: Time in force policy ("GTC", "IOC", "FOK", "GTX"). Use constants/enums. (e.g., tif)
                                // Suggested Enum: TIME_IN_FORCE = { GTC: "GTC", IOC: "IOC", FOK: "FOK", POST_ONLY: "POST_ONLY" }; // (Post_Only often as 'GTX' or a boolean flag)
    client_order_id: "",        // string: Custom order ID provided by the client. (e.g., clientOid, newClientOrderId)
    stop_price: "",             // string | number: Price for STOP_LOSS, TAKE_PROFIT orders. (e.g., triggerPrice)
    iceberg_qty: "",            // string | number: For iceberg orders, the visible quantity. (e.g., icebergQty)
    leverage: "",               // string | number: Leverage for margin/futures trading (e.g., "10", 10x).

    // === Order Management Parameters (Cancel, Query) ===
    order_id: "",               // string | number: Exchange-assigned order ID. (e.g., orderId)
    orig_client_order_id: "",   // string: Original client_order_id (for canceling/querying). (e.g., origClientOrderId)

    // === Pagination Parameters (for fetching lists like orders, trades) ===
    start_time: 0,              // number: Timestamp (ms) for filtering results from a certain time. (e.g., startTime)
    end_time: 0,                // number: Timestamp (ms) for filtering results up to a certain time. (e.g., endTime)
    from_id: "",                // string | number: ID to fetch results after (exclusive). (e.g., fromId, after)
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
    amount: "",                 // string | number: Amount for transfers, withdrawals.

    // === Exchange-Specific Parameters ===
    // Use this object to store any parameters that are unique to a specific exchange
    // and not covered by the common fields above.
    exchange_specific_params: {
        // example_binance_param: "",
        // example_kraken_param: 0,
    },

    // === Other Potential Fields ===
    // reduce_only: false,      // boolean: For margin/futures, if the order should only reduce a position.
    // close_position: false,   // boolean: For margin/futures, if the order is to close a position.
    // margin_type: "",         // string: e.g., "ISOLATED", "CROSS" (for futures)
    // position_side: ""        // string: e.g., "LONG", "SHORT", "BOTH" (for futures)
};

// --- Suggested Enums/Constants (can be defined elsewhere and imported) ---
/*
const ORDER_SIDE = {
    BUY: "BUY",
    SELL: "SELL"
};

const ORDER_TYPE = {
    LIMIT: "LIMIT",
    MARKET: "MARKET",
    STOP_LOSS: "STOP_LOSS", // Price-triggered market order
    STOP_LOSS_LIMIT: "STOP_LOSS_LIMIT", // Price-triggered limit order
    TAKE_PROFIT: "TAKE_PROFIT", // Price-triggered market order
    TAKE_PROFIT_LIMIT: "TAKE_PROFIT_LIMIT", // Price-triggered limit order
    LIMIT_MAKER: "LIMIT_MAKER" // Post-only limit order
};

const TIME_IN_FORCE = {
    GTC: "GTC", // Good Til Canceled
    IOC: "IOC", // Immediate Or Cancel
    FOK: "FOK", // Fill Or Kill
    GTX: "GTX", // Good Til Crossing (Post Only) - some exchanges use this or a boolean like `postOnly`
    // POST_ONLY: "POST_ONLY" // Alternative for GTX, sometimes a separate boolean flag
};

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
    ONE_MONTH: "1M"
};
*/

// To use it in your code:
// let myOrderParams = { ...ExchangeParams };
// myOrderParams.api_key = "YOUR_API_KEY";
// myOrderParams.symbol = "BTCUSDT";
// myOrderParams.side = ORDER_SIDE.BUY;
// ... and so on.

// If you are using Node.js or a module system, you might want to export it:
// module.exports = ExchangeParams; // For CommonJS
// export default ExchangeParams; // For ES Modules

// console.log("ExchangeParams template:", ExchangeParams); // For testing
