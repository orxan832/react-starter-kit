import React, { memo } from 'react';
import Modal from 'react-modal';

const MyModal = ({ modal, modalHandler, children }) => {


    return (
        <Modal
            isOpen={modal}
            overlayClassName='h-screen absolute flex top-0 left-0 z-10 w-full overflow-hidden'
            className='w-1/2 h-96 bg-white border border-black rounded shadow-lg m-auto'
            onRequestClose={modalHandler}
            closeTimeoutMS={500}
        >
            <div className='text-5xl'>
                <span onClick={modalHandler}>Orxan</span>
            </div>
        </Modal>
    )
}

export default memo(MyModal);