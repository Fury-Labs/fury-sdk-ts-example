# 🌟 Injective SDK-TS Example

_Decentralized Derivatives Trading. Any Market. Anytime. Anywhere._

An example repository based on TypeScript on interacting with our chain using the `@injectivelabs/sdk-ts` package.

---

## 📚 Getting Started

1. Clone the repository

```bash
$ git clone git@github.com:InjectiveLabs/injective-sdk-ts-example.git
$ cd injective-sdk-ts-example
$ yarn
```

2. Duplicate the .env.example to .env and fill the values

```bash
## ChainId should be 1 for mainnet, 42 for testnet
CHAIN_ID=42

### Used to fetch predefined endpoints for our sentry nodes, can be
### public (mainnet) or testnet (testnet)
NETWORK=testnet

### Account's private key used for signing
PRIVATE_KEY=
```

3. Execute an example (optional)
   
```bash
yarn ts-node pathToExample

## Example: yarn ts-node ./src/core/MsgBid.ts
```

## 📖 Documentation

---

## ⛑ Support

Reach out to us at one of the following places!

- Website at <a href="https://injective.com" target="_blank">`injective.com`</a>
- Twitter at <a href="https://twitter.com/InjectiveLabs" target="_blank">`@InjectiveLabs`</a>

---

## 🔓 License