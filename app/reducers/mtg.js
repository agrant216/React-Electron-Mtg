// @flow
import { PLAYER_INCREMENT, PLAYER_DECREMENT } from '../actions/players';

const initialState = {
    players: 0
}

export default function counter(state = initialState, action: Object) {
    switch (action.type) {
        case PLAYER_INCREMENT:
            return state.players + 1;
        case PLAYER_DECREMENT:
            return state.players - 1;
        default:
            return state;
    }
}
