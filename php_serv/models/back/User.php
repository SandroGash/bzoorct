<?php
class User {
    public $id;
    public $username;    
    public $password;
    public $role;
    public $authorized;

    private static $pdo = null;

    // Connexion BDD
    private static function setBdd() {
        self::$pdo = new PDO("mysql:host=localhost;dbname=bzoorctsql;charset=utf8", "root", "");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    // Si la connexion n'est pas faite
    protected static function getBdd() {
        if (self::$pdo === null) {
            self::setBdd();
        }
        return self::$pdo;
    }

    public function __construct($id, $username, $password, $role, $authorized) {
        $this->id = $id;
        $this->username = $username;        
        $this->password = $password;
        $this->role = $role;
        $this->authorized = $authorized;
    }

    // Trouver un utilisateur par username
    public static function findByUsername($username) {
        $pdo = self::getBdd();
        $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            return new User($user['id'], $user['username'], $user['password'], $user['role'], $user['authorized']);
        }
        return null;
    }


    // Trouver un utilisateur par username
    public static function findById($id) {
        $pdo = self::getBdd();
        $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
        $stmt->execute([$id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
        if ($user) {
            return new User($user['id'], $user['username'], $user['password'], $user['role'], $user['authorized']);
        }
        return null;
    }


   // Récupérer tous les utilisateurs
   public static function getAll() {
    $pdo = self::getBdd();
    $stmt = $pdo->query('SELECT id, username, role, authorized FROM users');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
} 

    // Enregistrer un utilisateur dans la base de données
    public function save() {
        $pdo = self::getBdd();
        if ($this->id) {
            // Mise à jour
            $stmt = $pdo->prepare('UPDATE users SET username = ?, password = ?, role = ?, authorized = ? WHERE id = ?');
            $stmt->execute([$this->username, $this->password, $this->role, $this->authorized, $this->id]);
        } else {
            // Insertion
            $stmt = $pdo->prepare('INSERT INTO users (username, password, role, authorized) VALUES (?, ?, ?, ?)');
            $stmt->execute([$this->username, $this->password, $this->role, $this->authorized]);
            $this->id = $pdo->lastInsertId();
        }
    }

    // Supprimer un utilisateur
    public function delete() {
        $pdo = self::getBdd();
        if ($this->id) {
            $stmt = $pdo->prepare('DELETE FROM users WHERE id = ?');
            $stmt->execute([$this->id]);
        }
    }
}
