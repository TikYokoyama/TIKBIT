const db = require("../../infraestructure/database");
const { DataTypes } = require("sequelize");

const Posts = db.define(
    "Posts",
    {
        id: {
            type: DataTypes.STRING(45),
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING(45),
        },
        coment: {
            type: DataTypes.STRING(200),
        }
    },
    {
        tableName: "posts",
        timestamps: false,
    },
);

module.exports = Posts;