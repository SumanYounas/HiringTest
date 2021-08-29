const useStyles = {
    root: {
      background: 'transparent',
      width: 'auto',
      marginRight: '25px',
      //overflowY: 'scroll'
    },
    table: {
      //minWidth: 600,
      borderCollapse: 'collapse',
      fontSize: '0.9em',
      borderRadius: '10px',
      // overflowY: 'auto',
    },
    tableHeadBg: {
      background: '#1c1c1c',
    },
    tableBodyBg: {
      background: 'linear-gradient(900deg, #1d1d1d 30%, #464646  90%)',
      boxShadow: '0px 3px 15px #6f6f6f',
    },
    tableHeadStyle: {
      color: '#dddddd',
      textAlign: 'left',
      fontWeight: 'bold',
      padding: '12px 11px',
      borderBottom: '1px solid rgba(0, 0, 0, 1)',
    },
    tableBodyStyle: {
      color: '#9e9c9c',
      textAlign: 'left',
      padding: '5px 11px',
      borderBottom: '0px solid rgba(224, 224, 224, 1)',
    },
    actionBtns: {
      color: '#ffffff',
    },
    dialog_css: {
      position: 'absolute',
      backgroundColor: 'linear-gradient(900deg, #6017ff   30%, #d950ff    90%)',
    },
    dialog_title: {
      alignItems: 'center',
      marginTop: 10,
      // background: 'linear-gradient(900deg, #A9DFBF 30%,#52BE80  90%)',
    },
    pagination: {
      background: 'linear-gradient(900deg, #1d1d1d 30%, #3b3b3b  90%)',
      color: '#eeeeee',
    },
    profile: {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      //minHeight: '200px',
      background: '#202020',
      boxShadow: '0 0 10px rgba(224,224,224,0.3)',
      padding: '30px 30px',
      // marginLeft: '115px',
      // marginRight: '-115px'
    },
    paper: {
      fontFamily: 'sans-serif',
      background: '#202020',
      boxShadow: '0 0 10px rgba(224,224,224,0.3)',
      // padding: theme.spacing(3),
      width: 'max-content',
      // height: 400,
      margin: 'auto',
      marginTop: '30px',
      // marginLeft: '148px',
    },
    profile_name: {
      fontWeight: 'bold',
      color: '#9e9c9c',
      marginTop: 20,
      marginBottom: 20,
    },
    profile_details: {
      color: '#9e9c9c',
      fontSize: '0.9em',
      margin: 5,
    },
    profile_email: {
      color: '#00919E',
    },
    mgr_profile_img: {
      width: 100,
      height: 100,
      objectFit: 'cover',
      marginBottom: '30px',
      borderRadius: '50%',
      display: 'initial',
      // marginLeft: 10,
    },
    mgr_profile: {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      //width: 'max-content',
      //minHeight: '200px',
      background: '#202020',
      boxShadow: '0 0 10px rgba(224,224,224,0.3)',
      padding: '20px 20px',
  
      // marginLeft: '115px',
      // marginRight: '-115px'
    },
    mgr_div: {
      display: 'flex',
      // width: '400px',
      marginBottom: '15px',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginLeft: '100px'
    },
  };
  
  export default useStyles;