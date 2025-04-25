import { createSlice } from "@reduxjs/toolkit";
import bitcoin from "../images/bitcoin.png";
import BNB from "../images/BNB.png";
import ethereum from "../images/ethereum.png";
import solana from "../images/solana.png";
import thether from "../images/thether.png";
import XRP from "../images/XRP.png";

import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";
import graph3 from "../images/graph3.png";
import graph4 from "../images/graph4.png";
import graph5 from "../images/graph5.png";
import graph6 from "../images/graph6.png";

const initialState = {
  tracker: [
    {
      id: 1,
      name: "Bitcoin",
      image: bitcoin,
      symbol: "BTC",
      price: "$93,759.48",
      change_1h: "▲0.43%",
      change_24h: "▲0.93%",
      change_7d: "▲11.11%",
      market_cap: "$1,861,618,902,186",
      volume_24h: "$43,874,950,947",
      volume_detail: "467.81K BTC",
      circulating_supply: "19.85M BTC",
      graph: graph1,
    },
    {
      id: 2,
      name: "Ethereum",
      image: ethereum,
      symbol: "ETH",
      price: "$1,802.46",
      change_1h: "▲0.60%",
      change_24h: "▲3.21%",
      change_7d: "▲13.68%",
      market_cap: "$217,581,279,327",
      volume_24h: "$23,547,469,307",
      volume_detail: "13.05M ETH",
      circulating_supply: "120.71M ETH",
      graph: graph2,
    },
    {
      id: 3,
      name: "Tether",
      image: thether,
      symbol: "USDT",
      price: "$1.00",
      change_1h: "▼0.00%",
      change_24h: "▼0.00%",
      change_7d: "▲0.04%",
      market_cap: "$145,320,022,085",
      volume_24h: "$92,288,882,007",
      volume_detail: "92.25B USDT",
      circulating_supply: "145.27B USDT",
      graph: graph3,
    },
    {
      id: 4,
      name: "XRP",
      image: XRP,
      symbol: "XRP",
      price: "$2.22",
      change_1h: "▲0.46%",
      change_24h: "▲0.54%",
      change_7d: "▲6.18%",
      market_cap: "$130,073,814,966",
      volume_24h: "$5,131,481,491",
      volume_detail: "2.30B XRP",
      circulating_supply: "58.39B XRP",
      graph: graph4,
    },
    {
      id: 5,
      name: "BNB",
      image: BNB,
      symbol: "BNB",
      price: "$606.65",
      change_1h: "▲0.09%",
      change_24h: "▼1.20%",
      change_7d: "▲3.73%",
      market_cap: "$85,471,956,947",
      volume_24h: "$1,874,281,784",
      volume_detail: "3.08M BNB",
      circulating_supply: "140.89M BNB",
      graph: graph5,
    },
    {
      id: 6,
      name: "Solana",
      image: solana,
      symbol: "SOL",
      price: "$151.51",
      change_1h: "+0.53%",
      change_24h: "▲1.26%",
      change_7d: "▲14.74%",
      market_cap: "$78,381,958,631",
      volume_24h: "$4,881,674,486",
      volume_detail: "32.25M SOL",
      circulating_supply: "517.31M SOL",
      graph: graph6,
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
