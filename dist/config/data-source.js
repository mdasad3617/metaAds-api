"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const ormConfig = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Mdasad',
    database: process.env.DB_DATABASE || 'metaAds',
    migrationsTransactionMode: 'each',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: false,
    migrationsRun: process.env.NODE_ENV === 'production',
    dropSchema: false,
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}']
};
exports.AppDataSource = new typeorm_1.DataSource(ormConfig);
exports.default = ormConfig;
//# sourceMappingURL=data-source.js.map