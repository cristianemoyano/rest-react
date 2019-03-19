import {combineReducers} from 'redux';

import {
    UPDATE_LEAD_FAILED as UPDATE_LEAD_FAILED_ACTION,
    UPDATE_LEAD_SUCCESS as UPDATE_LEAD_SUCCESS_ACTION,
    FETCH_LEAD_FAILED as FETCH_LEAD_FAILED_ACTION,
    FETCH_LEAD_SUCCESS as FETCH_LEAD_SUCCESS_ACTION,
    DELETE_LEAD_FAILED as DELETE_LEAD_FAILED_ACTION,
    DELETE_LEAD_SUCCESS as DELETE_LEAD_SUCCESS_ACTION,
    SHOW_NOTIFICATION as SHOW_NOTIFICATION_ACTION,
    HIDE_NOTIFICATION as HIDE_NOTIFICATION_ACTION,
} from '../actions/leads';


const updateSuccess = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === UPDATE_LEAD_SUCCESS_ACTION) {
        newState = payload;
    }
    if (type === UPDATE_LEAD_FAILED_ACTION) {
        newState = {};
    }

    return newState;
};

const leadsItems = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === FETCH_LEAD_SUCCESS_ACTION) {
        newState = payload;
    }
    if (type === FETCH_LEAD_FAILED_ACTION) {
        newState = {};
    }

    return newState;
};

const deleteSuccess = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === DELETE_LEAD_SUCCESS_ACTION) {
        newState = payload;
    }
    if (type === DELETE_LEAD_FAILED_ACTION) {
        newState = {};
    }

    return newState;
};

const notification = (state = { show: false }, {type, payload}) => {
    let newState = state;

    if (type === SHOW_NOTIFICATION_ACTION || type === HIDE_NOTIFICATION_ACTION) {
        newState = payload;
    }

    return newState;
};



export default combineReducers({
    updateSuccess,
    leadsItems,
    deleteSuccess,
    notification,
});
