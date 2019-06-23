import React from 'react';
import { 
  Admin, 
  DeleteButton, 
  Resource, 
  ListGuesser, 
  List, 
  Datagrid, 
  Edit, 
  Create, 
  SimpleForm, 
  TextInput, 
  TextField, 
  Toolbar, 
  FileInput, 
  FileField,
  ReferenceInput,
  SelectInput   
} from 'react-admin';

import { dataProvider } from '../helpers/dataProvider.js';

import LocationInput from './LocationInput.js';

const TranslationForm = 
    <SimpleForm>
        <TextInput source="key" />
        <TextInput source="content_en" />
        <TextInput source="content_no" />
    </SimpleForm>
const TranslationEdit = props => <Edit {...props}>{TranslationForm}</Edit>;
const TranslationCreate = props => <Create {...props}>{TranslationForm}</Create>;

const PlaceList = props =>
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="name" />
    </Datagrid>
  </List>;

const PlaceForm = 
    <SimpleForm>
        <TextInput source="name" />
        
        <LocationInput/>
        
        <ReferenceInput label="audio 1" source="audio1_id" reference="file">
          <SelectInput optionText="filename" />
        </ReferenceInput>

        <ReferenceInput label="audio 2" source="audio2_id" reference="file">
          <SelectInput optionText="filename" />
        </ReferenceInput>

        <ReferenceInput label="audio 3" source="audio3_id" reference="file">
          <SelectInput optionText="filename" />
        </ReferenceInput>
        
    </SimpleForm>

const PlaceEdit = props =>   
    <Edit {...props}>
      {PlaceForm}
    </Edit>
  
const PlaceCreate = props => <Create {...props}>{PlaceForm}</Create>;

const FileList = props =>
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="edit">
        <TextField source="filename" />
    </Datagrid>
  </List>;

const FileToolbar = props => 
  <Toolbar {...props}>
    <DeleteButton undoable={false} record={props.data} />
  </Toolbar>
          
const FileEdit = props => 
  <Edit {...props} >
    <SimpleForm toolbar={<FileToolbar />}>
      <TextField source="filename" />
      <TextField source="url" />
    </SimpleForm>
  </Edit>;
        
const FileCreate = props => 
  <Create {...props}>
    <SimpleForm>
      <FileInput source="files" multiple={false}>
        <FileField source="filename" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>

const App = () => 
  <Admin dataProvider={dataProvider}>
    <Resource name="translation" list={ListGuesser} edit={TranslationEdit} create={TranslationCreate}/>
    <Resource name="place" list={PlaceList} edit={PlaceEdit} create={PlaceCreate}/>
    <Resource name="file" list={FileList} edit={FileEdit} create={FileCreate}/>
  </Admin>

export default App;