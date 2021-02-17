import React from 'react';
import jsonServerProvider from 'ra-data-json-server';

import { Admin, Login, Logout, Resource } from 'react-admin';
import authProvider from './authProvider';
import { UserList, UserEdit, UserCreate } from './users';
import MyLayout from './MyLayout';

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import UserIcon from '@material-ui/icons/Group';

//фиктивное API
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//cекция Login
const MyLoginPage = () => <Login
        backgroundImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80"
    />;

const MyLogoutButton = props => <Logout {...props} icon={<ExitToAppIcon/>} />;

const App = () => (
  <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton}l ayout={MyLayout} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);

export default App;