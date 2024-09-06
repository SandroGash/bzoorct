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
        echo "données JSON de l'animal ".$idAnimal." demandées";
    }

    public function getHabitats(){
        echo "données JSON des habitats demandées";
    }

    public function getRaces(){
        echo "données JSON des races demandées";
    }

    public function getRace(){
        echo "données JSON de la race demandées";
    }

    public function getUser(){
        echo "données JSON de l'utilisateur demandées";
    }

    public function getUsers(){
        echo "données JSON des utilsateurs demandées";
    }

    public function getServices(){
        echo "données JSON des services demandées";
    }

    public function getReports(){
        echo "données JSON des rapports demandées";
    }

    public function getFood(){
        echo "données JSON des repas demandées";
    }
}