import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_comunidade extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_comunidade: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_tif_usuario',
        key: 'id_usuario'
      }
    },
    ds_capa: {
      type: DataTypes.STRING(1555),
      allowNull: true
    },
    nm_comunidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(2555),
      allowNull: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_tif_comunidade',
    timestamps: false
  });
  return infod_tif_comunidade;
  }
}
