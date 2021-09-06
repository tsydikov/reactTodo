import React from "react";
import cl from './MyModal.module.css';

const MyModal = () => {

    return (
        <div className={cl.MyModal}>
          <div className={cl.MyModalContent}></div>
        </div>
    )
}

export default MyModal;