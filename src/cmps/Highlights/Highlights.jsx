
import { Component } from 'react'
import { HighlightList } from '../HighlightList/HighlightList'

import './Highlights.scss'
import circleLine from '../../assets/img/icons/circle_line.png'

export class Highlights extends Component {

    render() {
        return (
            <section className="highlights dark ">
                <div className="container flex space-between">
                    <div className="highlight-desc">
                        <img className="title-seperator" src={ circleLine } />
                        <h2 className="desc-title">A few highlights from our menu</h2>
                        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                    </div>
                    <HighlightList />
                </div>
            </section>
        )
    }
}

