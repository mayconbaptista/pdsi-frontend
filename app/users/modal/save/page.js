'use client';

import React, { useState } from "react";
import Modal from "react-modal";

function SaveModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleSubmit = async e => {
    }

    return (
        <div>
            <div className='w-1/2 h-screen mx-auto flex items-center'>
                <button
                    className='btn btn-warning bg-red-500 text-white font-bold py-2 px-4 rounded'
                    onClick={() => openModal()}
                >
                    {" "}
                    Save Modal
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
                <button className="close-button absolute top-0 right-0 m-4" onClick={() => closeModal()}>X</button>
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <div className="m-4 inline-block text-2xl font-bold">Salvar mensagem em Favoritos</div>
                    </div>
                    <div className="m-4 text-xl font-bold">Título</div>
                    <div className="m-4 flex">
                        <input className="w-full h-10 border border-2 rounded-md" placeholder=" Informe título para mensagem" />
                    </div>
                    <div className="m-4 text-xl font-bold">Categoria</div>
                    <div className="m-4 flex">
                        <select className="w-full h-10 border border-2 rounded-md" name="category">
                            <option></option>
                            <option value="receita">Receita</option>
                            <option value="curiosidade">Curiosidade</option>
                            <option value="geral">Geral</option>
                        </select>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
export default SaveModal;