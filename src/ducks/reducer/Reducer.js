import axios from 'axios';

const initialState = {
    title: ['FORTNITE', 'UNREAL TOURNAMENT', 'TEKKEN 7'],
    img: '',
    description: ''
}

const GAME_TITLE = 'GAME_TITLE';
const GAME_IMAGE = 'GAME_IMAGE';
const GAME_DESCRIPTION = 'GAME_DESCRIPTION';



export default function reducer(state = initialState, action) {
    switch (action) {
        case GAME_TITLE:
            return Object.assign({}, state, { GAME_TITLE: [action.payload]})
        case GAME_IMAGE:
            return Object.assign({}, state, { GAME_IMAGE: action.payload})
        case GAME_IMAGE:
            return Object.assign({}, state, { GAME_DESCRIPTION: action.payload})
        default:
        return state;
    }
}

export function gameTitle(val) {
    return {
        type: GAME_TITLE,
        payload: []
    }
}

export function gameImage(val) {
    return {
        type: GAME_IMAGE,
        payload: val

    }
}

export function gameDescription(val) {
    return {
        type: GAME_DESCRIPTION,
        payload: val
    }
}

let title = gameTitle();
let img = gameImage();
let description = gameDescription();