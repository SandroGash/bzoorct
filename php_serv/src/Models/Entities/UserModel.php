<?php
namespace Zoo\Management\Models\Entities;

use Zoo\Management\Models\Connection\Model;
use \PDO;

//Classe pour récupérer les données
class UserModel extends Model {
    public function getDBUsers(){
        $req = "SELECT * FROM users
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $reports = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $reports;
    }


    public function getDBUser($idUser){
        $req = "SELECT * FROM users                
                WHERE users.user_id = :idUser
        ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idUser", $idUser, PDO::PARAM_INT);
        $stmt->execute();
        
        // Récupérer une seule ligne avec fetch()
        $infosUser = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();    
        return $infosUser;
    }
}