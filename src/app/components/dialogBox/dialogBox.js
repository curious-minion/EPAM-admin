import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DialogBox() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Видалити публікацію?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Ви дісно хочете видалити публікацію “Етика та відповідальність у розробці штучного інтелекту: аналіз і рекомендації”? Публікація буде видалена назавжди.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Відхилити</Button>
          <Button variant="danger">Видалити</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DialogBox;