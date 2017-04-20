import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DisplayList from '../components/DisplayList'
import * as PlayerActions from '../actions/players';
import styles from '../components/Mtg.css';
import { Link } from 'react-router';
import ClickableList from '../components/ClickableList'

class ModeSelectPage extends React.Component {
  static propTypes = {

  }
  render() {
    var Modes = ['Free', 'Commander', 'Game of Thrones', 'Team', 'Pentagram'];
    return(
    <div>
      <div className={styles.backButton}>
          <Link to="/mtg">
              <i className="fa fa-arrow-left fa-3x"/>
          </Link>
      </div>
      <div>
        ModeSelectPage
        <div>
          <span>Mode Select:</span>
          <DisplayList data={Modes}/>
        </div>
        <div>
          <span>Selected Players:</span>
          <DisplayList data={this.props.players}/>
        </div>
        <div>
          <span>ClickList</span>
          <ClickableList data={Modes}/>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Mode: state.mtgApp.mode,
    players: state.mtgApp.players
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSelectPage);
