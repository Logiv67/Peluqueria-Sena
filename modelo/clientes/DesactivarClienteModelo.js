const dbService = require('../bd/Conexion');

class DesactivarClienteModelo {
    static async modificarEstado(est, id) {
  const query = 'UPDATE clientes SET estado = ? WHERE odcliente = ?';
try {
    est = 'inactivo';
    const resultado = dbService.query(query, [est, id]);
    if(resultado.affectedRows === 0){
    throw new Error('No se encontró ningín cliente.');
    }
    return resultado;
} catch (error) {
    throw new Error('Error al modificar el estado del cliente: ${err.message}');
}
    }
}

module.exports = DesactivarClienteModelo;  //Exportamos la clase