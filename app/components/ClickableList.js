import React, { Component } from 'react';
import styles from './Mtg.css';
import users from '../../resources/users.json';

var style = {
    
}

class ClickableList extends Component {

    render() {
        var rows = [];
        var text;
        var selected = 0; //should be state
        var allowed = this.props.allowed;
        var OnClick = (selected, text) => {
            if(selected.length == this.props.allowed){
                if(selected){
                    this.props.actions.addPlayer(player.userName);
                }
                else {
                    this.props.actions.removePlayer(player.userName);
                }
            }
        };

        for (var i = 0; i < users.length; i++) {
            text = data[i];
            rows.push(<ClickableItem user={name} key={name} onClick={OnClick}/>);
        }
        console.log("Rendered List");
        return (
            <form>
                <ul>
                    {rows}
                </ul>
            </form>
        );
    }
}
class ClickableItem extends Component {

    render() {

        return(
            <li onClick={this.props.OnClick}>{this.props.text}</li>
        );
    }

}

export default ClickableList;