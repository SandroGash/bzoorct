-- Active: 1725438521082@@127.0.0.1@3306
CREATE DATABASE bzoorctsql;

use bzoorctsql;

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    password VARCHAR(250) NOT NULL,
    firstname VARCHAR(150) NOT NULL,
    username VARCHAR(150) UNIQUE,
    role VARCHAR(50),
    authorized BOOLEAN NOT NULL
);

CREATE TABLE admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(150) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(150) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE vet (
    vet_id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(150) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE image (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250),
    image_URL VARCHAR(250)
);

CREATE TABLE service (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250),
    description VARCHAR(250),
    image_id INT,
    FOREIGN KEY (image_id) REFERENCES image (image_id)
);

CREATE TABLE race (
    race_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150),
    habitat VARCHAR(150)
);

CREATE TABLE animal (
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150),
    race_id INT,
    image_id INT,
    FOREIGN KEY (race_id) REFERENCES race (race_id),
    FOREIGN KEY (image_id) REFERENCES image (image_id)
);

CREATE TABLE food (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    quantity INT,
    type VARCHAR(250),
    date DATETIME,
    animal_id INT,
    employee_id INT,
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (employee_id) REFERENCES employee (employee_id)
);

CREATE TABLE habitat (
    habitat_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150),
    description VARCHAR(250)
);

ALTER TABLE animal
ADD habitat_id INT;

ALTER TABLE animal
ADD FOREIGN KEY (habitat_id) REFERENCES habitat (habitat_id);

CREATE TABLE report (
    report_id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(150),
    animal_health VARCHAR(250),
    date DATETIME,
    animal_id INT,
    habitat_id INT,
    food_id INT,
    vet_id INT,
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (habitat_id) REFERENCES habitat (habitat_id),
    FOREIGN KEY (food_id) REFERENCES food (food_id),
    FOREIGN KEY (vet_id) REFERENCES vet (vet_id)
);


CREATE TABLE race_habitat (
    race_id INT ,
    habitat_id INT,
    PRIMARY KEY (race_id, habitat_id),   
    FOREIGN KEY (race_id) REFERENCES race (race_id),
    FOREIGN KEY (habitat_id) REFERENCES habitat (habitat_id)
);  