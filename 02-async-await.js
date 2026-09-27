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

async function melhorBanda() {
    try {
        const melhorBandaDeRockResponse = await melhorBandaDeRock("Queen");
    console.log(melhorBandaDeRockResponse);
    const melhorMusicaDeRockResponse = await melhorMusicaDeRock(melhorBandaDeRockResponse);
    console.log(melhorMusicaDeRockResponse);
    } catch (err) {
        console.log(err.mensagem);
    }
}

melhorBanda();