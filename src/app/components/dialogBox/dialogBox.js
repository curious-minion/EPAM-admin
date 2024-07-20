import Raact,  {useCallback, useEffect, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DialogBox({show, onHide}) {
	const modalWrapperRef = useRef();

	const backDropHandler = (e) => {
		if (modalWrapperRef.current && modalWrapperRef.current.contains(e.target)){
            onHide();
        }
    };

  useEffect(() => {
        setTimeout(() => {
            window.addEventListener('click', backDropHandler);
        })
    }, [show])

  useEffect(() => {
		return () => {
			window.removeEventListener('click', backDropHandler);
		}
    }, [show]);


	return (

     <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
			centered
			ref={modalWrapperRef}
    >



			 <Modal.Dialog>

          <Modal.Title id="contained-modal-title-vcenter">Видалити публікацію?</Modal.Title>

        <Modal.Body>
          <p>Ви дісно хочете видалити публікацію “Етика та відповідальність у розробці штучного інтелекту: аналіз і рекомендації”? Публікація буде видалена назавжди.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Відхилити</Button>
          <Button variant="danger">Видалити</Button>
        </Modal.Footer>
</Modal.Dialog>
</Modal>

  );
}

export default DialogBox;