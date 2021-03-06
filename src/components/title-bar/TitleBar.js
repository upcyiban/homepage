import React,{ Component } from 'react'
import './TitleBar.css'
import logo from '../../assets/logo/logo.svg'
import search from '../../assets/logo/search.png'





class Button extends Component{
    render() {
        return (
            <a className={"Title-Bar-Buttons-Button "+this.props.bg} href={this.props.href}>{this.props.val}</a>
        )
    }
}

class Logo extends Component{
    render(){
        return (
            <div className="Title-Bar-Logo-Container">
                <img alt="logo" className="Title-Bar-Logo" src={logo}/>
            </div>
        )
    }
}

class Title extends Component{
    render(){
        return (
            <div className="Title-Bar-Title-Container">
                <h1 className="Title-Bar-Title">石大易班</h1>
            </div>
        )
    }
}

class Buttons extends Component{
    render(){
        return (
            <div className="Title-Bar-Buttons-Container">
                <Button href="https://i.upc.edu.cn" bg="Title-Bar-Button-Bg-Green" val="数字石大"/>
                <Button href="http://i.upc.edu.cn/dcp/yiban.jsp?" bg="Title-Bar-Button-Bg-Blue" val="登录"/>
               
                
            </div>
        )
    }
}

export default class TitleBar extends Component{
    render(){
        return (
        <div className="TitleBar">
            <div className="Title-Bar-Inner-Container">
                <Logo />
                <Title />
                <Buttons />
            </div>
        </div>)
    }
}