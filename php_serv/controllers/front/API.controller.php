<?php
require_once "models/front/API.fisher.php";
require_once "models/Model.php";

class APIController {
    private $apiFisher;

    public function __construct(){
        $this->apiFisher = new APIFisher(); 
    }

    public function getAnimals(){
        $animals = $this->apiFisher->getDBAnimals();
        Model::sendJSON($animals);
    }

    public function getAnimal($idAnimal){
        $infosAnimal = $this->apiFisher->getDBAnimal($idAnimal);
        Model::sendJSON($infosAnimal);
    }

    public function getHabitats(){
        $habitats = $this->apiFisher->getDBHabitats();
        Model::sendJSON($habitats);
    }

    public function getRaces(){
        $races = $this->apiFisher->getDBRaces();
        Model::sendJSON($races);
       
    }

    public function getRace($idRace){
        $infosRace = $this->apiFisher->getDBRace($idRace);
        Model::sendJSON($infosRace);
    }

    public function getUser(){
        echo "données JSON de l'utilisateur demandées";
    }

    public function getUsers(){
        echo "données JSON des utilsateurs demandées";
    }

    public function getServices(){
        $services = $this->apiFisher->getDBServices();
        Model::sendJSON($services);
    }

    public function getReports(){
        $reports = $this->apiFisher->getDBReports();
        Model::sendJSON($reports);
    }

    public function getFood(){
        $food = $this->apiFisher->getDBFood();
        Model::sendJSON($food);
    }
}