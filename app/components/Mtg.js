// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Mtg.css';
import PlayerList from './PlayerList'

class Mtg extends Component {
    // props : {
    //     addPlayer: () => void,
    //     removePlayer: () => void
    // };
    render() {
        const { addPlayer, removePlayer } = this.props;
        console.log(this.props);
        //console.log(store.getState());
        
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
                        <span>Selected: </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Mtg;
