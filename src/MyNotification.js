import React from 'react'
import { Notification } from 'react-admin';

const MyNotification = props => <Notification {...props} autoHideDuration={1000} />;

export default MyNotification;