<?php
namespace Zoo\Management\Controllers;

use Zoo\Management\Models\Entities\APIFisher;
use Zoo\Management\Models\Connection\Model;


class APIController {
    private $apiFisher;

    public function __construct(){
        $this->apiFisher = new APIFisher(); 
    }

    // Utilisation de Model pour récupérer les animaux
    public function getAnimals(){
        $animals = $this->apiFisher->getDBAnimals();
        return Model::sendJSON($animals);
    }

    public function getAnimal($idAnimal){        
        $infosAnimal = $this->apiFisher->getDBAnimal($idAnimal);
        return Model::sendJSON($infosAnimal);
    }

    public function getHabitats(){
        $habitats = $this->apiFisher->getDBHabitats();
        return Model::sendJSON( $habitats);
    }

    public function getHabitat($idHabitat){        
        $infosHabitat = $this->apiFisher->getDBHabitat($idHabitat);
        return Model::sendJSON($infosHabitat);
    }

    // Récupérer toutes les races
    public function getRaces(){
        $races = $this->apiFisher->getDBRaces();
        return Model::sendJSON($races);
    }

    // Récupérer une race spécifique par son ID
    public function getRace($idRace){
        $infosRace = $this->apiFisher->getDBRace($idRace);
        return Model::sendJSON($infosRace);
    }

    // Récupérer tous les services
    public function getServices(){
        $services = $this->apiFisher->getDBServices();
        return Model::sendJSON($services);
    } 

    
}