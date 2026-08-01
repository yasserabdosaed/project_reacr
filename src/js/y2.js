import * as React from 'react';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; // تم الإبقاء عليه مرة واحدة فقط
import CssBaseline from '@mui/material/CssBaseline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors'; // تم إضافة استيراد اللون لتجنب خطأ 
import { createSvgIcon } from '@mui/material/utils';

// import { createSvgIcon } from '@mui/material/utils';آخر

export function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <>

     <div>
     <h1 style={{
      display:"inline-block",
      marginRight:"700px"
     }}>
      اكثر
     </h1>
    
    <button style={{
      
    }}>
      <ArrowDownwardIcon />
    </button>
      
      <ArrowDownwardIcon color="primary" />
  
    </div>


      <Switch
        checked={checked}
        onChange={handleChange}
        slotProps={{
          input: { 'aria-label': 'controlled' }
        }}
      />

      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#cfe8fc', height: checked ? "100vh" : "50vh" }} />
        </Container>
      </React.Fragment>

   
    </>
  );
}