// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Mtg.css';
import users from  '../../resources/users.json';
//import {PLAYER_INCREMENT, PLAYER_DECREMENT} from

class Mtg extends Component {
    props: {
       
    };

    render() {
        //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        console.log(users);
        for(var i = 0;i <users.length; i++){
            var names = users[i].Name;
        }
        return (
          <div>
            <div className={styles.backButton}>
                <Link to="/">
                    <i className="fa fa-arrow-left fa-3x" />
                </Link>
            </div>
            <div className={styles.title}>
                <h1>Welcome, Who's Playing?</h1>
            </div>
            <div className={styles.pTable}>
                <PlayerList />
            </div>
            
        <div className={styles.btnGroup}>
          <button className={styles.btn}>Next</button>
          <button className={styles.btn}>Add Player</button>
          <div className={styles.btn_selected}><span>Selected: </span></div>
        </div>

      </div>
    );
                }
}

export default Mtg;

class PlayerList extends Component {
    props:{};

    render(){
        var rows=[];
        var name;
        for(var i = 0;i < users.length; i++){
            name = users[i].Name;
            console.log(name);
            rows.push(<PlayerRow user = {name} key= {name} / >);
      }
    return(
        <form>
            <table>
                <tbody>{rows}</tbody>
            </table>
        </form>
        );
      }
}

class PlayerRow extends Component {
    constructor(props){
        super(props);
        this.state = {selected: false};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {

        this.setState({selected:event.target.checked});

    }
    
    render(){
        var userName = this.props.user;
        console.log(userName + this.state.selected);
        if(this.state.selected==true){
            console.log("checked")
        }
        else console.log("unchecked");
        return(
            <tr className={styles.pRow}><td>
            <label className={styles.pLabel}>
                <input className={styles.pCheck} type="checkbox" checked={this.state.selected} onChange={this.handleChange}/>{userName}
            </label>
            </td></tr>
            );
            }
  }
