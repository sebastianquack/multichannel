import React from 'react';
import { Admin, Resource, ListGuesser, Edit, Create, SimpleForm, TextInput } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
//const dataProvider = jsonServerProvider('http://localhost:3001');

import restHapiProvider from 'ra-data-rest-hapi';
const dataProvider=restHapiProvider('http://sebastians-mbp:9000');


const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);

const App = () => 
  <Admin dataProvider={dataProvider}>
    <Resource name="user" list={ListGuesser} edit={UserEdit} create={UserCreate}/>
  </Admin>
;

export default App;