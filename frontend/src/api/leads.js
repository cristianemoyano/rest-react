const UPDATE_LEAD_URL = 'api/leads/'
const FETCH_LEAD_URL = 'api/leads/'

export const updateLead = (params) => (
    fetch(UPDATE_LEAD_URL, params)
        .then((resultData) => resultData)
);

export const fetchLead = () => (
    fetch(UPDATE_LEAD_URL)
        .then((resultData) => resultData.json())
);
