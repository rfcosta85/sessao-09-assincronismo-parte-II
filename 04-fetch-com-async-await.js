async function coletaPosts()  {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("Resposta: ", await resposta.json());
}

coletaPosts();
