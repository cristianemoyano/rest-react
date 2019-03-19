import {
  updateLead as updateLeadApi,
  fetchLead as fetchLeadApi,
  deleteLead as deleteLeadApi,
} from '../api/leads';

import { NOTIFICATION_TYPES } from '../common/constants';

export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';
export const UPDATE_LEAD_FAILED = 'UPDATE_LEAD_FAILED';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_LEAD_FAILED = 'FETCH_LEAD_FAILED';
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';
export const DELETE_LEAD_FAILED = 'DELETE_LEAD_FAILED';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';


// UPDATE LEAD ACTION
const updateLeadFormSuccess = (leadUpdateResults) => (
    {type: UPDATE_LEAD_SUCCESS, payload: leadUpdateResults}
);
const updateLeadFormFailed = (err) => ({type: UPDATE_LEAD_FAILED, payload: err});


const updateLeadSuccess = (leadUpdateResults) => (dispatch) => {
    dispatch(updateLeadFormSuccess(leadUpdateResults));
    dispatch(fetchLead());
    dispatch(showNotification({
        show: true,
        from: NOTIFICATION_TYPES.update.from,
        type: NOTIFICATION_TYPES.update.type,
        title: NOTIFICATION_TYPES.update.title,
        message: NOTIFICATION_TYPES.update.message,
        insert: NOTIFICATION_TYPES.update.insert,
        container: NOTIFICATION_TYPES.update.container,
        dismiss: NOTIFICATION_TYPES.update.dismiss,
        dismissable: NOTIFICATION_TYPES.update.dismissable
    }));
    dispatch(hideNotification());
};

const updateLeadFailed = (err) => (dispatch) => {
    dispatch(updateLeadFormFailed(err));
};


export const updateLead = (params) => (dispatch) => {
    return updateLeadApi(params).then(
        (result) => dispatch(updateLeadSuccess(result))
    ).catch((err) => dispatch(updateLeadFailed(err)));
};


// FETCH LEAD ACTION
const fetchLeadActionSuccess = (leadFetchResults) => (
    {type: FETCH_LEAD_SUCCESS, payload: leadFetchResults}
);
const fetchLeadActionFailed = (err) => ({type: FETCH_LEAD_FAILED, payload: err});



const fetchLeadSuccess = (leadFetchResults) => (dispatch) => {
    dispatch(fetchLeadActionSuccess(leadFetchResults));
};

const fetchLeadFailed = (err) => (dispatch) => {
    dispatch(fetchLeadActionFailed(err));
};


export const fetchLead = () => (dispatch) => {
    return fetchLeadApi().then(
        (result) => dispatch(fetchLeadSuccess(result))
    ).catch((err) => dispatch(fetchLeadFailed(err)));
};


// DELETE LEAD ACTION
const deleteLeadActionSuccess = (leadDeleteResults) => (
    {type: DELETE_LEAD_SUCCESS, payload: leadDeleteResults}
);
const deleteLeadActionFailed = (err) => ({type: DELETE_LEAD_FAILED, payload: err});



const deleteLeadSuccess = (leadDeleteResults) => (dispatch) => {
    dispatch(deleteLeadActionSuccess(leadDeleteResults));
    dispatch(fetchLead());
    dispatch(showNotification({
        show: true,
        from: NOTIFICATION_TYPES.delete.from,
        type: NOTIFICATION_TYPES.delete.type,
        title: NOTIFICATION_TYPES.delete.title,
        message: NOTIFICATION_TYPES.delete.message,
        insert: NOTIFICATION_TYPES.delete.insert,
        container: NOTIFICATION_TYPES.delete.container,
        dismiss: NOTIFICATION_TYPES.delete.dismiss,
        dismissable: NOTIFICATION_TYPES.delete.dismissable
    }));
    dispatch(hideNotification());
};

const deleteLeadFailed = (err) => (dispatch) => {
    dispatch(deleteLeadActionFailed(err));
};


export const deleteLead = (leadId, params) => (dispatch) => {
    return deleteLeadApi(leadId, params).then(
        (result) => dispatch(deleteLeadSuccess(result))
    ).catch((err) => dispatch(deleteLeadFailed(err)));
};

// SHOW NOTIFICATION
export const showNotification = (show) => ({type: SHOW_NOTIFICATION, payload: show});
export const hideNotification = () => ({type: HIDE_NOTIFICATION, payload: {show: false}});
