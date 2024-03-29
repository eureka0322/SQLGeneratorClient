import React, { useRef } from 'react';
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Box, Typography, Button } from '@mui/material';
import Sheet from './Sheet';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Result() {
  // const isSheetOpened = useSelector(state => state.utility.sheetOpened);
  const data = useSelector(state => state.union.sheetContent);
  const buttonRef = useRef();
  const isConnected = useSelector(state => state.database.success);

  // React.useEffect(() => {
  //   setExpanded(isSheetOpened);
  // }, [isSheetOpened])

  const exportCSV = (event) => {
    buttonRef.current.link.click();
  }

  return (
    // <Box>
    //   <Accordion expanded={expanded} onChange={handleChange}>
    //     <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //       <Typography sx={{margin: 1}}>Result</Typography>
    //       {/* <Button sx={{border: '1px solid #ccc', borderRadius: 2, marginLeft: '15px', padding: '5px 10px', textTransform: 'none'}} onClick={exportCSV}>Export</Button>
    //       <CSVLink data={data.rows} filename='output.csv' style={{display: 'none'}} ref={buttonRef}>Export</CSVLink> */}
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Sheet/>
    //     </AccordionDetails>
    //   </Accordion>
    // </Box>
    <Box sx={{padding: '15px', backgroundColor: '#EEEEEE'}}>
      <Typography disabled= {!isConnected} sx={{margin: 0.5}}>Result</Typography>
      <Sheet />
    </Box>    
  );
}
