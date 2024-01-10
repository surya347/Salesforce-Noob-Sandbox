import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SupportMe from "./SupportMe";
import Container from '@mui/material/Container';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 0,
};


const GenericModal = (props) => {

  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

          <Box sx={style}>
            <SupportMe/>
        </Box>
      </Modal>
      
    </div>
  )
}

export default GenericModal