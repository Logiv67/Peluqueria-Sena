const dbService = require('../bd/Conexion');

class CrearClienteModelo {
    static async modificarEstado(est, id) {
  const query = 'UPDATE clientes SET estado = ? WHERE odcliente = ?';
try {
    est = 'inactivo';
    const resultado = dbService.query(query, [est, id]);
    if(resultado.affectedRows === 0){
    throw new Error('No se pudo crear el cliente.');
    }
    return resultado;
} catch (error) {
    throw new Error('Error al crear el cliente: ${err.message}');
}
    }
}

module.exports = CrearClienteModelo;  //Exportamos la clase