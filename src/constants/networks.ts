import { ApolloClient } from '@apollo/client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { createBlockClient, createClient } from 'apollo/client'

import ARBITRUM_LOGO_URL from '../assets/network-logo/arbitrum.svg'
import AURORA_LOGO_URL from '../assets/network-logo/aurora.svg'
import AVAX_LOGO_URL from '../assets/network-logo/avax.png'
import BTTC_LOGO_URL from '../assets/network-logo/bittorrent.png'
import BNB_LOGO_URL from '../assets/network-logo/bnb.png'
import CRONOS_LOGO_URL from '../assets/network-logo/cronos.png'
import ETHEREUM_LOGO_URL from '../assets/network-logo/ethereum.png'
import FANTOM_LOGO_URL from '../assets/network-logo/fantom.png'
import OASIS_LOGO_URL from '../assets/network-logo/oasis.svg'
import POLYGON_LOGO_URL from '../assets/network-logo/polygon.png'
import VELAS_LOGO_URL from '../assets/network-logo/velas.png'

export enum ChainId {
  ETHEREUM = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  POLYGON = 137,
  // MUMBAI = 80001,
  // BSCTESTNET = 97,
  BSCMAINNET = 56,
  // AVAXTESTNET = 43113,
  AVAXMAINNET = 43114,
  FANTOM = 250,
  // CRONOSTESTNET = 338,
  CRONOS = 25,
  // ARBITRUM_TESTNET = 421611,
  ARBITRUM = 42161,
  BTTC = 199,
  VELAS = 106,
  AURORA = 1313161554,
  OASIS = 42262,
}

export type NetworkInfo = {
  chainId: ChainId
  route: string
  name: string
  imageURL: string
  client: ApolloClient<NormalizedCacheObject>
  blockClient: ApolloClient<NormalizedCacheObject>
  subgraphName: string
  etherscanUrl: string
  etherscanName: string
  tokenListUrl: string
  nativeToken: {
    symbol: string
    name: string
    address: string
  }
}

const RinkebyNetworkInfo: NetworkInfo = {
  chainId: ChainId.RINKEBY,
  route: 'rinkeby',
  name: 'Rinkeby',
  imageURL: ETHEREUM_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/promm-rinkeby'),
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/billjhlee/rinkeby-blocks'),
  subgraphName: 'viet-nv/promm-rinkeby',
  etherscanUrl: 'https://rinkeby.etherscan.io',
  etherscanName: 'Rinkeby Explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/rinkeby.tokenlist.json',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH (Wrapped)',
    address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

const RopstenNetworkInfo: NetworkInfo = {
  chainId: ChainId.ROPSTEN,
  route: 'ropsten',
  name: 'Ropsten',
  imageURL: ETHEREUM_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/promm-ropsten'),
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/edwardevans094/ropsten-blocks'),
  subgraphName: 'viet-nv/promm-ropsten',
  etherscanUrl: 'https://ropsten.etherscan.io',
  etherscanName: 'Ropsten Explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/ropsten.tokenlist.json',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH (Wrapped)',
    address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

const EthereumNetworkInfo: NetworkInfo = {
  chainId: ChainId.ETHEREUM,
  route: 'ethereum',
  name: 'Ethereum',
  imageURL: ETHEREUM_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://etherscan.io',
  etherscanName: 'Etherscan',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/ethereum.tokenlist.json',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH (Wrapped)',
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

const BscNetworkInfo: NetworkInfo = {
  chainId: ChainId.BSCMAINNET,
  route: 'bnb',
  name: 'BNB Chain',
  imageURL: BNB_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'),
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'),
  subgraphName: 'viet-nv/kyberswap-elastic',
  etherscanUrl: 'https://bscscan.com',
  etherscanName: 'BscScan',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/bsc.mainnet.tokenlist.json',
  nativeToken: {
    symbol: 'BNB',
    name: 'BNB (Wrapped)',
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
}

const ArbitrumNetworkInfo: NetworkInfo = {
  chainId: ChainId.ARBITRUM,
  route: 'arbitrum',
  name: 'Arbitrum',
  imageURL: ARBITRUM_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://arbiscan.io',
  etherscanName: 'Arbiscan',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/arbitrum.tokenlist.json',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH (Wrapped)',
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  },
}

const PolygonNetworkInfo: NetworkInfo = {
  chainId: ChainId.POLYGON,
  route: 'polygon',
  name: 'Polygon',
  imageURL: POLYGON_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://polygonscan.com',
  etherscanName: 'Polygonscan',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/matic.tokenlist.json',
  nativeToken: {
    symbol: 'MATIC',
    name: 'MATIC (Wrapped)',
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },
}

const AvaxNetworkInfo: NetworkInfo = {
  chainId: ChainId.AVAXMAINNET,
  route: 'avalanche',
  name: 'Avalanche',
  imageURL: AVAX_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://snowtrace.io',
  etherscanName: 'Snowtrace',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/avax.mainnet.tokenlist.json',
  nativeToken: {
    symbol: 'AVAX',
    name: 'AVAX (Wrapped)',
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  },
}

const FantomNetworkInfo: NetworkInfo = {
  chainId: ChainId.FANTOM,
  route: 'fantom',
  name: 'Fantom',
  imageURL: FANTOM_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://ftmscan.com',
  etherscanName: 'Ftmscan',
  tokenListUrl:
    'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/fantom.mainnet.tokenlist.json',
  nativeToken: {
    symbol: 'FTM',
    name: 'FTM (Wrapped)',
    address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  },
}

const CronosNetworkInfo: NetworkInfo = {
  chainId: ChainId.CRONOS,
  route: 'cronos',
  name: 'Cronos',
  imageURL: CRONOS_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://cronos.org/explorer',
  etherscanName: 'Cronos explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/cronos.tokenlist.json',
  nativeToken: {
    symbol: 'CRO',
    name: 'CRO (Wrapped)',
    address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
  },
}

const BTTCNetworkInfo: NetworkInfo = {
  chainId: ChainId.BTTC,
  route: 'bittorrent',
  name: 'BitTorrent',
  imageURL: BTTC_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://bttcscan.com',
  etherscanName: 'Bttcscan',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/bttc.tokenlist.json',
  nativeToken: {
    symbol: 'BTT',
    name: 'BTT (Wrapped)',
    address: '0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A',
  },
}

const VelasNetworkInfo: NetworkInfo = {
  chainId: ChainId.VELAS,
  route: 'velas',
  name: 'Velas',
  imageURL: VELAS_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://evmexplorer.velas.com',
  etherscanName: 'Velas EVM Explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/velas.tokenlist.json',
  nativeToken: {
    symbol: 'VLX',
    name: 'VLX (Wrapped)',
    address: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
  },
}

const AuroraNetworkInfo: NetworkInfo = {
  chainId: ChainId.AURORA,
  route: 'aurora',
  name: 'Aurora',
  imageURL: AURORA_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://aurorascan.dev',
  etherscanName: 'Aurora Explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/aurora.tokenlist.json',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH (Wrapped)',
    address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  },
}

const OasisNetworkInfo: NetworkInfo = {
  chainId: ChainId.OASIS,
  route: 'oasis',
  name: 'Oasis',
  imageURL: OASIS_LOGO_URL,
  client: createClient('https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-elastic'), //todo namgold: change this
  blockClient: createBlockClient('https://api.thegraph.com/subgraphs/name/dynamic-amm/ethereum-blocks-bsc'), //todo namgold: change this
  subgraphName: 'viet-nv/kyberswap-elastic', //todo namgold: change this
  etherscanUrl: 'https://explorer.emerald.oasis.dev',
  etherscanName: 'Oasis Emerald Explorer',
  tokenListUrl: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/tokenLists/oasis.tokenlist.json',
  nativeToken: {
    symbol: 'ROSE',
    name: 'ROSE (Wrapped)',
    address: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
  },
}

export const ALL_SUPPORT_NETWORKS_ID = Object.values(ChainId).filter((i) => !isNaN(Number(i))) as ChainId[]
export const SHOW_NETWORKS = [
  ChainId.ETHEREUM,
  ChainId.POLYGON,
  ChainId.BSCMAINNET,
  ChainId.AVAXMAINNET,
  ChainId.FANTOM,
  ChainId.CRONOS,
  ChainId.ARBITRUM,
  ChainId.BTTC,
  ChainId.VELAS,
  ChainId.AURORA,
  ChainId.OASIS,
]

export const NETWORKS_INFO_LIST: NetworkInfo[] = [
  EthereumNetworkInfo,
  BscNetworkInfo,
  RopstenNetworkInfo,
  RinkebyNetworkInfo,
  ArbitrumNetworkInfo,
  PolygonNetworkInfo,
  AvaxNetworkInfo,
  FantomNetworkInfo,
  CronosNetworkInfo,
  BTTCNetworkInfo,
  VelasNetworkInfo,
  AuroraNetworkInfo,
  OasisNetworkInfo,
]

export const NETWORKS_INFO_MAP: { [id in ChainId]: NetworkInfo } = {
  [ChainId.ETHEREUM]: EthereumNetworkInfo,
  [ChainId.BSCMAINNET]: BscNetworkInfo,
  [ChainId.ROPSTEN]: RopstenNetworkInfo,
  [ChainId.RINKEBY]: RinkebyNetworkInfo,
  [ChainId.ARBITRUM]: ArbitrumNetworkInfo,
  [ChainId.POLYGON]: PolygonNetworkInfo,
  [ChainId.AVAXMAINNET]: AvaxNetworkInfo,
  [ChainId.FANTOM]: FantomNetworkInfo,
  [ChainId.CRONOS]: CronosNetworkInfo,
  [ChainId.BTTC]: BTTCNetworkInfo,
  [ChainId.VELAS]: VelasNetworkInfo,
  [ChainId.AURORA]: AuroraNetworkInfo,
  [ChainId.OASIS]: OasisNetworkInfo,
}
