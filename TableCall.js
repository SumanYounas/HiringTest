import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { useAlert } from 'react-alert';
import axios from 'axios';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Dialog,
	DialogContent,
  Grid,
} from '@material-ui/core/';

import styles from './Tablestyle';

const useStyles = makeStyles(styles);

const Row = (props) => {
  const classes = useStyles();
	const { row, token, fetchData } = props;
  console.log("tokwn test 1", token);
  const access_token = token;
  //const alert = useAlert();
  
  const [openCallModal, setOpenCallModal] = useState(false);

  const handleCallModal = () => {
    setOpenCallModal(!openCallModal);
  };
    
    const archiveCalls = async (id) => {
      console.log("tokwn test 222", access_token);
      console.log('id', id);
      try{
        
      const config = {
        headers : {Authorization: `Bearer ${access_token}`}
    };
        const response = await axios.put(`https://frontend-test-api.aircall.io/calls/${id}/archive`, config); 
        console.log(response);
        // if (response) {
        //   alert.show('Call Archived', { type: 'success' });
        //   fetchData();
        // }else{
        //   alert.show('Call doesnot exist', { type: 'success' });
        // }
       

      }catch(err){
        console.log(err);
      }
      
      }
       
    

    return(
      <Fragment>
        <Dialog
        open={openCallModal}
        onClose={handleCallModal}
        aria-labelledby='simple-dialog-title'
        maxWidth={'sm'}
      >
        <DialogContent
          className={classes.content}
          style={{
            background: '#ffffff',
            scrollBehavior: 'smooth',
          }}
        >
         <div>
         <Grid container>
						<Grid item xs={0} md={3} lg={3} />
						<Grid item xs={12} md={6} lg={6}>
							<Paper>
								<Grid container>
									<Grid item xs={12} md={6} lg={8}>
                    <div>
                      <p className={classes.mgr_p}>Call ID</p>
                      <div className={classes.profile_name}>{row.id}</div>
                    </div>

                    <div>
                      <p className={classes.mgr_p}>Call Duration</p>
                      <div className={classes.profile_details}>
                    
                        {row.duration}
                      </div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Caller's number</p>
                    <div className={classes.profile_details}>
                 
											{row.from}
										</div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Callee's number</p>
                    <div className={classes.profile_details}>
                  
											{row.to}
										</div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Call Direction</p>
                    <div className={classes.profile_details}>
                   
											{row.direction}
										</div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Call Type</p>
                    <div className={classes.profile_details}>
                   
											{row.call_type}
										</div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Call Via</p>
                    <div className={classes.profile_details}>
         
											{row.via}
										</div>
                    </div>

                    <div>
                    <p className={classes.mgr_p}>Call Created at</p>
                    <div className={classes.profile_details}>
                   
											{row.created_at}
										</div>
                    </div>
                    
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={0} md={3} lg={3} />
					</Grid>
         </div>
          
        </DialogContent>
      </Dialog>
    
      <TableRow
      
      >
      <TableCell
                    className={classes.tableBodyStyle}
                    onClick={() => handleCallModal(row)}
                    component='th'
                    scope='row'
                  >
                    {row.id}
                  </TableCell>
                  <TableCell 
                  className={classes.tableBodyStyle}
                  onClick={() => handleCallModal(row)}
                  >
                    {row.call_type}
                  </TableCell>

                  <TableCell  onClick={() => handleCallModal(row)} className={classes.tableBodyStyle}>
                    {row.from}
                  </TableCell>

                  <TableCell  onClick={() => handleCallModal(row)} className={classes.tableBodyStyle}>
                    {row.duration}
                  </TableCell>

                  <TableCell  onClick={() => handleCallModal(row)} className={classes.tableBodyStyle}>
                    {row.created_at}
                  </TableCell>

                  <TableCell onClick={()=>archiveCalls(row.id)}  className={classes.tableBodyStyle}>
                   
                     <Button  size="small" color="secondary">
                     {/* onClick={()=>archiveCalls(row.id)} */}
                       Archive
                     </Button>
                  </TableCell>
      </TableRow>
 
      </Fragment>
    )
}

export const TableCall = () => {
    const [tableData, setTableData]= useState([]);
    const [token, setToken] = useState();
    const classes = useStyles();
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    console.log('token:', token);

    useEffect(() => {
      fetchData();
    }, []);

    async function fetchData(){
      let callObj = [];
      const body = {username: "hayat", password: "hayat123"};
      const res = await axios.post('https://frontend-test-api.aircall.io/auth/login', body);
      const activityData = res.data.access_token;
      setToken(activityData);   
      console.log('Call', activityData);

      const config = {
        headers : {Authorization: `Bearer ${activityData}`}
      };
      const resp = await axios.get('https://frontend-test-api.aircall.io/calls?offset=50&limit=200', config);
      const callData = resp.data.nodes;
      for (let i = 0; i < callData.length; i++) {
        if (!callData[i].is_archived) {
          callObj.push(callData[i]);
          console.log(callObj);
        }
      }
      const groupbyDate = callObj.sort((a, b) => b.date - a.date);
      console.log("filtered table",groupbyDate);
      setTableData(groupbyDate);      


      } 
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    
    return(
        <div style={{background: '#2e2e2e'}}>
         < Grid container>
						<Grid item xs={0} md={3} lg={2} />
						<Grid item xs={12} md={6} lg={8}>
							<Paper className={classes.paper}>
								{/* <Grid container>
									<Grid item xs={12} md={6} lg={8}> */}
                  <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
           <TableHead>
             <TableRow className={classes.tableHeadBg}>
               <TableCell className={classes.tableHeadStyle}>
                 Call ID
               </TableCell>
               <TableCell className={classes.tableHeadStyle}>
                Call Type
               </TableCell>
               <TableCell className={classes.tableHeadStyle}>
                 Caller's Number
               </TableCell>
               <TableCell className={classes.tableHeadStyle}>
                 Duration
               </TableCell>
               <TableCell className={classes.tableHeadStyle}>
                 Group by Date
               </TableCell>
               <TableCell className={classes.tableHeadStyle}>
                 Action
               </TableCell>
             </TableRow>
           </TableHead>
           <TableBody className={classes.tableBodyBg}>
								{tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
									<Row
                    fetchData={fetchData}
                    token={token}
										key={i}
										row={row}
									/>
								))}
							</TableBody>
        
                 
               
        </Table>
         <TablePagination
          className={classes.pagination}
          component='div'
          count={tableData.length}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      
      </TableContainer>
                    
									{/* </Grid>
								</Grid> */}
							</Paper>
						</Grid>
						<Grid item xs={0} md={3} lg={2} />
					</Grid>
      
    </div>
    )

}

export default TableCall;