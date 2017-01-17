// @flow
import { combineReducers } from 'redux';
import { PLAYER_ADD, PLAYER_REMOVE } from '../actions/players';

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
            var players = [];
            for(var i = 0;i < state.length-1; i++){
                if(state[i]===action.name)
                    continue;
                else{
                    players.push(state[i]);
                }
            }
            return players;
        default:
            return state;
    }
}

function counter(state = 0, action: Object) {
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
    players
})
export default mtgApp;