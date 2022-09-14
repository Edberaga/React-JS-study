import {useState} from 'react'

export const Message = (props) => {
    const name = useState('Edbert')
    const [message, setMessage] = useState(`Hello Edbert`)
    return (
        <div>           
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you for Subcribing')}>Subcribe</button>
        </div>
    )
}