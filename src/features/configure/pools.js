import BigNumber from "bignumber.js";
// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
  {
    id: 'ELE',
    name: 'ELE',
    token: 'ELE',
    tokenDescription: 'E11',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'E11',
    earnedTokenAddress: '0x3Ed531BfB3FAD41111f6dab567b33C4db897f991',
    earnContractAddress: '0x3Ed531BfB3FAD41111f6dab567b33C4db897f991',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0'
  },
  {
    id: 'waultbnb',
    name: 'ETH',
    token: 'WAULT-BNB LP',
    tokenDescription: 'WAULT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11WAULT',
    earnedTokenAddress: '0x527636DB487Dcf972F09A7149cF4686fF8fC32DC',
    earnContractAddress: '0x527636DB487Dcf972F09A7149cF4686fF8fC32DC',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x1f280a4fA78f5805bAC193dDdAfEB77B16da4614'
  },
  {
    id: 'betheth',
    name: 'ETH',
    token: 'BETH-ETH LP',
    tokenDescription: 'ETH',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BETH',
    earnedTokenAddress: '0xc11beE3b3Ff05C59ACC074fa02aEA53a49aa96F1',
    earnContractAddress: '0xc11beE3b3Ff05C59ACC074fa02aEA53a49aa96F1',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x99d865ed50d2c32c1493896810fa386c1ce81d91'
  },
  {
    id: 'psgbnb',
    name: 'PSG',
    token: 'PSG-BNB LP',
    tokenDescription: 'PSG',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11PSG',
    earnedTokenAddress: '0x250b9021018132a52C1bE46d9f1ae53997C3f8A8',
    earnContractAddress: '0x250b9021018132a52C1bE46d9f1ae53997C3f8A8',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x9c4f6a5050CF863e67a402E8b377973b4E3372c1'
  },
  {
    id: 'atmbnb',
    name: 'ATM',
    token: 'ATM-BNB LP',
    tokenDescription: 'ATM',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ATM',
    earnedTokenAddress: '0xd527f4145C84a57E38278485658829040E7e87b7',
    earnContractAddress: '0xd527f4145C84a57E38278485658829040E7e87b7',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029'
  },
  {
    id: 'juvbnb',
    name: 'JUV',
    token: 'JUV-BNB LP',
    tokenDescription: 'JUV',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11JUV',
    earnedTokenAddress: '0x2f01AC6cDec485d07D4Be8998Bc4c16f540b914C',
    earnContractAddress: '0x2f01AC6cDec485d07D4Be8998Bc4c16f540b914C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e'
  },
  {
    id: 'ogbnb',
    name: 'OG',
    token: 'OG-BNB LP',
    tokenDescription: 'OG',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11OG',
    earnedTokenAddress: '0xd2e399e7768fc713c9ecf0c8e8988dd056c8dbd7',
    earnContractAddress: '0xd2e399e7768fc713c9ecf0c8e8988dd056c8dbd7',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x64373608f2E93Ea97aD4D8Ca2CCE6B2575dB2F55'
  },
  {
    id: 'asrbnb',
    name: 'ASR',
    token: 'ASR-BNB LP',
    tokenDescription: 'ASR',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ASR',
    earnedTokenAddress: '0x1716D66943b0833f26A938d0A75aEfAc708Bd98B',
    earnContractAddress: '0x1716D66943b0833f26A938d0A75aEfAc708Bd98B',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xd6b900d5308356317299dafe303e661271aa12f1'
  },
  {
    id: 'alpacabnb',
    name: 'ALPACA',
    token: 'ALPACA-BNB LP',
    tokenDescription: 'ALPACA',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses alpaca finance',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ALPACA',
    earnedTokenAddress: '0x0A33E8e887850Ad53739A0CeF110283b74E02f3e',
    earnContractAddress: '0x0A33E8e887850Ad53739A0CeF110283b74E02f3e',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xF3CE6Aac24980E6B657926dfC79502Ae414d3083'
  },
  {
    id: 'bopenbnb',
    name: 'BOPEN',
    token: 'BOPEN-BNB LP',
    tokenDescription: 'BOPEN',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11bOPEN',
    earnedTokenAddress: '0xE8e64d86CFdAFC25Ccee1681Dab127aE8C37CC4b',
    earnContractAddress: '0xE8e64d86CFdAFC25Ccee1681Dab127aE8C37CC4b',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x9d8b7e4a9D53654D82F12c83448D8f92732bC761'
  },
  {
    id: 'bmxxbnb',
    name: 'BMXX',
    token: 'BMXX-BNB LP',
    tokenDescription: 'BMXX',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11bMXX',
    earnedTokenAddress: '0xda88bD84e752960f8fDe52CC2E9e6B19ae0D6e7C',
    earnContractAddress: '0xda88bD84e752960f8fDe52CC2E9e6B19ae0D6e7C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67'
  },
  {
    id: 'dodobnb',
    name: 'DODO',
    token: 'DODO-BNB LP',
    tokenDescription: 'DODO',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11DODO',
    earnedTokenAddress: '0x9fe4C02ba78cDE545F8c55775BbcC54324e37A9F',
    earnContractAddress: '0x9fe4C02ba78cDE545F8c55775BbcC54324e37A9F',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x9e642d174B14fAEa31D842Dc83037c42b53236E6'
  },
  {
    id: 'swingbybnb',
    name: 'SWINGBY',
    token: 'SWINGBY-BNB LP',
    tokenDescription: 'SWINGBY',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11SWINGBY',
    earnedTokenAddress: '0x991Ece2D170cC4Fb3876e737c37B0e7a0CF0b827',
    earnContractAddress: '0x991Ece2D170cC4Fb3876e737c37B0e7a0CF0b827',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x4576C456AF93a37a096235e5d83f812AC9aeD027'
  },
  {
    id: 'brybnb',
    name: 'BRY',
    token: 'BRY-BNB LP',
    tokenDescription: 'BRY',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BRY',
    earnedTokenAddress: '0x07EAcFE846130F78A16f93e1DA8625953080c0d0',
    earnContractAddress: '0x07EAcFE846130F78A16f93e1DA8625953080c0d0',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC'
  },
  {
    id: 'zeebnb',
    name: 'ZEE',
    token: 'ZEE-BNB LP',
    tokenDescription: 'ZEE',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ZEE',
    earnedTokenAddress: '0x06bdC7D6d0a2Ef45bC8b83F458407FE961596014',
    earnContractAddress: '0x06bdC7D6d0a2Ef45bC8b83F458407FE961596014',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xB5Ab3996808c7e489DCDc0f1Af2AB212ae0059aF'
  },
  {
    id: 'swgbbnb',
    name: 'SWGB',
    token: 'SWGB-BNB LP',
    tokenDescription: 'SWGB',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11SWGB',
    earnedTokenAddress: '0xd56F8c5E5a47fC010a3E86ba57D87B0DCfA5AAe5',
    earnContractAddress: '0xd56F8c5E5a47fC010a3E86ba57D87B0DCfA5AAe5',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xC1800c29CF91954357cd0bf3f0accAADa3D0109c'
  },
  {
    id: 'watchbnb',
    name: 'WATCH',
    token: 'WATCH-BNB LP',
    tokenDescription: 'WATCH',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11WATCH',
    earnedTokenAddress: '0x3d7c095A6559dF3FD185778Ac1687EcE650670a5',
    earnContractAddress: '0x3d7c095A6559dF3FD185778Ac1687EcE650670a5',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xdC6C130299E53ACD2CC2D291fa10552CA2198a6b'
  },
  {
    id: 'sfpbnb',
    name: 'SFP',
    token: 'SFP-BNB LP',
    tokenDescription: 'SFP',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11SFP',
    earnedTokenAddress: '0x8cfd13f45c397BD58e6de469286ebb4FB939Fd2E',
    earnContractAddress: '0x8cfd13f45c397BD58e6de469286ebb4FB939Fd2E',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xcBe2cF3bd012e9C1ADE2Ee4d41DB3DaC763e78F3'
  },
  {
    id: 'litbnb',
    name: 'LIT',
    token: 'LIT-BNB LP',
    tokenDescription: 'LIT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11LIT',
    earnedTokenAddress: '0x1F4FCAc27BB56b9D58F436f8f39a92973ae4C343',
    earnContractAddress: '0x1F4FCAc27BB56b9D58F436f8f39a92973ae4C343',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161'
  },
  {
    id: 'hgetbnb',
    name: 'HGET',
    token: 'HGET-BNB LP',
    tokenDescription: 'HGET',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11HGET',
    earnedTokenAddress: '0xB76F6eF15e4EF27e5766573Dcbab684b099CBdE9',
    earnContractAddress: '0xB76F6eF15e4EF27e5766573Dcbab684b099CBdE9',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x66b9E1eAc8a81F3752F7f3A5E95dE460688A17Ee'
  },
  {
    id: 'bdobnb',
    name: 'BDO',
    token: 'BDO-BNB LP',
    tokenDescription: 'BDO',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BDO',
    earnedTokenAddress: '0xb1049508617924134d452b4b0ec38980D3f25fB2',
    earnContractAddress: '0xb1049508617924134d452b4b0ec38980D3f25fB2',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x74690f829fec83ea424ee1F1654041b2491A7bE9'
  },
  {
    id: 'egldbnb',
    name: 'EGLD',
    token: 'EGLD-BNB LP',
    tokenDescription: 'EGLD',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11EGLD',
    earnedTokenAddress: '0x0C0116026103B88aDf611DAfD5301c669776eD48',
    earnContractAddress: '0x0C0116026103B88aDf611DAfD5301c669776eD48',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x3Ef4952C7a9AfbE374EA02d1Bf5eD5a0015b7716'
  },
  {
    id: 'wsotebnb',
    name: 'WSOTE',
    token: 'WSOTE-BNB LP',
    tokenDescription: 'WSOTE',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11WSOTE',
    earnedTokenAddress: '0x297c7816b70a0be4Ff7687aC381807f2e5Bb19A8',
    earnContractAddress: '0x297c7816b70a0be4Ff7687aC381807f2e5Bb19A8',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xFfb9E2d5ce4378F1a89b29bf53F80804CC078102'
  },
  {
    id: 'frontbnb',
    name: 'FRONT',
    token: 'FRONT-BNB LP',
    tokenDescription: 'FRONT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11FRONT',
    earnedTokenAddress: '0x928C1937B9178F175551b72e4e43ae08E3c7E9eC',
    earnContractAddress: '0x928C1937B9178F175551b72e4e43ae08E3c7E9eC',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x36b7D2e5C7877392Fb17f9219efaD56F3D794700'
  },
  {
    id: 'helmetbnb',
    name: 'HELMET',
    token: 'HELMET-BNB LP',
    tokenDescription: 'HELMET',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11HELMET',
    earnedTokenAddress: '0xC736a70E9d083BA610909A71B1995547e1f1bD1A',
    earnContractAddress: '0xC736a70E9d083BA610909A71B1995547e1f1bD1A',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x6411310C07d8c48730172146Fd6F31FA84034a8b'
  },
  {
    id: 'btcstbnb',
    name: 'BTCST',
    token: 'BTCST-BNB LP',
    tokenDescription: 'BTCST',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BTCST',
    earnedTokenAddress: '0x83b5d185cb2Bd62025D4c55F1bAFA7b9B6785abb',
    earnContractAddress: '0x83b5d185cb2Bd62025D4c55F1bAFA7b9B6785abb',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x91589786D36fEe5B27A5539CfE638a5fc9834665'
  },
  {
    id: 'ltcbnb',
    name: 'LTC',
    token: 'LTC-BNB LP',
    tokenDescription: 'LTC',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11LTC',
    earnedTokenAddress: '0x59DA97Caed37a56Be45c96348E9BdDBe8eCE4fAc',
    earnContractAddress: '0x59DA97Caed37a56Be45c96348E9BdDBe8eCE4fAc',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xBc765Fd113c5bDB2ebc25F711191B56bB8690aec'
  },
  {
    id: 'bscxbnb',
    name: 'BSCX',
    token: 'BSCX-BNB LP',
    tokenDescription: 'BSCX',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BSCX',
    earnedTokenAddress: '0xDBF8B3a860a890c452809eb4e99F23335b81ab7B',
    earnContractAddress: '0xDBF8B3a860a890c452809eb4e99F23335b81ab7B',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x20781bc3701C5309ac75291f5D09BdC23D7b7Fa8'
  },
  {
    id: 'tenbnb',
    name: 'TEN',
    token: 'TEN-BNB LP',
    tokenDescription: 'TEN',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11TEN',
    earnedTokenAddress: '0x95576e89a2097A2F3EC585E582B24d9Fa150868b',
    earnContractAddress: '0x95576e89a2097A2F3EC585E582B24d9Fa150868b',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x01ecc44Ddd2D104F44D2AA1A2bD9DFbC91aE8275'
  },
  {
    id: 'balbtbnb',
    name: 'BALBT',
    token: 'BALBT-BNB LP',
    tokenDescription: 'BALBT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BALBT',
    earnedTokenAddress: '0xb18A859F3b5A4b053800e595D855CBB5f5da5EFE',
    earnContractAddress: '0xb18A859F3b5A4b053800e595D855CBB5f5da5EFE',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xbe14f3a89A4F7f279Af9d99554cf12E8C29dB921'
  },
  {
    id: 'reefbnb',
    name: 'REEF',
    token: 'REEF-BNB LP',
    tokenDescription: 'REEF',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11REEF',
    earnedTokenAddress: '0xd7B75DAE1794649b9ea59E67C50c83D1c3F0aFD6',
    earnContractAddress: '0xd7B75DAE1794649b9ea59E67C50c83D1c3F0aFD6',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x58B58cab6C5cF158f63A2390b817710826d116D0'
  },
  {
    id: 'dittobnb',
    name: 'DITTO',
    token: 'DITTO-BNB LP',
    tokenDescription: 'DITTO',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11DITTO',
    earnedTokenAddress: '0xC272241ae3900f795109D506faaEd1047ADbe35E',
    earnContractAddress: '0xC272241ae3900f795109D506faaEd1047ADbe35E',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x470BC451810B312BBb1256f96B0895D95eA659B1'
  },
  {
    id: 'blkbnb',
    name: 'BLK',
    token: 'BLK-BNB LP',
    tokenDescription: 'BLK',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BLK',
    earnedTokenAddress: '0x689D35ec441F3EDc125Eb53Fec1eaC755f397B76',
    earnContractAddress: '0x689D35ec441F3EDc125Eb53Fec1eaC755f397B76',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0'
  },
  {
    id: 'unfibnb',
    name: 'UNFI',
    token: 'UNFI-BNB LP',
    tokenDescription: 'UNFI',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11UNFI',
    earnedTokenAddress: '0x456602BEA1a8644A8f4e34974Be8f5C828bE9580',
    earnContractAddress: '0x456602BEA1a8644A8f4e34974Be8f5C828bE9580',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31'
  },
  {
    id: 'hardbnb',
    name: 'HARD',
    token: 'HARD-BNB LP',
    tokenDescription: 'HARD',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11HARD',
    earnedTokenAddress: '0x0144eeDa9f067592A444eDCC71fE438131f32dBB',
    earnContractAddress: '0x0144eeDa9f067592A444eDCC71fE438131f32dBB',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x9F40e8a2Fcaa267A0c374B6c661E0b372264cC3D'
  },
  {
    id: 'ctkbnb',
    name: 'CTK',
    token: 'CTK-BNB LP',
    tokenDescription: 'CTK',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11CTK',
    earnedTokenAddress: '0x01d0571F47a79782Db6B0C33c024aEDCB91FEC2C',
    earnContractAddress: '0x01d0571F47a79782Db6B0C33c024aEDCB91FEC2C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x7793870484647a7278907498ec504879d6971EAb'
  },
  {
    id: 'sxpbnb',
    name: 'SXP',
    token: 'SXP-BNB LP',
    tokenDescription: 'SXP',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11SXP',
    earnedTokenAddress: '0x7E93C334A215A11A4c80136C914Bb641E6dddE62',
    earnContractAddress: '0x7E93C334A215A11A4c80136C914Bb641E6dddE62',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4'
  },
  {
    id: 'injbnb',
    name: 'INJ',
    token: 'INJ-BNB LP',
    tokenDescription: 'INJ',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11INJ',
    earnedTokenAddress: '0x857d733f702eC996C108059027E5385abcb788A0',
    earnContractAddress: '0x857d733f702eC996C108059027E5385abcb788A0',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6'
  },
  {
    id: 'filbnb',
    name: 'FIL',
    token: 'FIL-BNB LP',
    tokenDescription: 'FIL',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11FIL',
    earnedTokenAddress: '0xd0ff54ce0eA735d010b25eF55f354F0bb7D646Ba',
    earnContractAddress: '0xd0ff54ce0eA735d010b25eF55f354F0bb7D646Ba',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x35FE9787F0eBF2a200BAc413D3030CF62D312774'
  },
  {
    id: 'unibnb',
    name: 'UNI',
    token: 'UNI-BNB LP',
    tokenDescription: 'UNI',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11UNI',
    earnedTokenAddress: '0x487c000daF32c547eE9413831176D4D545744250',
    earnContractAddress: '0x487c000daF32c547eE9413831176D4D545744250',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9'
  },
  {
    id: 'yfibnb',
    name: 'YFI',
    token: 'YFI-BNB LP',
    tokenDescription: 'YFI',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11YFI',
    earnedTokenAddress: '0x8D212b23948b4b1160d7eD157743c16f6500D089',
    earnContractAddress: '0x8D212b23948b4b1160d7eD157743c16f6500D089',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1'
  },
  {
    id: 'bchbnb',
    name: 'BCH',
    token: 'BCH-BNB LP',
    tokenDescription: 'BCH',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BCH',
    earnedTokenAddress: '0x22d16D31efe717715831cB628D86E0CCdEBbaF91',
    earnContractAddress: '0x22d16D31efe717715831cB628D86E0CCdEBbaF91',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x54EdD846dB17f43b6e43296134ECD96284671E81'
  },
  {
    id: 'xtzbnb',
    name: 'XTZ',
    token: 'XTZ-BNB LP',
    tokenDescription: 'XTZ',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11XTZ',
    earnedTokenAddress: '0x3fdcAFc80bE708eD520425EfBAb65f333E1d7703',
    earnContractAddress: '0x3fdcAFc80bE708eD520425EfBAb65f333E1d7703',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x5acaC332F0F49c8bAdC7aFd0134aD19D3DB972e6'
  },
  {
    id: 'yfiibnb',
    name: 'YFII',
    token: 'YFII-BNB LP',
    tokenDescription: 'YFII',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11YFII',
    earnedTokenAddress: '0xd39832249075319D8476192fda0344f6bFA19132',
    earnContractAddress: '0xd39832249075319D8476192fda0344f6bFA19132',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x574a978c2D0d36D707a05E459466C7A1054F1210'
  },
  {
    id: 'atombnb',
    name: 'ATOM',
    token: 'ATOM-BNB LP',
    tokenDescription: 'ATOM',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ATOM',
    earnedTokenAddress: '0xC225bf0De350704D18C38450abFBe5ac131Ff6A7',
    earnContractAddress: '0xC225bf0De350704D18C38450abFBe5ac131Ff6A7',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x2333c77FC0B2875c11409cdCD3C75D42D402E834'
  },
  {
    id: 'xrpbnb',
    name: 'XRP',
    token: 'XRP-BNB LP',
    tokenDescription: 'XRP',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11XRP',
    earnedTokenAddress: '0xF3Ba7c535F9FeA2B95ce636258E2c5419c89c682',
    earnContractAddress: '0xF3Ba7c535F9FeA2B95ce636258E2c5419c89c682',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xC7b4B32A3be2cB6572a1c9959401F832Ce47a6d2'
  },
  {
    id: 'alphabnb',
    name: 'ALPHA',
    token: 'ALPHA-BNB LP',
    tokenDescription: 'ALPHA',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ALPHA',
    earnedTokenAddress: '0x732404e4D3888B289Ee1665c45f2bf871562B270',
    earnContractAddress: '0x732404e4D3888B289Ee1665c45f2bf871562B270',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x4e0f3385d932F7179DeE045369286FFa6B03d887'
  },
  {
    id: 'btcbnb',
    name: 'BTC',
    token: 'BTC-BNB LP',
    tokenDescription: 'BTC',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BTC',
    earnedTokenAddress: '0x345657786b32Bf4ac715Ead5ae5C3c08C099FBC9',
    earnContractAddress: '0x345657786b32Bf4ac715Ead5ae5C3c08C099FBC9',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x7561EEe90e24F3b348E1087A005F78B4c8453524'
  },
  {
    id: 'ethbnb',
    name: 'ETH',
    token: 'ETH-BNB LP',
    tokenDescription: 'ETH',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ETH',
    earnedTokenAddress: '0x4585F275e1D5E534528060d7cDCc544E26CfE68B',
    earnContractAddress: '0x4585F275e1D5E534528060d7cDCc544E26CfE68B',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422'
  },
  {
    id: 'xvsbnb',
    name: 'XVS',
    token: 'XVS-BNB LP',
    tokenDescription: 'XVS',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11XVS',
    earnedTokenAddress: '0x31697b615dFEf36A415260996d234a8a8C1f74C4',
    earnContractAddress: '0x31697b615dFEf36A415260996d234a8a8C1f74C4',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb'
  },
  {
    id: 'twtbnb',
    name: 'TWT',
    token: 'TWT-BNB LP',
    tokenDescription: 'TWT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11TWT',
    earnedTokenAddress: '0x7913D9b83bfB2E948aC78F15628EC5aF12927c98',
    earnContractAddress: '0x7913D9b83bfB2E948aC78F15628EC5aF12927c98',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483'
  },
  {
    id: 'linkbnb',
    name: 'LINK',
    token: 'LINK-BNB LP',
    tokenDescription: 'LINK',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11LINK',
    earnedTokenAddress: '0xCB73C1866508debAda74F1Ac2798334ab0Db8A9d',
    earnContractAddress: '0xCB73C1866508debAda74F1Ac2798334ab0Db8A9d',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xaeBE45E3a03B734c68e5557AE04BFC76917B4686'
  },
  {
    id: 'eosbnb',
    name: 'EOS',
    token: 'EOS-BNB LP',
    tokenDescription: 'EOS',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11EOS',
    earnedTokenAddress: '0xAcD820Ec2d105Ba75862202cCd93B932E2F2B88a',
    earnContractAddress: '0xAcD820Ec2d105Ba75862202cCd93B932E2F2B88a',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x981d2Ba1b298888408d342C39c2Ab92e8991691e'
  },
  {
    id: 'dotbnb',
    name: 'DOT',
    token: 'DOT-BNB LP',
    tokenDescription: 'DOT',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11DOT',
    earnedTokenAddress: '0x8066fd579b3DcD5e47C9B6915540d5271cc854b5',
    earnContractAddress: '0x8066fd579b3DcD5e47C9B6915540d5271cc854b5',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c'
  },
  {
    id: 'bandbnb',
    name: 'BAND',
    token: 'BAND-BNB LP',
    tokenDescription: 'BAND',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BAND',
    earnedTokenAddress: '0xa6e0f45F80Ca72271343145a9E33b0A4630380d4',
    earnContractAddress: '0xa6e0f45F80Ca72271343145a9E33b0A4630380d4',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xc639187ef82271D8f517de6FEAE4FaF5b517533c'
  },
  {
    id: 'adabnb',
    name: 'ADA',
    token: 'ADA-BNB LP',
    tokenDescription: 'ADA',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11ADA',
    earnedTokenAddress: '0xcDEe7B6b1B9817eBd02aa8101a6E7b78F1B549c9',
    earnContractAddress: '0xcDEe7B6b1B9817eBd02aa8101a6E7b78F1B549c9',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF'
  },
  {
    id: 'busdbnb',
    name: 'BUSD',
    token: 'BUSD-BNB LP',
    tokenDescription: 'BUSD',
    tokenAddress: '',
    tokenDecimals: 18,
    uses: 'Uses pancakeswap',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: '11BUSD',
    earnedTokenAddress: '0x7Ed3a3bb1Ca62FAAfB08EAdD00d57969485cf6D4',
    earnContractAddress: '0x7Ed3a3bb1Ca62FAAfB08EAdD00d57969485cf6D4',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f'
  },

]
