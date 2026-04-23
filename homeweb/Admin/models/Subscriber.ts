import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../functions";

interface SubscriberAttributes {
  id?: number;
  email: string;
  created_at: string;
}

class Subscriber extends Model<SubscriberAttributes> implements SubscriberAttributes {
  public id?: number;
  public email!: string;
  public created_at!: string;
}

Subscriber.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    created_at: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "subscribers",
    timestamps: false,
  }
);

export default Subscriber;
