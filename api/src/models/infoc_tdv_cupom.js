import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_cupom extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cupom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dt_duracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vl_porcentagem: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ds_regra: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_nome: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_cupom',
    timestamps: false
  });
  return infoc_tdv_cupom;
  }
}
