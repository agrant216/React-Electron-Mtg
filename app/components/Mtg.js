// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Mtg.css';
import users from '../../resources/users.json';

class Mtg extends Component {
    props : {
        addPlayer: () => void,
        removePlayer: () => void
    };
    render() {
        const { addPlayer, removePlayer } = this.props;
        console.log(this.props);
        console.log({addPlayer});
        console.log(users);
        for (var i = 0; i < users.length; i++) {
            var names = users[i].Name;
        }
        return (
            <div>
                <div className={styles.backButton}>
                    <Link to="/">
                        <i className="fa fa-arrow-left fa-3x"/>
                    </Link>
                </div>
                <div className={styles.title}>
                    <h1>Welcome, Who's Playing?</h1>
                </div>
                <div className={styles.pTable}>
                    <PlayerList/>
                </div>

                <div className={styles.btnGroup}>
                    <button className={styles.btn}>Next</button>
                    <button className={styles.btn}>Add Player</button>
                    <div className={styles.btn_selected}>
                        <span>Selected:
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Mtg;

class PlayerList extends Component {
    props : {};

    render() {
        var rows = [];
        var name;
        for (var i = 0; i < users.length; i++) {
            name = users[i].Name;
            rows.push(<PlayerRow user={name} key={name}/>);
        }
        return (
            <form>
                <table>
                    <tbody>{rows}</tbody>
                </table>
            </form>
        );
    }
}
class PlayerRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            changed:false
        };

        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        console.log(event.target.id);
        this.setState({selected: event.target.checked,changed:true});
    }

    render() {
        var userName = this.props.user;
        console.log(userName + this.state.selected);
        if(this.state.changed==true){
            if (this.state.selected == true) {
                console.log("checked");

            } else 
                console.log("unchecked");
        }
        return (
            <tr className={styles.pRow}>
                <td>
                    <label className={styles.pLabel}>
                        <input
                            className={styles.pCheck}
                            id={userName}
                            type="checkbox"
                            checked={this.state.selected}
                            onChange={this.handleChange}/>{userName}
                    </label>
                </td>
            </tr>
        );
    }
}