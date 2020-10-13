const comprarGuantes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            talla: 'M',
            material: 'piel'
        })
    }, 2000)
});

const paseo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            distancia: 'hello',
            eso: 'chido'
        })
    }, 8000)
});

const comprarCasco = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            talla: 'M',
            material: 'plastico'
        })
    }, 1000)
});


const bicicleateada = () => {
    comprarCasco
        .then(infoGuantes => {
            console.log(infoGuantes);
            return comprarGuantes;
        })
        .then(infoPaseo => {
            console.log(infoPaseo);
            return paseo;
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            console.log("De vuelta en casa")
        })
}

bicicleateada();