const h1 = React.createElement('h1', null, "ad")
const h2 = React.createElement('h2', null, "Abhay")
const div = React.createElement('div', {id:"baap"}, [h1,h2]);
const root = ReactDOM.createRoot(document.querySelector("#root"))
// h1.innerHTML = "asd"
root.render(div)

