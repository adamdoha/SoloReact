import React from "react";
import Modal from "react-modal";

function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#00ff14";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Click here to use Modal!</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          안녕하세요! Dolphago입니다.
        </h2>
        <button onClick={closeModal}>닫기</button>
        <div>모달창에 들어왔습니다</div>
        <form>
          <input type="text" defaultValue="DolphaGo" />
          <button>기능추가</button>
          <button>기능추가</button>
          <button>기능추가</button>
          <button>기능추가</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
