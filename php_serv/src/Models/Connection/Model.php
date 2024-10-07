<?php

namespace Zoo\Management\Models\Connection;

use \PDO;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('C:/xampp/htdocs/bzoorct/php_serv');
$dotenv->load();

abstract class Model {
    private static $pdo;

    // Connexion à la base de données
    private static function setBdd() {
        $dsn = "mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'] . ";charset=utf8";
        self::$pdo = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    // Si la connexion n'est pas faite, la faire, ou récupération
    protected function getBdd() {
        if (self::$pdo === null) {
            self::setBdd();
        }
        return self::$pdo;
    }

    public static function sendJSON($info){
        header("Acces-Control-Allow-Origin: http://localhost:5173");
        header("Content-Type: application/json");
        echo json_encode($info);
    }
    
}