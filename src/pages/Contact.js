import './Contact.css'

export default function Contact() {
    return (
    <div className="register">
        <p id='h3'>Register Now</p>

            <input type='text' id="usn" placeholder='Enter your Username'></input> <br/>
            <input type='text' id='pass' placeholder='Enter your Password'></input> <br/> <br/>
            <a href='#'><span>Sign In</span></a>


        <div className='contact'>
            <p id='h3'>Contact Us</p>

            <a href='#' id='social'>ƒ</a>
            <a href='#' id='social'>☎️</a>
            <a href='#' id='social'>📧</a>
            <a href='#' id='social'>✆</a>

        </div>

    </div>

)
}