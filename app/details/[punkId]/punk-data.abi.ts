const punkDataAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      { internalType: "uint8", name: "index", type: "uint8" },
      { internalType: "bytes", name: "encoding", type: "bytes" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "addAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint64", name: "key1", type: "uint64" },
      { internalType: "uint32", name: "value1", type: "uint32" },
      { internalType: "uint64", name: "key2", type: "uint64" },
      { internalType: "uint32", name: "value2", type: "uint32" },
      { internalType: "uint64", name: "key3", type: "uint64" },
      { internalType: "uint32", name: "value3", type: "uint32" },
      { internalType: "uint64", name: "key4", type: "uint64" },
      { internalType: "uint32", name: "value4", type: "uint32" },
    ],
    name: "addComposites",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "index", type: "uint8" },
      { internalType: "bytes", name: "_punks", type: "bytes" },
    ],
    name: "addPunks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "index", type: "uint16" }],
    name: "punkAttributes",
    outputs: [{ internalType: "string", name: "text", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "index", type: "uint16" }],
    name: "punkImage",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "index", type: "uint16" }],
    name: "punkImageSvg",
    outputs: [{ internalType: "string", name: "svg", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sealContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "_palette", type: "bytes" }],
    name: "setPalette",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export default punkDataAbi;
