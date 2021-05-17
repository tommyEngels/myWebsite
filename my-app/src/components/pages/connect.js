import React from 'react'
import '../../App.css'

function connect() {
    return (
        <>
            <div className='connect-container'>
                <div className='social'>
                    <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/thomas-%E2%80%9Ctommy%E2%80%9D-engels-849966139/'><i class="fab fa-linkedin fa-3x"></i></a>
                    </li>
                    <li>
                        <a href='/'><i class="fab fa-instagram-square fa-3x"></i></a>
                    </li>
                    <li>
                        <a href='https://youtu.be/fI9hIJ-ZQmg'><i class="fab fa-youtube fa-3x"></i></a>
                    </li>
                    <li>
                        <a title="(651)395-1906" href='tel:6513951906'><i class="fas fa-phone fa-3x"></i></a>
                    </li>
                    <li>
                        <a title="tbengels@gmail.com" href='mailto:tbengels@gmail.com'><i class="fas fa-paper-plane fa-3x"></i></a>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default connect