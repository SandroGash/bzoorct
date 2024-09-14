<?php
require_once 'JWTHandler.php';

function authenticate() {
    $headers = apache_request_headers();
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']);
        $decoded = JWTHandler::decodeToken($token);

        if ($decoded) {
            $_SESSION['user'] = $decoded; //Stocker les informations de l'utilisateur
            return true;
        }
    }

    http_response_code(401); // Non autorisé
    echo json_encode(['error' => 'Token invalide ou expiré']);
    return false;
}