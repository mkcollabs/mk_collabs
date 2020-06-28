import React, {Component} from "react"
import { Link } from "gatsby"

import './css/shared.css'
import './css/nav.css'

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
            <nav id="main-nav">
                <div className="main-container main-nav-container">
                    <Link className="main-nav-logo">MK COLLABS</Link>
                    <ul>
                        <li><Link href="#showcase">Home</Link></li>
                        <li><Link href="#who">Who we are</Link></li>
                        <li><Link href="#what">What we do</Link></li>
                        <li><Link className="talk" href="#contact">Let's Talk!</Link></li>
                    </ul> 
                </div>
            </nav>
        );
    }
}

export default Navbar