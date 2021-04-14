import { pools } from "../../configure";

const tokens = {};

pools.map(({token, tokenAddress, earnedToken, earnedTokenAddress})=> {
  tokens[token] = {
    tokenAddress: tokenAddress,
    tokenBalance: 0
  }
  tokens[earnedToken] = {
    tokenAddress: earnedTokenAddress,
    tokenBalance: 0
  }
  return '';
})

// console.log(tokens)

const initialState = {
  pools,
  tokens,
  pendingRewards: {},
  contractApy: {},
  fetchContractApyPending: false,
  fetchPoolBalancesPending: false,
  fetchBalancesPending: false,
  fetchApprovalPending: {},
  fetchClaimPending: {},
  fetchDepositPending: {},
  fetchWithdrawPending: {},
};

export default initialState;