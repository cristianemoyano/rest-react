const UPDATE_LEAD_URL = 'api/leads/';
const FETCH_LEAD_URL = 'api/leads/';
const getDeleteLeadUrl = (leadId) => `api/lead/${leadId}/delete`;

export const updateLead = (params) => (
    fetch(UPDATE_LEAD_URL, params)
        .then((resultData) => resultData)
);

export const fetchLead = () => (
    fetch(UPDATE_LEAD_URL)
        .then((resultData) => resultData.json())
);

export const deleteLead = (leadId, params) => (
    fetch(getDeleteLeadUrl(leadId), params)
        .then((resultData) => resultData)
);
