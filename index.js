// "use stricted";
"use strict";

// React.createElement have 3 argument
// const title = React.createElement (
// 	'h1', // the first argument create the element
// 	{id: 'title', className: 'header'}, // this object are the property that the element will have
// 	'hello world' //any child content this element
// );

// ReactDom.render takes 2 argument
// ReactDom.render(
// 	title, // name of the element
// 	document.getElementById('react-container') // render to the DOM
// );

// es6 shorthand structure
const { createElement } = React;
const { render } = ReactDOM;


let element = 'h1'; // the first argument create the element
let attribute = {id: 'title', className: 'header'}; // this object are the property that the element will have
let childnode = 'hello world first react script'; //any child content this element
let reactContainerId = document.getElementById('react-container');

const title = createElement ( element , attribute , childnode );

render( title , reactContainerId );
