import './Phonenumber.css';

export default function Phonenumber({phonenumber, type}) {
    return (
        <div className="phonenumber">
            <p>{type}: {phonenumber}</p>
        </div>
    )
}