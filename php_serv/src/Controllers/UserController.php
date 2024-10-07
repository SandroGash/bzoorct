<?php

namespace Zoo\Management\Controllers;

use Zoo\Management\Models\Entities\UserModel;
use Zoo\Management\Models\Connection\Model;



class UserController {
    private $userModel;

    public function __construct() {
        $this->userModel = new UserModel();
    }

    public function getUsers(){
        $users = $this->userModel->getDBUsers();  // Récupérer les données via Model
        return Model::sendJSON($users);
    }

    // Récupérer les informations d'un utilisateur spécifique
    public function getUser($idUser){
        $infosUser = $this->userModel->getDBUser($idUser);
        return Model::sendJSON($infosUser);
    
    }
}