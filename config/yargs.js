const argv = require('yargs')
    .command('crear', 'crear un tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borrar tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = { argv }