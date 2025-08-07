import { governanceModules, treasuryModules } from "./modules";

const uomiColor = {
  color: "#FF6B35",
  colorSecondary: "rgba(255, 107, 53, 0.1)",
};

const uomi = {
  name: "UOMI",
  icon: null, // Add icon component when available
  identity: "uomi",
  sub: "uomi",
  value: "uomi",
  chain: "uomi",
  symbol: "UOMI",
  decimals: 12,
  chainIcon: "uomi",
  ...uomiColor,
  buttonColor: "#000000",
  logo: "logo-img-2",
  modules: {
    ...treasuryModules,
    ...governanceModules,
    identity: true,
    multisig: true,
    vestings: true,
    proxy: true,
  },
  nodes: [{ name: "Finney", url: "wss://finney.uomi.ai" }],
  useOnChainBlockData: true,
};

export default uomi;
