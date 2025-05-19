/**
 * Example Coinbase Advanced Trade API Response Structures
 *
 * This file contains example JavaScript objects representing common data structures
 * returned by the Coinbase Advanced Trade API. These are for illustrative purposes,
 * and the actual fields and their types should always be verified against the
 * official Coinbase Developer Platform (CDP) documentation.
 *
 * Naming Convention:
 * - Our JavaScript object keys are in snake_case, which generally aligns with Coinbase's API.
 *
 * Official Coinbase Advanced Trade API Documentation:
 * - https://docs.cdp.coinbase.com/advanced-trade/
 */

// === Standard Coinbase Error Response Structure ===
// (Note: Error structures can vary slightly based on the endpoint and type of error)
const CoinbaseErrorResponse = {
  error: "",                // string: A general error category (e.g., "AUTHENTICATION_ERROR", "INVALID_REQUEST", "RATE_LIMIT_EXCEEDED")
  message: "",              // string: A human-readable message describing the error.
  error_details: "",        // string: (Optional) Further details about the error. (e.g., "missing_param_product_id")
  // Sometimes errors might be nested, e.g., within a "response.data.error" path
  // Or, for specific operations like create order, there might be "success: false" and "failure_reason".
};

// === Example: Coinbase List Accounts (Wallets) Response (from GET /api/v3/brokerage/accounts) ===
const CoinbaseListAccountsResponse = {
  accounts: [
    {
      uuid: "",             // string: The unique universally unique identifier (UUID) for this account.
      name: "",             // string: User-perceived name of the account (e.g., "BTC Wallet").
      currency: "",         // string: The currency of the account (e.g., "BTC", "USD").
      available_balance: {
        value: "0.0",       // string: The amount of currency available to trade.
        currency: ""        // string: The currency unit (e.g., "BTC").
      },
      default: false,       // boolean: Whether this is the default account for this currency.
      active: true,         // boolean: Whether this account is active and available for use.
      created_at: "",       // string: Timestamp of when the account was created (RFC3339 format, e.g., "2021-05-31T09:59:59Z").
      updated_at: "",       // string: Timestamp of when the account was last updated.
      deleted_at: null,     // string | null: Timestamp of when the account was deleted (if applicable).
      type: "ACCOUNT_TYPE_CRYPTO", // string: Type of account (e.g., "ACCOUNT_TYPE_CRYPTO", "ACCOUNT_TYPE_FIAT").
      ready: true,          // boolean: Ready status.
      hold: {
        value: "0.0",       // string: The amount of currency on hold.
        currency: ""        // string: The currency unit.
      }
    }
    // ... more account objects
  ],
  has_next: false,          // boolean: Whether there is a next page of results.
  cursor: "",               // string: A cursor for pagination (use this in subsequent requests to get the next page).
  size: 0                   // number: The number of accounts returned in this response.
};

// === Example: Coinbase Create Order Response (from POST /api/v3/brokerage/orders) ===
// Note: Successful order placement might also include "success: true" and potentially a confusing "failure_reason": "UNKNOWN_FAILURE_REASON" which can be ignored if success is true.
const CoinbaseCreateOrderResponse = {
  success: true,            // boolean: Indicates if the order placement was accepted.
  failure_reason: "UNKNOWN_FAILURE_REASON", // string: Reason for failure, if any. (Can be "UNKNOWN_FAILURE_REASON" on success).
  order_id: "",             // string: The unique ID for the successfully placed order.
  // The following two fields are sometimes part of a nested object like "success_response" or "error_response"
  success_response: {       // (Optional) Present on successful order creation in some contexts
    order_id: "",           // string
    product_id: "",         // string
    side: "",               // string "BUY" or "SELL"
    client_order_id: ""     // string
  },
  error_response: {         // (Optional) Present on failed order creation
    error: "",              // string
    message: "",            // string
    error_details: "",      // string
    preview_id: null        // string | null
  },
  order_configuration: {    // object: The configuration of the order that was placed.
    // This will contain one of the order types, e.g.:
    // market_market_ioc: { quote_size: "10.00" } // for a market order with quote size
    // limit_limit_gtc: { base_size: "0.001", limit_price: "20000.00", post_only: false }
    // stop_limit_stop_limit_gtc: { base_size: "0.001", limit_price: "20000.00", stop_price: "19500.00", stop_direction: "STOP_DIRECTION_STOP_DOWN" }
  }
};

// === Example: Coinbase List Orders Response (from GET /api/v3/brokerage/orders/historical/batch) ===
const CoinbaseListOrdersResponse = {
  orders: [
    {
      order_id: "",         // string: The unique ID for the order.
      product_id: "",       // string: The product this order was for (e.g., "BTC-USD").
      user_id: "",          // string: The user ID.
      order_configuration: { // object: Configuration of the order (structure depends on order type, similar to create order response)
        // e.g., limit_limit_gtc: { base_size: "0.001", limit_price: "20000.00", post_only: false }
      },
      side: "",             // string: "BUY" or "SELL".
      client_order_id: "",  // string: Client-provided order ID.
      status: "",           // string: Order status (e.g., "OPEN", "FILLED", "CANCELLED", "EXPIRED", "FAILED").
      time_in_force: "",    // string: (e.g., "GOOD_TIL_CANCELLED", "IMMEDIATE_OR_CANCEL", "FILL_OR_KILL", "GOOD_TIL_TIME")
      created_time: "",     // string: Timestamp of when the order was created (RFC3339).
      completion_percentage: "0.0", // string: Percentage of the order that has been completed.
      filled_size: "0.0",   // string: Quantity of the base currency that has been filled.
      average_filled_price: "0.0", // string: Average price at which the order was filled.
      fee: "0.0",           // string: Total fees paid for this order.
      number_of_fills: "0", // string: Number of fills for this order.
      filled_value: "0.0",  // string: Total value of the order that was filled (in quote currency).
      pending_cancel: false,// boolean: Whether a cancel request for this order is pending.
      size_in_quote: false, // boolean: Whether the order size was specified in quote currency.
      total_fees: "0.0",    // string: Total fees for this order.
      size_inclusive_of_fees: false, // boolean: Whether the size includes fees.
      total_value_after_fees: "0.0", // string: Total value after fees.
      trigger_status: "",   // string: (e.g., "INVALID_ORDER_TYPE", "STOP_PENDING")
      order_type: "",       // string: (e.g., "LIMIT", "MARKET", "STOP_LIMIT")
      reject_reason: "",    // string: Reason the order was rejected, if applicable.
      settled: false,       // boolean: Whether the order is settled.
      product_type: "SPOT", // string: (e.g., "SPOT")
      reject_message: "",   // string
      cancel_message: ""    // string
      // ... and potentially more fields depending on the order type and status
    }
    // ... more order objects
  ],
  has_next: false,
  cursor: "",
  // sequence_number: 0 // Older versions might have sequence numbers for pagination
};

// === Example: Coinbase Product Candles Response (from GET /api/v3/brokerage/market/products/{product_id}/candles) ===
const CoinbaseProductCandlesResponse = {
  candles: [
    {
      start: "0",           // string: UNIX timestamp for the start of the candle epoch.
      low: "0.0",           // string: Lowest price during the candle interval.
      high: "0.0",          // string: Highest price during the candle interval.
      open: "0.0",          // string: Opening price at the start of the interval.
      close: "0.0",         // string: Closing price at the end of the interval.
      volume: "0.0"         // string: Trading volume during the interval (in base currency).
    }
    // ... more candle objects
  ]
};

// === Example: Coinbase Get Product Ticker/Book (from GET /api/v3/brokerage/market/products/{product_id}) ===
// This endpoint can return a lot of info including best bid/ask, price, volume etc.
// Let's take a simplified view focusing on ticker-like data.
const CoinbaseProductInfoResponse = { // This is a made-up simplified name for this example
  product_id: "",           // string
  price: "",                // string: Last trade price
  price_percentage_change_24h: "", // string
  volume_24h: "",           // string: Volume in base currency
  volume_percentage_change_24h: "", // string
  base_increment: "",       // string
  quote_increment: "",      // string
  quote_min_size: "",       // string
  quote_max_size: "",       // string
  base_min_size: "",        // string
  base_max_size: "",        // string
  base_name: "",            // string
  quote_name: "",           // string
  watched: false,           // boolean
  is_disabled: false,       // boolean
  new: false,               // boolean
  status: "",               // string
  cancel_only: false,       // boolean
  limit_only: false,        // boolean
  post_only: false,         // boolean
  trading_disabled: false,  // boolean
  auction_mode: false,      // boolean
  product_type: "SPOT",     // string
  quote_currency_id: "",    // string
  base_currency_id: "",     // string
  // ... and many more fields including mid_market_price, alias_to etc.
  // For order book like data, it might be under 'best_bid', 'best_ask' or separate endpoint.
  // The actual product ticker (GET /products/{product_id}/ticker from older API) might be simpler,
  // but Advanced Trade API often bundles information.
};


// If using Node.js or a module system, you might want to export them:
// module.exports = {
//   CoinbaseErrorResponse,
//   CoinbaseListAccountsResponse,
//   CoinbaseCreateOrderResponse,
//   CoinbaseListOrdersResponse,
//   CoinbaseProductCandlesResponse,
//   CoinbaseProductInfoResponse
// };
// Or for ES Modules:
// export { CoinbaseErrorResponse, ... };

// console.log("Coinbase Response Examples Loaded");
