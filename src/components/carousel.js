import React, {Component} from "react"
import Carousel from 'react-elastic-carousel';

import Item from './Item';



class Partners extends Component {

    render () {
      return (  
        <Carousel>
        <Item>
            <a href="https://www.binmajid.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/a.png')} alt=""/></a>
            <a href="https://www.takarub.com/en" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/b.png')} alt=""/></a>
            <a href="https://ashyaat.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/c.png')} alt=""/></a>                   
        </Item>
        <Item>
            <a href="https://treatgourmet.ae/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/d.png')} alt=""/></a>
            <a href="https://gesmkvip.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/e.png')} alt=""/></a>
            <a href="https://justclean.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/f.png')} alt=""/></a>
        </Item>
        <Item>
            <a href="https://saiid-kobeisy.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/j.png')} alt=""/></a>
            <a href="https://www.alefeducation.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/m.png')} alt=""/></a>
            <a href="https://www.deltadentalins.com/" rel="noreferrer" target="_blank"><img src={require('../../content/assets/img/clients/k.png')} alt=""/></a>
        </Item>
        <Item>
            <a href="https://enarat.com/en/" target="_blank"><img src={require('../../content/assets/img/clients/l.png')} alt=""/></a>
        </Item>        
        </Carousel>
      )
    }
}

export default Partners