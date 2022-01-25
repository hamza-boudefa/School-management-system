import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import NAvBar from '../components/home/NavBar'
import LoginStdTsh from '../components/LoginStdTsh'
import { Button } from 'react-bootstrap'

const HomaPage = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://previews.123rf.com/images/krekdm/krekdm1608/krekdm160800053/61579452-retour-au-pattern-de-l-%C3%A9cole-peut-%C3%AAtre-utilis%C3%A9-pour-le-papier-peint-fond-site-papier-d-emballage-etu.jpg")` 
          }}>
            <NAvBar/>
            <About/>
            <LoginStdTsh/>
            <Footer/>
        </div>
    )
}

export default HomaPage
