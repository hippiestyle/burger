CREATE SCHEMA burgers_DB;

USE burgers_DB; 

CREATE TABLE IF NOT EXISTS burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);