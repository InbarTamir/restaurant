
import './HomeHeader.scss'
import { Component } from 'react'

export class HomeHeader extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="home-header dark">
                <div className="container">
                    {/* <nav className="app-header" > */ }
                    {/* <NavLink exact activeClassName="curr-page" to="/">Home</NavLink> */ }
                    {/* <NavLink to="/about">About</NavLink> */ }
                    {/* <button onClick={ this.onBack }>Back</button> */ }
                    {/* </nav> */ }
                    <div className="logo">dine</div>
                </div>
            </section>
        )
    }
}

