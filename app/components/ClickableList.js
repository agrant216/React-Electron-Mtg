import React, { Component } from 'react';
import styles from './Mtg.css';

class ClickableList extends Component {

    render() {
        var rows = [];
        var text;
        var selected = []; //should be state
        var allowed = this.props.allowed;
        var data = this.props.data;
        
        var OnClick = (selected, text) => {
            if(selected.length < this.props.allowed){
                if(selected){
                    this.props.actions.addPlayer(player.userName);
                }
                else {
                    this.props.actions.removePlayer(player.userName);
                }
            }
        };

        for (var i = 0; i < data.length; i++) {
            text = data[i];
            rows.push(<ClickableItem text={text} key={text} selected={false} onClick={OnClick}/>);
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
            <li onClick={()=>{this.props.OnClick(this.props.selected,this.props.text)}}>{this.props.text}</li>
        );
    }

}

export default ClickableList;