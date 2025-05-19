# Exchange API Schemas (`exchange-schema`)

Welcome to the `exchange-schema` repository! This project aims to provide a collection of standardized and example data structures (schemas) for interacting with cryptocurrency exchange APIs. The goal is to simplify and clarify the process of sending requests and handling responses when working with various trading platforms.

## Purpose

Interacting with different cryptocurrency exchange APIs can be complex due to varying parameter names, data formats, and response structures. This repository offers:

* A **universal template** for common API request parameters.
* Example **response structures** from specific exchanges (currently Binance and Coinbase) to help developers understand what data to expect.
* A collection of common **API constants and enums** to improve code clarity.
* A **generic API error schema** to aid in normalizing error handling across different exchanges.
* A **backlog** of the design discussions and decisions that shaped these schemas.
* A **changelog** to track the project's evolution.

By providing these structured examples and documentation, we hope to make it easier for developers to build robust and maintainable applications that integrate with crypto exchanges.

## Files in This Repository

Here's an overview of the key files you'll find here:

* **[`README.md`](./README.md)** (this file)
    * Main documentation and guide for the repository.

* **[`CHANGELOG.md`](./CHANGELOG.md)**
    * Documents all notable changes to this project over time.

* **[`backlog.md`](./backlog.md)**
    * Contains a summary of the discussions, insights, and decisions made during the initial design and development of the schemas in this repository.

* **[`exchangeParams.js`](./exchangeParams.js)**
    * This JavaScript file defines `ExchangeParams`, a comprehensive template object for structuring API request parameters.

* **[`apiConstants.js`](./apiConstants.js)**
    * This JavaScript file defines common constants and enumerations (like `ORDER_SIDE`, `ORDER_TYPE`, `TIME_IN_FORCE`, `KLINE_INTERVALS`).

* **[`genericApiError.js`](./genericApiError.js)**
    * This file defines a `GenericApiError` structure and `NORMALIZED_ERROR_CATEGORIES` for normalizing errors.

* **[`binanceResponseExamples.js`](./binanceResponseExamples.js)**
    * Provides example API response structures for the **Binance** exchange.

* **[`coinbaseResponseExamples.js`](./coinbaseResponseExamples.js)**
    * Provides example API response structures for the **Coinbase Advanced Trade API**.

## How to Use These Files

1.  **Understanding API Structures:**
    * Browse `exchangeParams.js` for API request parameters.
    * Refer to `binanceResponseExamples.js`, `coinbaseResponseExamples.js`, etc., for exchange-specific response examples.
    * Utilize `apiConstants.js` for standardized parameter values.
    * Review `genericApiError.js` for error normalization.
    * Check `CHANGELOG.md` for recent updates or version history.

2.  **As Templates for Your Code:**
    * Use `ExchangeParams` as a starting point for API request functions.
    * The response examples can guide your data parsing.
    * Import constants from `apiConstants.js`.
    * Adapt `GenericApiError` for your error handling layer.

3.  **Contribution & Adaptation:**
    * Feel free to adapt these structures.
    * Use these as models if working with other exchanges.

## Disclaimer

The schemas and examples provided here are based on common practices and specific API documentation at the time of their creation. Cryptocurrency exchange APIs can and do change. **Always refer to the official API documentation of the specific exchange you are working with for the most up-to-date and accurate information.**

---

*This repository was initiated based on collaborative design discussions. Current as of May 2025. Refer to `CHANGELOG.md` for version history.*
