# Exchange Schema

A standardized schema for making requests to cryptocurrency exchange APIs.

## Overview

This package provides a consistent parameter structure for working with various cryptocurrency exchange APIs. It abstracts away the differences in parameter naming and structure across exchanges, allowing you to write more portable code.

## Installation

```bash
npm install exchange-schema
```

## Usage Examples

### Basic Order Example

```javascript
const { ExchangeParams } = require('exchange-schema');
const { ORDER_SIDE, ORDER_TYPE, TIME_IN_FORCE } = require('exchange-schema/constants');

// Create a new params object
const params = Object.assign({}, ExchangeParams);

// Set required parameters
params.api_key = process.env.EXCHANGE_API_KEY;
params.secret_key = process.env.EXCHANGE_SECRET_KEY;
params.timestamp = Date.now();

// Set order parameters
params.symbol = "BTCUSDT";
params.side = ORDER_SIDE.BUY;
params.type = ORDER_TYPE.LIMIT;
params.quantity = "0.001";
params.price = "50000";
params.time_in_force = TIME_IN_FORCE.GTC;

// Your exchange-specific code to execute the order
// ...
```

### Market Data Example

```javascript
const { ExchangeParams } = require('exchange-schema');

// Create a new params object
const params = Object.assign({}, ExchangeParams);

// Get recent trades for a symbol
params.symbol = "ETHUSDT";
params.limit = 100;  // Get last 100 trades

// Your exchange-specific code to fetch market data
// ...
```

### Withdrawal Example

```javascript
const { ExchangeParams } = require('exchange-schema');

// Create a new params object
const params = Object.assign({}, ExchangeParams);

// Set authentication parameters
params.api_key = process.env.EXCHANGE_API_KEY;
params.secret_key = process.env.EXCHANGE_SECRET_KEY;
params.timestamp = Date.now();

// Set withdrawal parameters
params.asset = "USDT";
params.network = "TRC20";  
params.wallet_destination = {
    address: "YourTronWalletAddress",
    address_tag: ""  // Not needed for USDT-TRC20
};
params.amount = "100";

// Your exchange-specific code to process the withdrawal
// ...
```

## Documentation

See the JSDoc annotations in the source code for detailed parameter descriptions and usage notes. JSDoc provides excellent code hints in most modern code editors without requiring TypeScript.

## Security Notes

- Never hardcode API keys or secrets in your code
- Always load sensitive credentials from environment variables or a secure credential store
- Consider using a .env file (included in .gitignore) for local development

## License

[MIT](LICENSE)
