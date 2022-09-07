import React from 'react'
import Dialog from '@mui/material/Dialog';
import "./sendMail.css"
/* eslint-disable */

function SendMail() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="btnDiv">
                <a onClick={handleClickOpen} className="btn btn-white">info@yvorl.hu</a>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <form>
                    <input name="name" type="text" class="feedback-input" placeholder="Name" />
                    <input name="email" type="text" class="feedback-input" placeholder="Email" />
                    <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
            </Dialog>
        </>
    )
}

export default SendMail