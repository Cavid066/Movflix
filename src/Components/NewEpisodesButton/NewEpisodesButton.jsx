import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'
import '../NewEpisodesButton/NewEpisodesButton.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 400,
    boxShadow: 24,
  };

function NewEpisodesButton() {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
        <button className='btn' onClick={handleOpen}><PlayArrowIcon/> WATCH NOW</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R2gbPxeNk2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </Box>
            </Modal>
    </div>
  )
}

export default NewEpisodesButton