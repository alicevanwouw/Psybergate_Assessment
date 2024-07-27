
function LinkButton({ text, onClick }) {
    return <button className="btn-base btn" onClick={onClick}>{text}</button>;
}

export default LinkButton;