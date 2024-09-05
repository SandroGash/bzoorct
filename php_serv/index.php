<?php


//formatage automatique de réécriture de l'URL (chemin absolu)
define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));


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
                    case "animaux": echo "données JSON des animaux demandées";
                    break;
                    case "animal": echo "données JSON de l'animal ".$url[2]." demandé";
                    break;
                    case "habitats": echo "données JSON des habitats demandées";
                    break;
                    case "races": echo "données JSON des races demandées";
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



