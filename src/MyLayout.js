import React from 'react'
import { Sidebar, Layout } from 'react-admin';
import MyAppBar from './MyAppBar';
import MyNotification from './MyNotification';

const MySidebar = props => {
    return (
        <Sidebar {...props} />
    );
};

const MyLayout = props => 
<Layout
    {...props}
    appBar={MyAppBar}
    sidebar={MySidebar}
    notification={MyNotification}
/>;

export default MyLayout;