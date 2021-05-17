import React from 'react'
import { Button } from './Button'
import './Hero.css'
import '../App.css'

function Hero() {
    return (
        <div className='hero-container'>
            {/* <video src="Images/IMG-3268.mov" autoPlay loop muted /> */}
            <h3>Hello</h3>
            <p className='p-tags'>Welcome to Tommy's MVP (minimum viable product) website!</p>

            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle="btn--outline" 
                buttonSize='btn--large'>Let's connect! 
                </Button>

                <Button className='btns' 
                buttonStyle="btn--outline" 
                buttonSize='btn--large'> Follow me on social media! 
                </Button>
            </div>
        </div>
    )
}

export default Hero
