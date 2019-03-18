import PropTypes from 'prop-types';

export const leadsColumns = [
  {
    name: 'Nickname',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
    {
    name: 'Message',
    selector: 'message',
  },
    {
    name: 'Created',
    selector: 'created_at',
  },
];


export const LEAD_ITEMS_SHAPE = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    created_at: PropTypes.string,
});

export const LEAD_ITEMS_TITLE = 'Items';
export const LEAD_ITEMS_DEFAULT = 'Nothing to show';