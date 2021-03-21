
import { Component } from 'react'
import { About } from '../../cmps/About/About'
import { Events } from '../../cmps/Events/Events'
import { Highlights } from '../../cmps/Highlights/Highlights'
import { HomeFooter } from '../../cmps/HomeFooter/HomeFooter'
import { HomeHeader } from '../../cmps/HomeHeader/HomeHeader'

import './Home.scss'

export class Home extends Component {

    render() {
        return (
            <section className="home">
                <HomeHeader />
                <About />
                <Highlights />
                <Events />
                <HomeFooter />
            </section>
        )
    }
}

