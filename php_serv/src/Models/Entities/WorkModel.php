<?php
namespace Zoo\Management\Models\Entities;

use Zoo\Management\Models\Connection\Model;
use \PDO;

//Classe pour récupérer les données
class WorkModel extends Model {
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