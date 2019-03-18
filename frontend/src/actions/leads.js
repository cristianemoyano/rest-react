import {
  updateLead as updateLeadApi,
  fetchLead as fetchLeadApi,
  deleteLead as deleteLeadApi,
} from '../api/leads';

export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';
export const UPDATE_LEAD_FAILED = 'UPDATE_LEAD_FAILED';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_LEAD_FAILED = 'FETCH_LEAD_FAILED';
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';
export const DELETE_LEAD_FAILED = 'DELETE_LEAD_FAILED';


// UPDATE LEAD ACTION
const updateLeadFormSuccess = (leadUpdateResults) => (
    {type: UPDATE_LEAD_SUCCESS, payload: leadUpdateResults}
);
const updateLeadFormFailed = (err) => ({type: UPDATE_LEAD_FAILED, payload: err});



const updateLeadSuccess = (leadUpdateResults) => (dispatch) => {
    dispatch(updateLeadFormSuccess(leadUpdateResults));
    dispatch(fetchLead());
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
};

const deleteLeadFailed = (err) => (dispatch) => {
    dispatch(deleteLeadActionFailed(err));
};


export const deleteLead = (leadId, params) => (dispatch) => {
    return deleteLeadApi(leadId, params).then(
        (result) => dispatch(deleteLeadSuccess(result))
    ).catch((err) => dispatch(deleteLeadFailed(err)));
};
