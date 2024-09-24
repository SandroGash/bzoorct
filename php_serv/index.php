<?php
require "./vendor/autoload.php";
// Permettre l'accès CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Formatage automatique de réécriture de l'URL (chemin absolu)
define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "controllers/front/API.controller.php";
$apiController = new APIController();

// Charger les variables d'environnement
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

try {
    if(empty($_GET['page'])) {
        throw new Exception("La page n'existe pas!");
    } else {
        // Décomposition et sécurisation de l'URL
        $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL));

        // Vérifier que l'url référence est soit un élément du front soit de l'API
        if (empty($url[0])) throw new Exception("La page n'existe pas!");

        // Gestion des routes d'API via Slim
        if ($url[0] === "api") {
            // Routage Slim pour l'API
            require_once '/routes/web.php';
            exit(); // Stopper l'exécution du fichier ici car Slim prend le relais
        }

        // Routes front-end
        switch($url[0]) {
            case "front":
                switch ($url[1]) {
                    case "animals": 
                        $apiController->getAnimals();
                        break;
                    case "animal":
                        if (empty($url[2])) throw new Exception("L'identifiant de l'animal est manquant!");
                        $apiController->getAnimal($url[2]);
                        break;                    
                    case "habitats": 
                        $apiController->getHabitats();
                        break;
                    case "habitat":
                        if (empty($url[2])) throw new Exception("Le nom de cet habitat est manquant!");
                        $apiController->getHabitat($url[2]); // Utilisation du nom au lieu de l'ID
                        break;
                    case "races": 
                        $apiController->getRaces();
                        break;
                    case "race":
                        if (empty($url[2])) throw new Exception("L'identifiant de cette espèce est manquant!");
                        $apiController->getRace($url[2]);
                        break;
                    case "reports": 
                        $apiController->getreports();
                        break;
                    case "services": 
                        $apiController->getServices();
                        break;
                    case "food": 
                        $apiController->getFood();
                        break;
                    default: 
                        throw new Exception("La page n'existe pas!");
                }
                break;
            default:
                throw new Exception("La page n'existe pas!");
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
}



