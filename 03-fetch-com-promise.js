const respostaSemPromise = fetch("https://jsonplaceholder.typicode.com/posts");

console.log("1° LOG: Resposta do fetch:",respostaSemPromise);


const respostaComPromise = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log("2° LOG: Resposta com Promise:", response));


const respostaComJSON = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log("3° LOG: Resposta com JSON: ", response.json()));

const respostaComJSONEncadeada = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(ResponseComJsonEsturuado => console.log("4° LOG: Resposta com JSON estruturado: ", ResponseComJsonEsturuado))