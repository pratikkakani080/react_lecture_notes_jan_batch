export default function Button({buttonText, onClick}: any) {
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}