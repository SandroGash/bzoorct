<?php

require_once "models/Model.php";

//Classe pour récupérer les données
class APIFIsher extends Model {
    public function getDBAnimals(){
        $req = "SELECT a.name AS animal_name, r.name AS race_name, h.name AS habitat_name
                FROM animal a
                INNER JOIN race r ON r.race_id = a.race_id
                INNER JOIN habitat h ON h.habitat_id = a.habitat_id
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $animals = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $animals;
    }

    public function getDBAnimal($idAnimal){
        $req = "SELECT a.name AS animal_name, r.name AS race_name, h.name AS habitat_name, i.image_URL
                FROM animal a
                INNER JOIN race r ON r.race_id = a.race_id
                INNER JOIN habitat h ON h.habitat_id = a.habitat_id
                INNER JOIN image i ON a.image_id = i.image_id
                WHERE a.animal_id = :idAnimal
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal",$idAnimal,PDO::PARAM_INT);
        $stmt->execute();
        $infosAnimal = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $infosAnimal;
    }

    public function getDBRaces(){
        $req = "SELECT r.name AS race_name, h.name AS habitat_name
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
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $habitats = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $habitats;
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
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $services;
    }
}