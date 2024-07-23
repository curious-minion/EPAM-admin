import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
	modalTitle,
	modalBody,
	deleteButton,
	editButton,
	modalFooter
 } from './dialogBox.module.css';
import deleteBtn from "../../../../public/svg/delete-btn2.svg";
import cancelBtn from "../../../../public/svg/cancel.svg";
import Image from 'next/image';

function DialogBox({ show, onHide, bodyText }) {

	return (

     <Modal
			show={show}
			onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
			centered>
			 <Modal.Dialog >

          <Modal.Title id="contained-modal-title-vcenter" className={modalTitle}>Видалити публікацію?</Modal.Title>

        <Modal.Body >
					<p className={modalBody}>Ви дісно хочете видалити публікацію "{`${bodyText}`}"?</p>
					<p className={modalBody}>	Публікація буде видалена назавжди.</p>
        </Modal.Body>

        <Modal.Footer className={modalFooter}>
          <Button  onClick={onHide} className={editButton} ><Image src={cancelBtn}/>Відхилити</Button>
          <Button  className={deleteButton}> <Image src={deleteBtn}/>Видалити</Button>
        </Modal.Footer>
			</Modal.Dialog>

			</Modal>


  );
}

export default DialogBox;