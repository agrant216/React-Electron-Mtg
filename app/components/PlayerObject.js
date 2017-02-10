import React, { Component } from 'react';

class PlyerObject extends Component{

    render(){
        var playerName = this.props.Player.name;
        var playerLife = this.props.Player.life;


        return(
            <div>
                <h1>{playerName}</h1>
                <h2>{playerLife}</h2>
            </div>
        );
    }
}