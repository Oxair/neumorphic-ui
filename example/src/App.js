import React, { Component } from 'react'
import like from './like.png'
import { NeuHeading, NeuCard, NeuInput, NeuButton, NeuReaction, NeuProgressBar } from 'neumorphic-ui'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }

  render () {
    return (
      <div style={{width:'60%', textAlign:'center',paddingTop:'100px',paddingBottom:'100px', margin: '0px auto'}}>
      <NeuCard width="100%" height="100%">
        <div style={{ textAlign:'center'}}>
        <NeuHeading text="Neumorphic UI" fontSize="106px" fontWeight="900"/></div>
        <NeuReaction ><img src={like} width="30px" height="30px"/></NeuReaction>
        <br />
        <br />
        <br />
        <NeuButton text="Neumorhpic Button" />
        <br />
        <br />
        <NeuProgressBar progress="80%" />
        <NeuInput width="96%" onChange={e => this.setState({value:e.target.value})} placeholder="Neumorphic Input" value={this.state.value} />
        <br />
      </NeuCard>
      </div>
    )
  }
}
