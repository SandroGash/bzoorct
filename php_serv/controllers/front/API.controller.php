<?php
require_once "models/front/API.fisher.php";

class APIController {
    private $apiFisher;

    public function __construct(){
        $this->apiFisher = new APIFisher(); 
    }

    public function getAnimals(){
        $animals = $this->apiFisher->getDBAnimals();
        echo "<pre>";
        print_r ($animals);
        echo "</pre>";
    }

    public function getAnimal($idAnimal){
        $infosAnimal = $this->apiFisher->getDBAnimal($idAnimal);
        echo "<pre>";
        print_r ($infosAnimal);
        echo "</pre>";
    }

    public function getHabitats(){
        $habitats = $this->apiFisher->getDBHabitats();
        echo "<pre>";
        print_r ($habitats);
        echo "</pre>";
    }

    public function getRaces(){
        $races = $this->apiFisher->getDBRaces();
        echo "<pre>";
        print_r ($races);
        echo "</pre>";
    }

    public function getRace($idRace){
        $infosRace = $this->apiFisher->getDBRace($idRace);
        echo "<pre>";
        print_r ($infosRace);
        echo "</pre>";;
    }

    public function getUser(){
        echo "données JSON de l'utilisateur demandées";
    }

    public function getUsers(){
        echo "données JSON des utilsateurs demandées";
    }

    public function getServices(){
        $services = $this->apiFisher->getDBServices();
        echo "<pre>";
        print_r ($services);
        echo "</pre>";;
    }

    public function getReports(){
        echo "données JSON des rapports demandées";
    }

    public function getFood(){
        echo "données JSON des repas demandées";
    }
}