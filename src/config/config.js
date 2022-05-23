require('dotenv').config()

const account = {
        "development": {
            username: process.env.NODE_USER,
            password: process.env.NODE_PASSWORD,
            database: process.env.NODE_DATABASE,
            host: "127.0.0.1",
            dialect: "mysql",
            use_env_variable: "DATABASE_URL"
        },
        "test": {
            use_env_variable: "DATABASE_URL",
            "dialect": "mysql"
        },
        "production": {
            use_env_variable: "DATABASE_URL",
            "dialect": "mysql"
        }
}

module.exports = account