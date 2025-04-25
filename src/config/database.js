require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ Connexion réussie à la base de données"))
  .catch((err) => console.error("❌ Erreur de connexion :", err));

module.exports = sequelize;
