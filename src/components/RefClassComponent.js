import React, { Component } from 'react'

export default class RefClassComponent extends Component {
    constructor(props){
        super(props)
        this.iRef=React.createRef()
        this.pRef=React.createRef()
}

componentDidMount(){
    console.log(this.iRef)
    this.iRef.current.focus()
}
    render() {
        return (
            <div>
                <input ref={this.iRef} type="text" placeholder="Enter name"></input>
                <input ref={this.pRef} type="text" placeholder="password"></input>
                   <button onClick={()=>{
                       this.pRef.current.focus()
                   }}>LOgin</button>
                
            </div>
        )
    }
}
