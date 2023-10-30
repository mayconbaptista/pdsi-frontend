'use client';

import React, { useState } from "react";
import Modal from "react-modal";

function VipModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className='d-flex flex-row align-items-center justify-content-center'>
                <button
                    className='btn btn-warning w-100 fw-bold'
                    onClick={() => openModal()}
                >
                    {" "}
                    Vip Modal
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Vip Modal'
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                    content: {
                        width: "550px",
                        height: "85vh",
                        margin: "auto",
                        padding: "0px",
                        border: "none",
                        overflow: "hidden",
                        backgroundColor: "orange",
                    },
                }}
            >
                <button className="close-button absolute top-0 right-0 m-4" onClick={() => closeModal()}>X</button>
                <img className="w-[75%] h-[75%] mx-auto" src="/image/promocionalChef.png" />
                <div className="text-center">
                    <p className="mb-4 inline-block">Seja VIP agora mesmo e tenha acesso a todos esses benefícios</p>
                </div>
                <div class="text-center">
                    <button class="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Virar VIP
                    </button>
                </div>
            </Modal>
        </div>
    );
}
export default VipModal;