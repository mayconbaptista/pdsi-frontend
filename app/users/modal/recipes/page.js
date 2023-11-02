'use client';

import React, { useState } from "react";
import Modal from "react-modal";

function RecipesModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className='w-1/2 h-screen mx-auto flex items-center'>
                <button
                    className='btn btn-warning bg-red-500 text-white font-bold py-2 px-4 rounded'
                    onClick={() => openModal()}
                >
                    {" "}
                    Recipes Modal
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Save Modal'
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                    content: {
                        width: "550px",
                        height: "45vh",
                        margin: "auto",
                        padding: "0px",
                        border: "none",
                        overflow: "hidden",
                    },
                }}
            >
                <div className="bg-orange">
                    <button className="close-button absolute top-0 right-0 m-4" onClick={() => closeModal()}>X</button>
                    <div className="text-center">
                        <div className="m-4 inline-block text-xl font-bold">Receita</div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="m-4 inline-block text-xl font-bold">*Receita aqui*</div>
                </div>
                <div className="m-4 text-xl font-bold">Pergunta:</div>
                <div className="m-4 flex">
                    <div className="m-4 text-base font-normal">*pergunta aqui*</div>
                </div>
                <div className="m-4 text-xl font-bold">Resposta:</div>
                <div className="m-4 flex">
                    <div className="m-4 text-base font-normal">*Resposta aqui*</div>
                </div>
            </Modal>
        </div>
    );
}
export default RecipesModal;