import { textSecondaryColor } from 'assets/jss/components/commonStyle';

const styles = theme => ({
  detailsSection: {
    paddingLeft: '45px',

    [theme.breakpoints.down('md')]: {
      marginBottom: 20
    },
  },

  balance: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0 2px',

    [theme.breakpoints.only('md')]: {
      fontSize: '20px'
    },
  },
  balanceSecondary: {
    fontWeight: 'bold',
    color: '#fff',

    [theme.breakpoints.only('md')]: {
      fontSize: '15px'
    },
  },
  balanceDescription: {
    color: textSecondaryColor,
    fontSize: '16px',
    marginBottom: '20px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px'
    }
  },

  balanceWithLogo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -10
  },
  balanceLogo: {
    height: 45,
    margin: '0 15px 10px 0',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',

    '& img': {
      maxWidth: 45,
      maxHeight: 45
    }
  },

  balanceWithPadding: {
    padding: '12px 0'
  }
});

export default styles;