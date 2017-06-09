import React,{ Component } from 'react'
import iconBg from '../../assets/icon/right-icon.png'
import iconBg1 from '../../assets/icon/right-icon1.png'
import iconBg2 from '../../assets/icon/right-icon2.png'
import './RightBar.css'

const config = [
    {
        iconBg:iconBg,
        href:'#'
    },
    {
        iconBg:iconBg1,
        href:'#'
    },
    {
        iconBg:iconBg2,
        href:'#'
    }
]

class RightBarIcon extends Component{
    render(){
        return (
            <a className="Right-Bar-Icon" style={{background: `url(${this.props.iconBg})`,backgroundRepeat:'no-repeat'}} href={this.props.href}> </a>
        )
    }
}

export default class RightBar extends Component{
    render(){
        return <div className="RightBar">
            {config.map((c,i)=><RightBarIcon iconBg={c.iconBg} href={c.href} key={i}/>)}
        </div>
    }
}