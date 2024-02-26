import React, { useState } from 'react';
import { Modal } from 'antd';

function CustomModal({ isModalVisible, handleOk, handleCancel }) {
    return (
        <Modal
            title="Peringatan"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Ok"
            cancelText="Batal"
            okButtonProps={{ style: { backgroundColor: '#1DB954', borderColor: '#1DB954', color: '#fff' } }}
        >
            <p>Sorry, unable to play music as it requires a premium access token</p>
        </Modal>
    );
}

export default CustomModal;
