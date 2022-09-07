import React from 'react'
import Dialog from '@mui/material/Dialog';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import "./sendMail.css"
/* eslint-disable */
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Üzenet sikeresen elküldve!',
            });
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Valami elromlott!',
                text: error.text,
            });
        });
    e.target.reset();
};

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
                <form onSubmit={handleOnSubmit}>
                    <input name="user_name" type="text" class="feedback-input" placeholder="Név" required />
                    <input name="user_email" type="text" class="feedback-input" placeholder="Email" required />
                    <textarea name="user_message" class="feedback-input" placeholder="Üzenet" required></textarea>
                    <input type="submit" value="Küldés" />
                </form>
            </Dialog>
        </>
    )
}

export default SendMail