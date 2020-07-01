import React, {Component} from "react"
import { Link } from "gatsby"


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
                        <li><Link to="/#showcase">Home</Link></li>
                        <li><Link to="/#who">Who we are</Link></li>
                        <li><Link to="/#what">What we do</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link className="talk" to="/#contact">Let's Talk!</Link></li>
                    </ul> 
                </div>
            </nav>
        );
    }
}

export default Navbar