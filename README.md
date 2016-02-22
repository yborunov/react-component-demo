# React Component Demo

Comments List component that does request API and renders comments list with body and author information of a comment

Uses separation between smart and pure components. 
The pure component receives all required data via props, whereas the smart component conducts initialization logic before rendering pure component: 
* makes request to API;
* saves comments list to its state;
* renders actual component with comments prop from the state;
