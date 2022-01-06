
function Modal(props) {
    const {
        isOpen,
        onClose,
        children
    } = props;

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;