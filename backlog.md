# Backlog & Discussion Summary for exchange-schema Repository

This document captures the key discussions, decisions, and insights leading to the creation of the `exchange-schema` repository. Its purpose is to provide context for the JavaScript objects designed for interacting with cryptocurrency exchange APIs.

## Initial Goal

* To design a universal and convenient way to handle API requests and responses for cryptocurrency exchanges, focusing initially on order placement and management.
* To create well-structured JavaScript objects for parameters and response data.

## Key Discussion Points & Insights

### 1. Universal Request Parameters (`ExchangeParams`)

* **Concept:** We decided to create a comprehensive JavaScript object named `ExchangeParams` to act as a universal configuration or template for API request parameters.
* **Flexibility:** The design aimed for flexibility to accommodate parameters common across various exchanges, while also allowing for exchange-specific fields.
* **Fields Discussed (examples):**
  * API credentials (`api_key`, `secret_key`, `passphrase`, `user_id`)
  * Order details (`symbol`, `side`, `type`, `quantity`, `price`, `time_in_force`, `stop_price`, `client_order_id`, `leverage`)
  * Pagination (`page_index`, `page_size`, `cursor`)
  * General params (`timestamp`, `recv_window`, `signature`)
  * Exchange-specific sections.
* **Naming Convention:** We settled on `snake_case` for field names within this request object for consistency, with comments to map to typical API `camelCase` or other conventions if needed.
* **Enums/Constants:** Discussed using enums or constant objects for predefined values like `ORDER_SIDE`, `ORDER_TYPE`, `TIME_IN_FORCE` to improve code clarity and reduce errors.

### 2. API Response Structures

* **Challenge:** Recognized that a single universal object for *all* API responses is impractical due to variations by endpoint, success/error status, and specific data returned.
* **Approach:** Decided to define structures for:
  * Standard Error Responses.
  * Common Data Objects (e.g., Order, Trade, Balance, Kline, Ticker).
* **Focus on Binance (as an example):** We explored common response structures for the Binance API.
  * **Error Response:** Typically `{"code": ..., "msg": "..."}`.
  * **Order Response:** Fields like `symbol`, `orderId`, `clientOrderId`, `transactTime`, `price`, `origQty`, `executedQty`, `status`, `type`, `side`, `fills`.
  * **Kline/Candlestick Data:** Array of arrays format `[Open time, Open, High, Low, Close, Volume, ...]`.
  * **Account Balance/Info:** Contains `balances` array (with `asset`, `free`, `locked`) and commission info.
  * **Ticker Data:** Fields like `symbol`, `priceChange`, `lastPrice`, `volume`.
* **Naming Convention for Responses:** Maintained `snake_case` in our example JavaScript objects for consistency with the `ExchangeParams` object, noting that actual API responses (like Binance's) often use `camelCase`.

### 3. Repository Setup

* **Goal:** To store these JavaScript object definitions (for requests and response examples) in a GitHub repository.
* **Name Selection:** After discussing several options focusing on "universal," "schema," and "trading/exchange," we decided on the repository name: `exchange-schema`.
  * Link to repository: [https://github.com/dmitriz/exchange-schema](https://github.com/dmitriz/exchange-schema)
* **File Structure Discussed:**
  * `backlog.md`: This file, to capture discussion context.
  * `exchangeParams.js`: To contain the universal request parameters object.
  * `binanceResponseExamples.js`: To contain the example response structures for Binance.
  * `README.md`: For overall project documentation, to be created later.
  * `CHANGELOG.md`: Potentially, for tracking changes.

### 4. Overall Architecture Thinking

* **Request/Response Focus:** The core idea is to streamline the request and response handling aspects of API interaction.
* **Universality vs. Specificity:** Striving for a universal base for requests, while acknowledging that response handling will often need to be adapted to the specific exchange's data structures. The Binance examples serve as a template for how one might define structures for other exchanges.
* **Developer Convenience:** Aiming for clear, descriptive field names and organized structures to make it easier for developers to work with exchange APIs.

## Workflow for Adding Files

## Initial Repository Population

* The initial files for this repository were created based on the discussions summarized above.
* Key schema definitions were established first to provide a foundation for the project.
* Each file was created with careful consideration of the object structures and documentation needs discussed in the planning phase.

## Next Steps (as per discussion)

1. Create the `backlog.md` file with this summary.
2. Create the `exchangeParams.js` file with the defined object.
3. Create the `binanceResponseExamples.js` file.
4. Create the main `README.md` file for the repository.
