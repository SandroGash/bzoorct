<?php

abstract class Model {
    private static $pdo;
//Connexion BDD
    private static function setBdd(){
        self::$pdo = new PDO("mysql:host=localhost;dbname=bzoorctsql;charset=utf8","root","");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    }

    //Si la connection n'est pas faite
    protected function getBdd(){
        if(self::$pdo === null){
            self::setBdd();
        }
        return self::$pdo;
    }

    public static function sendJSON($info){
        //Autorisation de récupération des données de l'API
        header("Access-Control-Allow-Origin: http://localhost:5173"); 
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        echo json_encode($info);
    }
}