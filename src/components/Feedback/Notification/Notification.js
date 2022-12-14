import PropTypes from 'prop-types';

import { NotificationText } from "./Notification.styled";

export const Notification = ({message}) => {
    return (
        <NotificationText>{message}</NotificationText>
    )
};

Notification.prototype = {
    message: PropTypes.string.isRequired,
};