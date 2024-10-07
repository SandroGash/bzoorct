<?php

require './vendor/autoload.php';



use Zoo\Management\Controllers\APIController;
use Zoo\Management\Controllers\WorkController;
use Zoo\Management\Controllers\UserController;

//Pour créer un chemin absolu
define("URL", str_replace("index.php","", (isset($_SERVER['HTTPS']) ? "https" : "http"). "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));
$apiController = new APIController();
$workController = new WorkController();
$userController = new UserController();


try{
if(empty($_GET['page'])){
    throw new Exception("La page n'existe pas!");
} else {
    $url = explode("/",filter_var($_GET['page'],FILTER_SANITIZE_URL));
    if(empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas!");
    switch($url[0]){
        case "api" :
            switch($url[1]){
                case "animals": $apiController -> getAnimals();
                break;
                case "animal":
                     if(empty($url[2])) throw new Exception("L'identifiant de l'animal est manquant!");
                     $apiController -> getAnimal($url[2]);
                break;
                case "habitats": $apiController -> getHabitats();
                break;
                case "habitat":
                    if(empty($url[2])) throw new Exception("L'identifiant de l'habitat est manquant!");
                    $apiController -> getHabitat($url[2]);
                break;
                case "races": $apiController -> getRaces();
                break;
                case "services": $apiController -> getServices();
                break;
            }
        break;
        case "work" : 
            switch($url[1]){                
                case "reports": $workController -> getReports();
                break;
                case "food": $workController -> getFood();
                break;                
            }            
        break;
        case "user" : 
            switch($url[1]){
                case "users": $userController -> getUsers();
                break;
                case "user": 
                    if(empty($url[2])) throw new Exception("L'identifiant de l'utilisateur est manquant!");
                    $userController -> getUser($url[2]);
                break;                                
            }
        break;
        default : throw new Exception("La page n'existe pas!");
    }
}
} catch (Exception $e){
    $msg = $e->getMessage();
    echo $msg;
}


