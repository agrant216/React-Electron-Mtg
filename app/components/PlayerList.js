import React, { Component } from 'react';
import styles from './Mtg.css';
import users from '../../resources/users.json';

class PlayerList extends Component {

    render() {
        var rows = [];
        var name;
        console.log(this.props.actions);
        var OnClick = (selected, player) => {
            if(selected){
                console.log("up "+player.userName);
                this.props.actions.addPlayer(player.userName);
            }
            else {
                console.log("down "+player.userName);
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
class PlayerRow extends Component {
     constructor(props) {
         super(props);
         this.state = {
             unselected: true,
         };

         this.handleChange = this
             .handleChange
             .bind(this);
     }
     handleChange(event) {
         this.setState({unselected: !this.state.unselected});
         console.log("set state")
     }

    render() {
        var userName = this.props.user;
        var style;
        if(!this.state.unselected){
            style = styles.pRowSelected;
        }
        else style = styles.pRow;
        console.log(style);
        return (
            
            <li className={style} onClick={()=>{{this.handleChange()};console.log(this.state.unselected);this.props.OnClick(this.state.unselected,{userName});}}>
                <span className={styles.pLabel}>{userName}</span>
            </li>
            
        );
    }
}
export default PlayerList;