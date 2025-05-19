/**
 * Example Binance API Response Structures
 *
 * This file contains example JavaScript objects representing common data structures
 * returned by the Binance API. These are for illustrative purposes and the actual
 * fields and their types should always be verified against the official Binance API documentation.
 *
 * Naming Convention:
 * - Our JavaScript object keys are in snake_case for consistency within this project's examples.
 * - Comments often indicate the actual camelCase field names typically returned by the Binance API.
 *
 * Official Binance API Documentation:
 * - Spot: https://github.com/binance/binance-spot-api-docs
 * - Futures: https://binance-docs.github.io/apidocs/futures/en/
 */

// === Standard Binance Error Response Structure ===
const BinanceErrorResponse = {
  code: 0,          // number: Binance-specific error code (non-zero for errors). Example: -1121. (Binance: code)
  msg: ""           // string: Human-readable error message. Example: "Invalid symbol." (Binance: msg)
};

// === Example: Binance Order Response Structure (FULL response type from POST /api/v3/order) ===
const BinanceOrderResponse_FULL = {
  symbol: "",               // string: The symbol the order was placed for (e.g., "BTCUSDT"). (Binance: symbol)
  order_id: 0,              // number: The unique order ID assigned by Binance. (Binance: orderId)
  order_list_id: -1,        // number: Order list ID (for OCO orders, otherwise -1). (Binance: orderListId)
  client_order_id: "",      // string: The clientOrderId you sent. (Binance: clientOrderId)
  transact_time: 0,         // number: Timestamp (milliseconds) of the transaction. (Binance: transactTime)
  price: "0.0",             // string: Order price. (Binance: price)
  orig_qty: "0.0",          // string: Original order quantity. (Binance: origQty)
  executed_qty: "0.0",      // string: Quantity that has been filled. (Binance: executedQty)
  cummulative_quote_qty: "0.0", // string: Total quote asset value filled. (Binance: cummulativeQuoteQty)
  status: "",               // string: Order status (e.g., "NEW", "FILLED", "CANCELED"). (Binance: status)
  time_in_force: "",        // string: Time in force (e.g., "GTC", "IOC"). (Binance: timeInForce)
  type: "",                 // string: Order type (e.g., "LIMIT", "MARKET"). (Binance: type)
  side: "",                 // string: Order side ("BUY" or "SELL"). (Binance: side)
  stop_price: "0.0",        // string: Stop price (if applicable for STOP_LOSS, TAKE_PROFIT orders). (Binance: stopPrice)
  iceberg_qty: "0.0",       // string: Iceberg quantity (if applicable). (Binance: icebergQty)
  time: 0,                  // number: Timestamp order was created. (Binance: time, for some order query endpoints might be order creation time)
  update_time: 0,           // number: Timestamp order was last updated. (Binance: updateTime, for some order query endpoints)
  is_working: true,         // boolean: If the order is currently on the order book. (Binance: isWorking, for some order query endpoints)
  working_time: 0,          // number: Timestamp when the order was put on the book (Binance: workingTime, for some newer order responses)
  orig_quote_order_qty: "0.0", // string: Original quote order quantity (for MARKET orders). (Binance: origQuoteOrderQty)
  self_trade_prevention_mode: "NONE", // string: Self-trade prevention mode. (Binance: selfTradePreventionMode)
  fills: [                  // array: Array of trade fill objects (present if the order has fills). (Binance: fills)
    // {
    //   price: "60000.00",         // string: Price of the fill. (Binance: price)
    //   qty: "0.001",              // string: Quantity of the fill. (Binance: qty)
    //   commission: "0.0000001",   // string: Commission paid for this fill. (Binance: commission)
    //   commission_asset: "BNB",   // string: Asset the commission was paid in. (Binance: commissionAsset)
    //   trade_id: 12345             // number: Trade ID. (Binance: tradeId)
    //   // ... other fill-specific fields like 'allocId' for some account types
    // }
  ]
  // Note: Additional fields might exist for margin/futures orders (e.g., `positionSide`, `reduceOnly`, `cumQuote` (for futures)).
};

// === Example: Binance Kline/Candlestick Data Structure (from GET /api/v3/klines) ===
// The API returns an array of these arrays. Each inner array represents one kline.
const BinanceKlineDataPoint = [
  0,                        // number: 0. Kline open time (milliseconds)
  "0.0",                    // string: 1. Open price
  "0.0",                    // string: 2. High price
  "0.0",                    // string: 3. Low price
  "0.0",                    // string: 4. Close price
  "0.0",                    // string: 5. Volume (in base asset)
  0,                        // number: 6. Kline close time (milliseconds)
  "0.0",                    // string: 7. Quote asset volume
  0,                        // number: 8. Number of trades
  "0.0",                    // string: 9. Taker buy base asset volume
  "0.0",                    // string:10. Taker buy quote asset volume
  "0.0"                     // string:11. Ignore field (Binance: "Unused field, ignore.")
];
// Example Usage: const klines = [ BinanceKlineDataPoint, BinanceKlineDataPoint, ... ];

// === Example: Binance Account Information Structure (from GET /api/v3/account) ===
const BinanceAccountInfo = {
  maker_commission: 0,      // number: Your maker commission rate (e.g., 10 for 0.10%). (Binance: makerCommission)
  taker_commission: 0,      // number: Your taker commission rate. (Binance: takerCommission)
  buyer_commission: 0,      // number: Your buyer commission rate. (Binance: buyerCommission)
  seller_commission: 0,     // number: Your seller commission rate. (Binance: sellerCommission)
  commission_rates: {       // object: Detailed commission rates (newer field). (Binance: commissionRates)
    maker: "0.00100000",    // string: Maker commission rate.
    taker: "0.00100000",    // string: Taker commission rate.
    buyer: "0.00100000",    // string: Buyer commission rate.
    seller: "0.00100000"    // string: Seller commission rate.
  },
  can_trade: true,          // boolean: If account is allowed to trade. (Binance: canTrade)
  can_withdraw: true,       // boolean: If account is allowed to withdraw. (Binance: canWithdraw)
  can_deposit: true,        // boolean: If account is allowed to deposit. (Binance: canDeposit)
  brokered: false,          // boolean: If it's a sub-account under a broker. (Binance: brokered)
  require_self_trade_prevention: false, // boolean: If self-trade prevention is required. (Binance: requireSelfTradePrevention)
  prevent_sor: false,       // boolean: If account is prevented from using SOR (Spot Order Routing). (Binance: preventSor)
  update_time: 0,           // number: Last account update time (milliseconds). (Binance: updateTime)
  account_type: "SPOT",     // string: Account type (e.g., "SPOT", "MARGIN", "FUTURES"). (Binance: accountType)
  balances: [               // array: Array of asset balances. (Binance: balances)
    {
      asset: "BTC",         // string: Asset symbol. (Binance: asset)
      free: "1.0",          // string: Available balance. (Binance: free)
      locked: "0.5"         // string: Locked balance (e.g., in open orders). (Binance: locked)
    },
    // ... more assets
  ],
  permissions: [],          // array: Account permissions (e.g., ["SPOT", "MARGIN", "LEVERAGED"]). (Binance: permissions)
  uid: 0                    // number: User ID. (Binance: uid)
};

// === Example: Binance Ticker Data (24hr) Structure (from GET /api/v3/ticker/24hr for a single symbol) ===
const BinanceTickerData_24hr = {
    symbol: "",             // string: Symbol name (e.g., "BTCUSDT"). (Binance: symbol)
    price_change: "0.0",    // string: Price change in the last 24 hours. (Binance: priceChange)
    price_change_percent: "0.0", // string: Price change percentage. (Binance: priceChangePercent)
    weighted_avg_price: "0.0", // string: Weighted average price. (Binance: weightedAvgPrice)
    prev_close_price: "0.0", // string: Previous day's close price. (Binance: prevClosePrice)
    last_price: "0.0",      // string: Current last traded price. (Binance: lastPrice)
    last_qty: "0.0",        // string: Quantity of the last trade. (Binance: lastQty)
    bid_price: "0.0",       // string: Current best bid price. (Binance: bidPrice)
    bid_qty: "0.0",         // string: Current best bid quantity. (Binance: bidQty)
    ask_price: "0.0",       // string: Current best ask price. (Binance: askPrice)
    ask_qty: "0.0",         // string: Current best ask quantity. (Binance: askQty)
    open_price: "0.0",      // string: Price 24 hours ago. (Binance: openPrice)
    high_price: "0.0",      // string: Highest price in the last 24 hours. (Binance: highPrice)
    low_price: "0.0",       // string: Lowest price in the last 24 hours. (Binance: lowPrice)
    volume: "0.0",          // string: Total traded base asset volume in the last 24 hours. (Binance: volume)
    quote_volume: "0.0",    // string: Total traded quote asset volume in the last 24 hours. (Binance: quoteVolume)
    open_time: 0,           // number: Statistics open time (milliseconds). (Binance: openTime)
    close_time: 0,          // number: Statistics close time (milliseconds). (Binance: closeTime)
    first_id: 0,            // number: First trade ID in the period. (Binance: firstId)
    last_id: 0,             // number: Last trade ID in the period. (Binance: lastId)
    count: 0                // number: Total number of trades in the period. (Binance: count)
};
// Note: If querying /api/v3/ticker/24hr without a symbol, it returns an array of these objects.

// If using Node.js or a module system, you might want to export them:
// module.exports = {
//   BinanceErrorResponse,
//   BinanceOrderResponse_FULL,
//   BinanceKlineDataPoint,
//   BinanceAccountInfo,
//   BinanceTickerData_24hr
// };
// Or for ES Modules:
// export { BinanceErrorResponse, BinanceOrderResponse_FULL, ... };

// console.log("Binance Response Examples Loaded"); // For testing
