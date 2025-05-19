# Changelog

All notable changes to this project (`exchange-schema`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project aims to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (e.g., v0.1.0, v0.2.0, v1.0.0).

## [Unreleased]
_You can keep a section here for changes that are made but not yet part of a "release" or tagged version._

## [0.1.0] - 2025-05-19

### Added
- **Initial Project Scaffolding and Documentation:**
    - `README.md`: Provides an overview of the project, its purpose, and guides to the repository files.
    - `backlog.md`: Contains a summary of the design discussions, insights, and decisions made during the initial development of these schemas.
- **Core Schema Definitions:**
    - `exchangeParams.js`: Defines a universal template (`ExchangeParams`) for structuring API request parameters across different exchanges.
    - `apiConstants.js`: Provides common constants and enumerations for API parameters (e.g., `ORDER_SIDE`, `ORDER_TYPE`, `KLINE_INTERVALS`).
    - `genericApiError.js`: Defines a `GenericApiError` structure and `NORMALIZED_ERROR_CATEGORIES` for standardizing error handling.
- **Exchange-Specific Response Examples:**
    - `binanceResponseExamples.js`: Includes example API response structures for common Binance endpoints.
    - `coinbaseResponseExamples.js`: Includes example API response structures for common Coinbase Advanced Trade API endpoints.
    - 
