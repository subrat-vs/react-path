let h1 = document.createElement('h1');
h1.textContent = 'Hello I am DOM!';
document.body.appendChild(h1);

let reactH1 = React.createElement('h1', null, 'Hello I am React!');
ReactDOM.render(reactH1, document.getElementById('root'));