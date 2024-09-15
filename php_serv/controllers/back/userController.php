<?php
require_once 'models/back/User.php';
require_once 'middleware/JWTHandler.php'; 

class UserController {
    // Connexion d'un utilisateur
    public function login($email, $password) {
        $user = User::findByUsername($email);
        
        if ($user && password_verify($password, $user->password)) {
            // Générer un token JWT
            $token = JWTHandler::generateToken($user);
            
            return json_encode([
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'username' => $user->username,
                    'role' => $user->role,
                    'authorized' => $user->authorized
                ]
            ]);
        } else {
            http_response_code(401);
            return json_encode(['error' => 'Email ou mot de passe incorrect']);
        }
    }

    // Création d'un nouvel utilisateur
    public function register($username, $password, $role) {
        if (User::findByUsername($username)) {
            http_response_code(400);
            return json_encode(['error' => 'L\'utilisateur existe déjà']);
        }

        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $user = new User(null, $username, $hashedPassword, $role, true);
        $user->save();
        
        return json_encode(['success' => 'Utilisateur créé avec succès']);
    }

    // Mettre à jour les informations d'un utilisateur
    public function update($id, $username, $password, $role, $authorized) {
        $user = new User($id, $username, password_hash($password, PASSWORD_BCRYPT), $role, $authorized);
        $user->save();
        
        return json_encode(['success' => 'Utilisateur mis à jour avec succès']);
    }

    // Récupérer tous les utilisateurs (pour admin)
     public function getAllUsers() {
        $users = User::getAll();
        return json_encode($users);
    }

    public static function deleteById($id) {
        $user = User::findById($id); // Méthode à ajouter dans la classe User
        if ($user) {
            $user->delete();
            return json_encode(['success' => 'Utilisateur supprimé avec succès']);
        } else {
            http_response_code(404);
            return json_encode(['error' => 'Utilisateur non trouvé']);
        }
    }
}