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
}