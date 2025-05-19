# Exchange API Schemas (`exchange-schema`)

Welcome to the `exchange-schema` repository! This project aims to provide a collection of standardized and example data structures (schemas) for interacting with cryptocurrency exchange APIs. The goal is to simplify and clarify the process of sending requests and handling responses when working with various trading platforms.

## Purpose

Interacting with different cryptocurrency exchange APIs can be complex due to varying parameter names, data formats, and response structures. This repository offers:

* A **universal template** for common API request parameters.
* Example **response structures** from specific exchanges (currently Binance and Coinbase) to help developers understand what data to expect.
* A collection of common **API constants and enums** to improve code clarity.
* A **generic API error schema** to aid in normalizing error handling across different exchanges.
* A **backlog** of the design discussions and decisions that shaped these schemas.

By providing these structured examples, we hope to make it easier for developers to build robust and maintainable applications that integrate with crypto exchanges.

## Files in This Repository

Here's an overview of the key files you'll find here:

* **[`backlog.md`](./backlog.md)**
    * This file contains a summary of the discussions, insights, and decisions made during the initial design and development of the schemas in this repository. It provides context on why certain structures and conventions were chosen.

* **[`exchangeParams.js`](./exchangeParams.js)**
    * This JavaScript file defines `ExchangeParams`, a comprehensive template object for structuring API request parameters. It includes common fields for authentication, order placement, order management, pagination, market data queries, and wallet operations. It's designed to be universal, with a dedicated section for exchange-specific parameters.

* **[`apiConstants.js`](./apiConstants.js)**
    * This JavaScript file defines common constants and enumerations (like `ORDER_SIDE`, `ORDER_TYPE`, `TIME_IN_FORCE`, `KLINE_INTERVALS`) that are frequently used when specifying parameters for API requests. Using these can improve code clarity and consistency.

* **[`genericApiError.js`](./genericApiError.js)**
    * This file defines a `GenericApiError` structure and a set of `NORMALIZED_ERROR_CATEGORIES`. It provides a template for normalizing errors received from different exchanges into a common format for easier application-level handling.

* **[`binanceResponseExamples.js`](./binanceResponseExamples.js)**
    * This file provides example JavaScript objects representing common API response structures specifically from the **Binance** exchange. It covers error responses, order confirmations, kline data, account information, and ticker data.

* **[`coinbaseResponseExamples.js`](./coinbaseResponseExamples.js)**
    * This file provides example JavaScript objects representing common API response structures specifically from the **Coinbase Advanced Trade API**. It includes examples for errors, account listings, order creation and listing, and product candles.

## How to Use These Files

1.  **Understanding API Structures:**
    * Browse `exchangeParams.js` to get a comprehensive idea of potential parameters you might need for various API calls across different exchanges.
    * Refer to `binanceResponseExamples.js`, `coinbaseResponseExamples.js` (and future exchange-specific files) to see what kind of data to expect in API responses from those platforms.
    * Utilize `apiConstants.js` for standardized values for common parameters.
    * Review `genericApiError.js` for a model on how to normalize diverse exchange error messages into a consistent structure within your application.

2.  **As Templates for Your Code:**
    * You can use `ExchangeParams` as a starting point or template when building functions or classes in your application that make API requests.
    * The response examples can guide you in creating interfaces or classes to handle and parse data from APIs.
    * Import constants from `apiConstants.js` for accuracy and maintainability.
    * Adapt the `GenericApiError` schema when building your error handling layer to create a unified approach to API errors.

3.  **Contribution & Adaptation:**
    * Feel free to adapt these structures for your own projects.
    * If you're working with an exchange not yet covered, you can use these as a model for defining your own response schemas.

## Disclaimer

The schemas and examples provided here are based on common practices and specific API documentation at the time of their creation. Cryptocurrency exchange APIs can and do change. **Always refer to the official API documentation of the specific exchange you are working with for the most up-to-date and accurate information.**

---

*This repository was initiated based on collaborative design discussions. Current as of May 2025.*
