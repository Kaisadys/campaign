import { Select } from 'antd';
import React, { useState } from 'react';
import CampaingIcon from './campaign-form-icon.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const target_group = [
    {label: "target group"},
   ];
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted with data:', formData);
    onClose(); // Close the modal after submission
  };
  const [textareaValue, setTextareaValue] = useState('');
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            <h2 className='form-title'>Create Campaign</h2>
            <form onSubmit={handleSubmit}>
              <div className="campaign-title">
                <label htmlFor="name">Campaign Title</label>
                <div className='campaign-title-input'>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className='campaign-title-input'
                  placeholder='Write your campaign title here'
                  value={formData.name}
                  onChange={handleChange}
                />
                </div>
               
              </div>
              <div className="description">
                <label htmlFor="email">Description</label>
                <div>
                <textarea
        style={{ width: '100%', height: '100px' }} // Adjust the styles as needed
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="Enter text here..."
      />
                {/* <input
                  type="text"
                  id="email"
                  style={{height:"500"}}
                  className='description-box'
                  placeholder='Write your message here'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                /> */}
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Target Group</label>
                <Select options={target_group}></Select>
                
              </div>
              <button type="submit" className='submit-comment'>Submit your comment</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
