var $ = jQuery = require('../../components/jquery/dist/jquery');
//var bootstrap = require('../../components/bootstrap/assets/javascripts/bootstrap');
var React = require('../../components/react/react.js');
var HelloWorld = require('./HelloWorld.jsx');

React.render(
    <HelloWorld />,
    document.getElementById('example')
);