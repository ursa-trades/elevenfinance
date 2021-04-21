import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { formatDecimals } from 'features/helpers/bignumber';

import Grid from '@material-ui/core/Grid';

import DepositButton from '../Buttons/DepositButton';
import FarmClaimButton from '../Buttons/FarmClaimButton';
import StakeButton from '../Buttons/StakeButton';
import UnstakeButton from '../Buttons/UnstakeButton';
import WithdrawButton from '../Buttons/WithdrawButton';
import Step from './Step/Step';

import styles from './styles';
const useStyles = makeStyles(styles);

const FarmOnly = ({ pool, index, balanceSingle, stakedAmount, pendingRewards }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {/* Tokens Balance */}
      <Grid item xs={12} sm={6} lg={4}>
        <Step number={1} label={'Stake in Farm'} />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>{formatDecimals(balanceSingle)}</div>
          {pool.price && (
            <div className={classes.balanceSecondary}>${balanceSingle.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Deposited')}</div>

          <StakeButton pool={pool} index={index} balance={balanceSingle} />
        </div>
      </Grid>

      {/* Deposited Balance */}
      <Grid item xs={12} sm={6} lg={4}>
        <Step />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>{formatDecimals(stakedAmount)}</div>
          {pool.price && (
            <div className={classes.balanceSecondary}>${stakedAmount.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Staked')}</div>

          <UnstakeButton pool={pool} index={index} balance={stakedAmount} />
        </div>
      </Grid>

      {/* Farm Earnings */}
      <Grid item xs={12} lg={4}>
        <Step number={2} label={'Harvest the Rewards'} />

        <div className={classes.detailsSection}>
          <div className={classes.balanceWithLogo + (pool.price ? ' ' + classes.balanceWithPadding : '')}>
            <div className={classes.balanceLogo}>
              <img src={require(`images/${pool.farm.earnedToken}-logo.png`)}/>
            </div>
            <div>
              <div className={classes.balance}>{formatDecimals(pendingRewards?.pendingEle)}</div>
              <div className={classes.balanceDescription}>{t('Vault-Earned')} {pool.farm.earnedToken}</div>
            </div>
          </div>

          <FarmClaimButton pool={pool} />
        </div>
      </Grid>
    </>
  );
}

export default FarmOnly;