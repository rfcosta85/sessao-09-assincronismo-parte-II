function melhorBandaDeRock(banda) {
    return new Promise((resolve, reject) => {
        if (banda == "Queen") {
            resolve({
                success: true,
                nomeDaBanda: banda,
                mensagem: banda + " é a melhor banda de todos os tempos!"
            })
        } else {
            reject({
                success: false,
                mensagem: "Eu não tenho certeza!"
            })
        }
    })
}

function melhorMusicaDeRock(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve("Bohemian Rhapsody do " + response.nomeDaBanda);
        } else {
            reject("Você conhece Queen?");
        }
    });
}

melhorBandaDeRock("Queen")
    .then(response => {
        console.log("Verificando a resposta...");
        return melhorMusicaDeRock(response);
    })
    .then(response => {
        console.log("Procurando a melhor canção");
        console.log(response);
    })
    .catch(err => {
        console.log(err.mensagem);
    })