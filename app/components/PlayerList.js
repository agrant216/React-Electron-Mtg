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
            selected: false
        };

        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        this.setState({selected: event.target.checked,changed:true});
    }

    render() {
        var userName = this.props.user;
        return (
            <li className={styles.pRow} onClick={this.props.OnClick(this.state.selected, {userName})}>
                    <label className={styles.pLabel}>
                        <input
                            className={styles.pCheck}
                            id={userName}
                            type="checkbox"
                            checked={this.state.selected}
                            onChange={this.handleChange}/>{userName}
                    </label>
            </li>
            
        );
    }
}
export default PlayerList;