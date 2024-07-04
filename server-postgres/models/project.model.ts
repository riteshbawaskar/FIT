import { Model, Sequelize, DataTypes } from 'sequelize';


export default class Project extends Model {
  public id?: number;
  name: string;
  description: String;
  active: Boolean;
  componentlib: [String];
  agents:[String]

}

export const ProjectMap = (sequelize: Sequelize) => {
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255)
    },
    active: {
      type: DataTypes.BOOLEAN,      
    },
    componentlib: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    agents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projects',
    timestamps: false
  });
  Project.sync();
}