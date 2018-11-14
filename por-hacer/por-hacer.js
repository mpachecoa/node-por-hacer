let ListaPorHacer = []

const fs = require('fs');

const cargarDB = async() => {
    try {
        ListaPorHacer = require('../data/tarea.json');
    } catch (error) {
        ListaPorHacer = [];
    }
    return true

}

const guardarDB = async() => {
    let data = JSON.stringify(ListaPorHacer);
    fs.writeFile('./data/tarea.json', data, (err) => {
        if (err) throw err;
    })
    return true;
}

let crear = async(descripcion) => {
    await cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    };
    ListaPorHacer.push(porHacer);

    let res = await guardarDB()
    if (res) {
        console.log('Archivo guardado...')
        return porHacer;
    }

}

const getListado = async() => {
    await cargarDB()
    return ListaPorHacer;
}

const actualizar = async(descripcion, completado = true) => {
    await cargarDB()
    let index = ListaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        ListaPorHacer[index].completado = completado;
        guardado = await guardarDB()
        return true;
    } else {
        return false;
    }
}

const borrar = async(descripcion) => {
    console.log('iniciar')
    await cargarDB()
    console.log(ListaPorHacer)
    console.log(descripcion)
    lista = ListaPorHacer.filter(tarea => tarea.descripcion != descripcion)
    console.log(lista)
    if (lista != ListaPorHacer) {
        ListaPorHacer = lista
        guardado = await guardarDB()
        return true;
    } else
        return false;
}


module.exports = { crear, getListado, actualizar, borrar };