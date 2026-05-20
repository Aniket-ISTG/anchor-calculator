# Anchor Calculator

A simple calculator program built on the Solana blockchain using the Anchor framework.

This project demonstrates:
- Solana program development
- Anchor account handling
- State management on-chain
- Instruction creation
- TypeScript testing with Anchor

---

# Features

The calculator supports:

- Initialize account with a value
- Add a number
- Subtract a number
- Double the value
- Half the value

All values are stored on-chain inside a Solana account.

---

# Tech Stack

- Rust
- Solana
- Anchor Framework
- TypeScript
- Mocha + Chai

---

# Project Structure

```bash
anchor-calculator/
│
├── programs/
│   └── anchor-calculator/
│       └── src/
│           └── lib.rs
│
├── tests/
│   └── anchor-calculator.ts
│
├── Anchor.toml
├── Cargo.toml
└── package.json
