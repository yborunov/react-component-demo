# React Component Demo

`<CommentsList />` app component that does request to API and renders comments list with body and author information of a comment.

Uses separation between `smart` and `pure` components. 
The pure component receives all required data via props and does mutate its state internally, whereas the smart component conducts initialization logic before actually render pure component, in following order: 
* makes asynchronous request to API;
* saves received comments list to its state;
* renders actual component with comments prop from the state;
