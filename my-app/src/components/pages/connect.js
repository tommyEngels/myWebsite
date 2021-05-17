import React from 'react'
import '../../App.css'

function connect() {
    return (
        <>
            <div className='connect-container'>
                <div className='social'>
                    <h2> Connect over social</h2>
                    <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/thomas-%E2%80%9Ctommy%E2%80%9D-engels-849966139/'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='/'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://youtu.be/fI9hIJ-ZQmg'>YouTube Channel</a>
                    </li>
                    </ul>
                </div>
                <div className='direct'>
                    <h2 > Connect directly </h2>
                    <ul>
                        <li>
                            <a href='tel:6513951906'>Personal Number</a>
                        </li>
                        <li>
                            <a href='mailto:tbengels@gmail.com'>Personal Email</a>
                        </li>
                        <li>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default connect