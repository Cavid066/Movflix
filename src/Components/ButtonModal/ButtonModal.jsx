import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import '../ButtonModal/buttonmodal.scss'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 400,
    boxShadow: 24,
  };
function ButtonModal() {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='btn' onClick={handleOpen}>Open modal</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="box">
                    <iframe width="1271" height="715" src="https://www.youtube.com/embed/b_sAEfB9aTA" title="The Shawshank Redemption Escape, 4k full film editing, Parliament Cinema Club 4k," frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ButtonModal