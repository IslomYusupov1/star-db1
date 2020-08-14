// import React    from 'react';
// import ReactDOM  from 'react-dom';
// import App from "./components/app";
// // import '../node_modules/font-awesome/css/font-awesome.min.css';
//
//
// ReactDOM.render(<App/>,
//     document.getElementById('root'));


fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        return res.json();
    })
    .then((body) =>{
        console.log(body)
    });