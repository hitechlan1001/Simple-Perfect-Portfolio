const filterKey = [
  { title: "show all", key: "*" },
  { title: "Trading Bot", key: "trading-bot" },
  { title: "DeFi", key: "defi" },
  { title: "DApp", key: "dapp" },
  { title: "DEX", key: "dex" },
  { title: "NFT", key: "nft" },
  { title: "P2E", key: "p2e" },
];

const projectData = [
  {
    type: ["trading-bot"],
    role: "Blockchain Developer",
    skills: ["TypeScript", "Solana", "Jito", "MEV", "RPC", "gRPC", "DeFi"],
    imgUrl: "imgs/works/work.png",
    summary:
      "Solana Arbitrage Bot on pump.fun, Meteora, Raydium and Orca using Jito bundling, RPC and gRPC. High-performance arbitrage system with low-latency execution for DeFi protocols.",
    siteUrl: "https://github.com/WSOL12/Solana-Arbitrage-Bot",
    githubUrl: "https://github.com/WSOL12/Solana-Arbitrage-Bot",
  },
  {
    type: ["trading-bot"],
    role: "Blockchain Infrastructure Developer",
    skills: ["Rust", "Solana", "Jito", "MEV", "Block Engine", "gRPC"],
    imgUrl: "imgs/works/work.png",
    summary:
      "A high-performance Solana transaction relayer written in Rust that connects your RPC to Jito's block engine, enabling low-latency, reliable routing of transactions for MEV and high-frequency trading.",
    siteUrl: "https://github.com/WSOL12/Solana-Relayer",
    githubUrl: "https://github.com/WSOL12/Solana-Relayer",
  },
  {
    type: ["trading-bot"],
    role: "Blockchain Developer",
    skills: ["Rust", "Solana", "Jito", "MEV", "Copy Trading"],
    imgUrl: "imgs/works/work.png",
    summary:
      "A high-speed Rust-based Solana PumpFun copy trading bot that tracks target wallets and automatically mirrors their trades using Jito MEV for fast, priority execution.",
    siteUrl: "https://github.com/WSOL12/Pumpfun-Copy-Trading-Bot",
    githubUrl: "https://github.com/WSOL12/Pumpfun-Copy-Trading-Bot",
  },
  {
    type: ["trading-bot"],
    role: "Blockchain Developer",
    skills: ["TypeScript", "Solana", "pump.fun", "Sniper Bot"],
    imgUrl: "imgs/works/work.png",
    summary:
      "A fast and automated Solana PumpFun sniper bot that detects new token launches, monitors market conditions, and executes buy/sell trades instantly based on your custom settings.",
    siteUrl: "https://github.com/WSOL12/Pumpfun-Sniper-Bot",
    githubUrl: "https://github.com/WSOL12/Pumpfun-Sniper-Bot",
  },
  {
    type: ["trading-bot"],
    role: "Blockchain Developer",
    skills: ["TypeScript", "Solana", "Raydium", "Sniper Bot", "DEX"],
    imgUrl: "imgs/works/work.png",
    summary:
      "A fast and automated Solana Raydium sniper bot that detects new token launches and executes ultra-quick buy/sell trades with real-time alerts and customizable settings.",
    siteUrl: "https://github.com/WSOL12/Solana-Raydium-Sniper-Bot",
    githubUrl: "https://github.com/WSOL12/Solana-Raydium-Sniper-Bot",
  },
  {
    type: ["trading-bot"],
    role: "Blockchain Developer",
    skills: ["TypeScript", "Solana", "Raydium", "Meteora", "Volume Bot", "DeFi"],
    imgUrl: "imgs/works/work.png",
    summary:
      "A Solana Raydium volume-generation bot that automates multi-wallet buy/sell activity to create realistic trading volume, positive price impact, and dynamic market behavior across Raydium and Meteora.",
    siteUrl: "https://github.com/WSOL12/Solana-Raydium-Volume-Bot",
    githubUrl: "https://github.com/WSOL12/Solana-Raydium-Volume-Bot",
  },
];

export { filterKey, projectData };
