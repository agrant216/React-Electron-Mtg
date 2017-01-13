// @flow
export const PLAYER_INCREMENT = 'PLAYER_INCREMENT';
export const PLAYER_DECREMENT = 'PLAYER_DECREMENT';

export function increment() {
    return {
        type: PLAYER_INCREMENT
    };
}

export function decrement() {
    return {
        type: PLAYER_DECREMENT
    };
}

