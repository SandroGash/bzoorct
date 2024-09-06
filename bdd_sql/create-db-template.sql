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

use bzoorctsql;

INSERT INTO `habitat` (`name`, `description`) VALUES
('Marais', 'Zones humides et marécageuses'),
('Jungle', 'Forêts tropicales denses'),
('Savane', 'Régions de prairies ouvertes');


INSERT INTO `race` (`name`, `habitat`) VALUES
('Caméléon', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Gorille', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Iguane', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Jaguar', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Léopard', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Orang-outan', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Tigre', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Perroquet', (SELECT habitat_id FROM habitat WHERE name = 'Jungle')),
('Lézar', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Macaque', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Aigle', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Mésange', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Elephant', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Phacochère', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Girafe', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Gueppard', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Hyène', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Lion', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Lionne', (SELECT habitat_id FROM habitat WHERE name = 'Savane')),
('Alligator', (SELECT habitat_id FROM habitat WHERE name = 'Marais')),
('Canard', (SELECT habitat_id FROM habitat WHERE name = 'Marais')),
('Cigogne', (SELECT habitat_id FROM habitat WHERE name = 'Marais')),
('Crocodile', (SELECT habitat_id FROM habitat WHERE name = 'Marais')),
('Grenouille', (SELECT habitat_id FROM habitat WHERE name = 'Marais'));


INSERT INTO `animal` (`name`, `race_id`, `image_id`) VALUES 
('Léon', (SELECT race_id FROM race WHERE name = 'Caméléon'), NULL),
('Ella', (SELECT race_id FROM race WHERE name = 'Gorille'), NULL),
('Kiki', (SELECT race_id FROM race WHERE name = 'Iguane'), NULL),
('Rio', (SELECT race_id FROM race WHERE name = 'Jaguar'), NULL),
('Tigrou', (SELECT race_id FROM race WHERE name = 'Léopard'), NULL),
('Bobby', (SELECT race_id FROM race WHERE name = 'Lézar'), NULL),
('Zara', (SELECT race_id FROM race WHERE name = 'Macaque'), NULL),
('Milo', (SELECT race_id FROM race WHERE name = 'Orang-outan'), NULL),
('Sasha', (SELECT race_id FROM race WHERE name = 'Tigre'), NULL),
('Nala', (SELECT race_id FROM race WHERE name = 'Aigle'), NULL),
('Rocky', (SELECT race_id FROM race WHERE name = 'Alligator'), NULL),
('Jumbo', (SELECT race_id FROM race WHERE name = 'Canard'), NULL),
('Luna', (SELECT race_id FROM race WHERE name = 'Castor'), NULL),
('Chico', (SELECT race_id FROM race WHERE name = 'Castor'), NULL),
('Polly', (SELECT race_id FROM race WHERE name = 'Cigogne'), NULL),
('Gizmo', (SELECT race_id FROM race WHERE name = 'Cigogne'), NULL),
('Coco', (SELECT race_id FROM race WHERE name = 'Crocodile'), NULL),
('Flora', (SELECT race_id FROM race WHERE name = 'Grenouille'), NULL),
('Boris', (SELECT race_id FROM race WHERE name = 'Mésange'), NULL),
('Raja', (SELECT race_id FROM race WHERE name = 'Elephant'), NULL),
('Django', (SELECT race_id FROM race WHERE name = 'Elephant'), NULL),
('Pepper', (SELECT race_id FROM race WHERE name = 'Phacochère'), NULL),
('Simba', (SELECT race_id FROM race WHERE name = 'Girafe'), NULL),
('Zazu', (SELECT race_id FROM race WHERE name = 'Gueppard'), NULL),
('Nemo', (SELECT race_id FROM race WHERE name = 'Hyène'), NULL),
('Roxy', (SELECT race_id FROM race WHERE name = 'Lion'), NULL),
('Tito', (SELECT race_id FROM race WHERE name = 'Lion'), NULL),
('Olaf', (SELECT race_id FROM race WHERE name = 'Lionne'), NULL),
('Jazzy', (SELECT race_id FROM race WHERE name = 'Perroquet'), NULL),
('Ivy', (SELECT race_id FROM race WHERE name = 'Girafe'), NULL);

INSERT INTO `animal` (`name`, `race_id`, `habitat_id`, `image_id`) VALUES 
('Léon', (SELECT race_id FROM race WHERE name = 'Caméléon'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Ella', (SELECT race_id FROM race WHERE name = 'Gorille'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Kiki', (SELECT race_id FROM race WHERE name = 'Iguane'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Rio', (SELECT race_id FROM race WHERE name = 'Jaguar'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Tigrou', (SELECT race_id FROM race WHERE name = 'Léopard'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Bobby', (SELECT race_id FROM race WHERE name = 'Lézar'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Zara', (SELECT race_id FROM race WHERE name = 'Macaque'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Milo', (SELECT race_id FROM race WHERE name = 'Orang-outan'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Sasha', (SELECT race_id FROM race WHERE name = 'Tigre'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Nala', (SELECT race_id FROM race WHERE name = 'Aigle'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Rocky', (SELECT race_id FROM race WHERE name = 'Alligator'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Jumbo', (SELECT race_id FROM race WHERE name = 'Canard'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Luna', (SELECT race_id FROM race WHERE name = 'Castor'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Chico', (SELECT race_id FROM race WHERE name = 'Castor'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Polly', (SELECT race_id FROM race WHERE name = 'Cigogne'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Gizmo', (SELECT race_id FROM race WHERE name = 'Cigogne'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Coco', (SELECT race_id FROM race WHERE name = 'Crocodile'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Flora', (SELECT race_id FROM race WHERE name = 'Grenouille'), (SELECT habitat_id FROM habitat WHERE name = 'Marais'), NULL),
('Boris', (SELECT race_id FROM race WHERE name = 'Mésange'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Raja', (SELECT race_id FROM race WHERE name = 'Elephant'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Django', (SELECT race_id FROM race WHERE name = 'Elephant'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Pepper', (SELECT race_id FROM race WHERE name = 'Phacochère'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Simba', (SELECT race_id FROM race WHERE name = 'Girafe'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Zazu', (SELECT race_id FROM race WHERE name = 'Gueppard'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Nemo', (SELECT race_id FROM race WHERE name = 'Hyène'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Roxy', (SELECT race_id FROM race WHERE name = 'Lion'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Tito', (SELECT race_id FROM race WHERE name = 'Lion'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Olaf', (SELECT race_id FROM race WHERE name = 'Lionne'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL),
('Jazzy', (SELECT race_id FROM race WHERE name = 'Perroquet'), (SELECT habitat_id FROM habitat WHERE name = 'Jungle'), NULL),
('Ivy', (SELECT race_id FROM race WHERE name = 'Girafe'), (SELECT habitat_id FROM habitat WHERE name = 'Savane'), NULL);


UPDATE animal
SET habitat_id = (SELECT habitat_id FROM habitat WHERE name = 'Jungle')
WHERE race_id IN (
  SELECT race_id FROM race WHERE name IN ('Caméléon', 'Gorille', 'Iguane', 'Jaguar', 'Léopard', 'Orang-outan', 'Tigre', 'Perroquet')
);

UPDATE animal
SET habitat_id = (SELECT habitat_id FROM habitat WHERE name = 'Savane')
WHERE race_id IN (
  SELECT race_id FROM race WHERE name IN ('Lézar', 'Macaque', 'Aigle', 'Mésange', 'Elephant', 'Phacochère', 'Girafe', 'Gueppard', 'Hyène', 'Lion', 'Lionne')
);

UPDATE animal
SET habitat_id = (SELECT habitat_id FROM habitat WHERE name = 'Marais')
WHERE race_id IN (
  SELECT race_id FROM race WHERE name IN ('Alligator', 'Canard', 'Cigogne', 'Crocodile', 'Grenouille')
);

UPDATE animal
SET habitat_id = (SELECT habitat_id FROM habitat WHERE name = 'Marais')
WHERE race_id IN (
  SELECT race_id FROM race WHERE name IN ('Castor')
);

UPDATE animal
SET habitat_id = (SELECT habitat_id FROM habitat WHERE name = 'Marais')
WHERE name IN ('Luna', 'Chico');