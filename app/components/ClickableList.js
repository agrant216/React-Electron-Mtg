import React, { Component } from 'react';
import styles from './Mtg.css';

//will be used exclusively for single select lists
class ClickableList extends Component {

    render() {
        var rows = [];
        var text;
        var selected; //should be state
        var allowed = this.props.allowed;
        var data = this.props.data;

        var OnClick = (selected, text) => {
            console.log(CAlick)
            if(selected == text){
                if(selected){
                    this.props.actions.addPlayer(player.userName);
                }
            else 
                selected = text;
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
            <li onClick={()=>{this.props.onClick(this.props.selected,this.props.text)}}>{this.props.text}</li>
        );
    }

}

export default ClickableList;