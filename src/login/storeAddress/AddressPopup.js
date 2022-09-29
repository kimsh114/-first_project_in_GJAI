import ReactDom from 'react-dom';

const AddressPopup = ({ children }) => {
  const el = document.getElementById('popupDom');
  return ReactDom.createPortal(children, el);
};

export default AddressPopup;