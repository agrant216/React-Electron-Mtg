import React, { Component } from 'react';
import styles from './Mtg.css';
import users from '../../resources/users.json';

class ClickableList extends Component {

    render() {
        var rows = [];
        var name;
        var selected = 0; //should be state
        var allowed = this.props.allowed;
        var OnClick = (selected, text) => {
            
            if(selected){
                this.props.actions.addPlayer(player.userName);
            }
            else {
                this.props.actions.removePlayer(player.userName);
            }
        };

        for (var i = 0; i < users.length; i++) {
            name = users[i].Name;
            rows.push(<PlayerRow user={name} key={name} OnClick={OnClick}/>);
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
            <li onClick>{this.props.text}</li>
        );
    }

}

export default ClickableList;