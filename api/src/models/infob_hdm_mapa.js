import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_mapa extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_mapa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_endereco: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nr_HDM_cep: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_mapa',
    timestamps: false
  });
  return infob_hdm_mapa;
  }
}
