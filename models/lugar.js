/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lugar', {
    idLugar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idMunicipio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'municipio',
        key: 'idMunicipio'
      }
    },
    idComentario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'comentario',
        key: 'idComentario'
      }
    }
  }, {
    tableName: 'lugar'
  });
};
