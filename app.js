const argv = require('./config/yargs').argv;
const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');


//console.log(argv)

comando = argv._[0]

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion)
            .then(tarea => {
                console.log(tarea);
            })
            .catch(err => console.log(err))

        break;

    case 'listar':
        console.log("listar tareas");
        porHacer.getListado().then(listado => {
                for (let tarea of listado) {
                    console.log('=== tarea por Hacer ===='.green)
                    console.log(`${tarea.descripcion}`.green)
                    console.log('Estado: ', `${tarea.completado}`.green)
                    console.log('========================'.green)
                }
            })
            .catch(err => console.log(err))

        break;

    case 'actualizar':
        console.log("Actualizar tarea");
        porHacer.actualizar(argv.descripcion, argv.completado).then(actualizado => console.log(actualizado))
        break;
    case 'borrar':
        console.log("Borrar tarea");
        porHacer.borrar(argv.descripcion).then(borrado => console.log(borrado))
        break;

    default:
        console.log("Comando desconocido");
}