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


export const NOTIFICATION_MAP = [
  {
    htmlClasses: ["notification-warning"],
    name: "warning"
  },
  {
    htmlClasses: ["notification-error"],
    name: "error"
  },
  {
    htmlClasses: ["notification-info"],
    name: "info"
  },
  {
    htmlClasses: ["notification-success"],
    name: "success"
  },
  {
    htmlClasses: ["notification-default"],
    name: "default"
  },
];


export const NOTIFICATION_TYPES = {
    fetch: {
        from: 'fetch',
        type: 'info',
        title: 'Fetch',
        message: 'Leads getted!',
        insert: 'top',
        container: 'top-right',
        dismiss: { duration: 3000 },
        dismissable: { click: true }
    },
    update: {
        from: 'update',
        type: 'success',
        title: 'Success',
        message: 'Lead saved!',
        insert: 'top',
        container: 'top-right',
        dismiss: { duration: 3000 },
        dismissable: { click: true }
    },
    delete: {
        from: 'delete',
        type: 'error',
        title: 'Deleted',
        message: 'Lead deleted!',
        insert: 'top',
        container: 'top-right',
        dismiss: { duration: 3000 },
        dismissable: { click: true }
    },
};
