<?php
namespace Zoo\Management\Middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();


class JWTHandler {
    
    private static $secretKey = '$_ENV[SECRET_KEY]'; // Clé secrète (à stocker dans un fichier .env idéalement)
    private static $algorithm = 'HS256'; // Algorithme de signature JWT

    // Générer un token JWT
    public static function generateToken($user) {
        $issuedAt = time();
        $expiration = $issuedAt + 3600; // Le token est valide pendant 1 heure

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expiration,
            'id' => $user->id,
            'username' => $user->username,
            'role' => $user->role,
            'authorized' => $user->authorized
        ];

        // Encodage du token avec le payload et la clé secrète
        return JWT::encode($payload, self::$secretKey, self::$algorithm);
    }

    // Décoder et vérifier un token JWT
    public static function decodeToken($token) {
        try {
            // Décodage du token avec la clé secrète et l'algorithme
            $decoded = JWT::decode($token, new Key(self::$secretKey, self::$algorithm));
            return (array) $decoded; // Retourne le token décodé sous forme de tableau
        } catch (\Exception $e) {
            return null; // Si le token est invalide ou expiré, retourne null
        }
    }
}