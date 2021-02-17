import React from 'react';

import { Create, List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

import UrlStyle from './UrlStyle';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
    </Filter>
);

const UserListTitle = () => {
    return <span>Список контактов</span>;
};

export const UserList = props => (
  <List title={<UserListTitle />} filters={<UserFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Имя'/>
      <EmailField source='email' />
      <TextField source='address.city' label='Город' />
      <TextField source='address.street' label='Улица' />
      <TextField source='address.suite' label='Дом' />
      <TextField source='phone' label='Телефон'/>
      <TextField source='company.name' label='Компания' />
      <UrlStyle source='website' label='Сайт'/>
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => {
    return <span>Контакт: {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source='name' label='Имя' />
      <TextInput source='email' />
      <TextInput source='address.city' label='Город'  />
      <TextInput source='address.street' label='Улица'  />
      <TextInput source='address.suite' label='Дом'  />
      <TextInput source='phone' label='Телефон' />
      <TextInput source='company.name' label='Компания' />
      <TextInput source='website' label='Сайт'/>
    </SimpleForm>
  </Edit>
);

const UserTitleCreate = () => {
    return <span>Добавить контакт</span>;
};

export const UserCreate = props => (
  <Create title={<UserTitleCreate />} {...props}>
    <SimpleForm>
      <TextInput source='name' label='Имя' />
      <TextInput source='email' />
      <TextInput source='address.city' label='Город'  />
      <TextInput source='address.street' label='Улица'  />
      <TextInput source='address.suite' label='Дом'  />
      <TextInput source='phone' label='Телефон' />
      <TextInput source='company.name' label='Компания' />
      <TextInput source='website' label='Сайт'/>
    </SimpleForm>
  </Create>
);