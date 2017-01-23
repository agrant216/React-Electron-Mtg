// @flow
import { combineReducers } from 'redux';
import { PLAYER_ADD, PLAYER_REMOVE, SET_MODE } from '../actions/players';

const initialState = {
    players: [],
    counter: 0

}
function players(state = [], action){
    switch (action.type) {
        case PLAYER_ADD:
            return [
                ...state,
                action.name
            ]
        case PLAYER_REMOVE:
            var index = state.indexOf(action.name);
            var players = state;
            players.splice(index,1);
            return players;

        default:
            return state;
    }
}
function mode(state='',action){
    if(action.type == SET_MODE){
        return action.mode;
    }
    else return state;
}

function counter(state = 0, action) {
    switch (action.type) {
        case PLAYER_ADD:
            return state + 1;
        case PLAYER_REMOVE:
            return state - 1;
        default:
            return state;
    }
}
const mtgApp = combineReducers({
    players,
    mode
})
export default mtgApp;