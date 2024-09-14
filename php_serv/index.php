<?php


//formatage automatique de réécriture de l'URL (chemin absolu)
define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "controllers/front/API.controller.php";

$apiController = new APIController();
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


try{

    if(empty($_GET['page'])) {
        throw new Exception("La page n'existe pas!");
    } else {
        //décomposition et sécurisation de l'URL
        $url = explode("/",filter_var($_GET['page'], FILTER_SANITIZE_URL));
        //Vérifier que l'url référence est soit un élément du front soit du back 
        if(empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas!");
        switch($url[0]){
            case "front" : 
                switch($url[1]){
                    case "animals": $apiController -> getAnimals();
                    break;
                    case "animal":
                        if(empty($url[2])) throw new Exception("L'identifiant de l'animal est manquant!");
                        $apiController -> getAnimal($url[2]);
                    break;
                    case "habitats": $apiController -> getHabitats();
                    break;
                    case "races": $apiController -> getRaces();
                    break;
                    case "race":
                        if(empty($url[2])) throw new Exception("L'identifiant de cette espèce est manquant!");
                        $apiController -> getRace($url[2]);
                    break;
                    case "user": 
                        if(empty($url[2])) throw new Exception("L'identifiant de l'utilisateur est manquant!");
                    $apiController -> getUser($url[2]);
                    
                    break;
                    case "users": $apiController -> getUsers();
                    break;
                    case "reports": $apiController -> getreports();
                    break;
                    case "services": $apiController -> getServices();
                    break;
                    case "food": $apiController -> getFood();
                    break;
                    default : throw new Exception ("La page n'existe pas!");

                }
            break;
            case "back" : echo "Page back end demandée";
            break;
            default : throw new Exception("La page n'existe pas!");
        }
    }
} catch (Exception $e){
    $msg = $e->getMessage();
    echo $msg; 
}



