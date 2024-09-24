<?php

require_once "models/Model.php";

//Classe pour récupérer les données
class APIFIsher extends Model {
    public function getDBAnimals(){
        $req = "SELECT a.name AS animal_name, r.name AS race_name, h.name AS habitat_name, h.habitat_id, a.animal_id, image.image_URL
                FROM animal a
                INNER JOIN race r ON r.race_id = a.race_id
                INNER JOIN habitat h ON h.habitat_id = a.habitat_id
                JOIN image ON a.image_id = image.image_id
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $animals = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $animals;
    }

    public function getDBAnimal($idAnimal){
        $req = "SELECT a.animal_id, image.image_URL, a.name AS animal_name, r.name AS race_name, h.name AS habitat_name, h.habitat_id 
                FROM animal a
                INNER JOIN race r ON r.race_id = a.race_id
                INNER JOIN habitat h ON h.habitat_id = a.habitat_id
                JOIN image ON a.image_id = image.image_id
                WHERE a.animal_id = :idAnimal
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->execute();
        
        // Récupérer une seule ligne avec fetch()
        $infosAnimal = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();    
        return $infosAnimal;
    }

    public function getDBRaces(){
        $req = "SELECT r.name AS race_name, h.name AS habitat_name, race_id, h.habitat_id 
            FROM race r
            INNER JOIN habitat h ON h.habitat_id = r.habitat_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $races = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $races;
    }

    public function getDBHabitats(){
        $req = "SELECT * FROM habitat
        JOIN image ON habitat.image_id = image.image_id
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $habitats = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $habitats;
    }

    public function getDBHabitat($id) {
        $req = "SELECT
                    habitat.habitat_id,
                    habitat.name AS habitat_name, 
                    habitat.description, 
                    image.name AS image_name, 
                    image.image_URL 
                FROM habitat 
                JOIN image ON habitat.image_id = image.image_id
                WHERE habitat.habitat_id = :id"; // Utiliser le nom de l'habitat pour la recherche
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":id", $id, PDO::PARAM_STR); // Lier le nom ici
        $stmt->execute();
        $infosHabitat = $stmt->fetch(PDO::FETCH_ASSOC); // Utiliser fetch si vous n'attendez qu'un seul résultat
        $stmt->closeCursor();
        return $infosHabitat;
    }

    public function getDBRace($idRace){
        $req = "SELECT r.name AS race_name, h.name AS habitat_name
                FROM race r
                INNER JOIN habitat h ON h.habitat_id = r.habitat_id
                 WHERE r.race_id = :idRace               
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idRace",$idRace,PDO::PARAM_INT);
        $stmt->execute();
        $infosRace = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $infosRace;
    }

    public function getDBServices(){
        $req = "SELECT * FROM service
                JOIN image ON service.image_id = image.image_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $services;
    }


    public function getDBReports(){
        $req = "SELECT * FROM service
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $reports = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reports;
    }


    public function getDBFood(){
        $req = "SELECT * FROM food
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $food = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $food;
    }
}