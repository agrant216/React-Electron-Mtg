//import Mtg from '../components/Mtg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../components/Mtg.css';
import PlayerList from '../components/PlayerList'
import * as PlayerActions from '../actions/players';

class Mtg extends Component {

    render() {
        const { addPlayer, removePlayer, setPlayers } = this.props;
        console.log(this.props);
        
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
                    <PlayerList actions={ this.props }/>
                </div>

                <div className={styles.btnGroup}>
                    <button className={styles.btn}><Link to="/modeSelect">Next</Link></button>
                    <button className={styles.btn}>Add Player</button>
                    <div className={styles.btn_selected}>
                        <span>Selected: </span>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    players: state.mtgApp.players
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mtg);
