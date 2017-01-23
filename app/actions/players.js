// @flow
export const PLAYER_ADD = 'PLAYER_ADD';
export const PLAYER_REMOVE = 'PLAYER_REMOVE';
export const SET_MODE = 'SET_MODE';


export function addPlayer(player) {
    return {
        type: PLAYER_ADD,
        name:player
    };
}

export function removePlayer(player) {
    return {
        type: PLAYER_REMOVE,
        name: player
    };
}

export function setMode(game) {
    return{
        type: SET_MODE,
        mode: game
    };
}
