import React, {Component} from "react"
import { Link } from "gatsby"

import jump from 'jump.js'

import '../css/shared.css'
import '../css/nav.css'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', ()=> {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({ scrolled: true});
            } else {
                this.setState({ scrolled: false});
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', ()=> {});
    }

    render() {
        return (
            <nav className={ this.state.scrolled ? 'main-nav scrolled' : 'main-nav' }>
                <div className="main-container main-nav-container">
                    <Link className="main-nav-logo">MK COLLABS</Link>
                    <ul >
                        <li><a href="/#showcase" onClick = {() => jump('#showcase', {duration: 2000})}>Home</a></li>
                        <li><a href="/#who" onClick = {() => jump('#who', {duration: 2000})}>Who we are</a></li>
                        <li><a href="/#what" onClick = {() => jump('#what', {duration: 2000})}>What we do</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a className="talk" href="/#contact" onClick = {() => jump('#contact', {duration: 2000})}>Let's Talk!</a></li>
                    </ul> 
                </div>
            </nav>
        );
    }
}

export default Navbar