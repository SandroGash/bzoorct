<?php
require __DIR__ . '/vendor/autoload.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;


require_once 'controllers/UserController.php';
require_once 'middleware/JWTHandler.php';

//Slim
$app = AppFactory::create();

// Middleware pour parser le corps des requêtes en JSON
$app->addBodyParsingMiddleware();

// Route pour la connexion
$app->post('/api/login', function (Request $request, Response $response, $args) {
    $data = $request->getParsedBody();
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    $controller = new UserController();
    $result = $controller->login($username, $password);

    $response->getBody()->write($result);
    return $response->withHeader('Content-Type', 'application/json');
});

// Route pour la création
$app->post('/api/register', function (Request $request, Response $response, $args) {
    $data = $request->getParsedBody();
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $role = $data['role'] ?? 'employee'; // Valeur par défaut

    $controller = new UserController();
    $result = $controller->register($username, $password, $role);

    $response->getBody()->write($result);
    return $response->withHeader('Content-Type', 'application/json');
});

// Route pour récupérer les utilisateurs (protégée)
$app->get('/api/users', function (Request $request, Response $response, $args) {
    // Vérifier l'authentification via JWT
    $authHeader = $request->getHeaderLine('Authorization');
    if (!$authHeader) {
        $response->getBody()->write(json_encode(['error' => 'Token manquant']));
        return $response->withStatus(401)->withHeader('Content-Type', 'application/json');
    }

    $token = str_replace('Bearer ', '', $authHeader);
    $decoded = JWTHandler::decodeToken($token);

    if (!$decoded) {
        $response->getBody()->write(json_encode(['error' => 'Token invalide ou expiré']));
        return $response->withStatus(401)->withHeader('Content-Type', 'application/json');
    }

    // Vérifier le rôle de l'utilisateur
    if ($decoded['role'] !== 'admin') {
        $response->getBody()->write(json_encode(['error' => 'Accès refusé']));
        return $response->withStatus(403)->withHeader('Content-Type', 'application/json');
    }

    $controller = new UserController();
    $result = $controller->getAllUsers();

    $response->getBody()->write($result);
    return $response->withHeader('Content-Type', 'application/json');
});

// Route pour supprimer un utilisateur (protégée)
$app->delete('/api/users/{id}', function (Request $request, Response $response, $args) {
    // Vérifier l'authentification via JWT
    $authHeader = $request->getHeaderLine('Authorization');
    if (!$authHeader) {
        $response->getBody()->write(json_encode(['error' => 'Token manquant']));
        return $response->withStatus(401)->withHeader('Content-Type', 'application/json');
    }

    $token = str_replace('Bearer ', '', $authHeader);
    $decoded = JWTHandler::decodeToken($token);

    if (!$decoded) {
        $response->getBody()->write(json_encode(['error' => 'Token invalide ou expiré']));
        return $response->withStatus(401)->withHeader('Content-Type', 'application/json');
    }

    // Vérifier le rôle de l'utilisateur
    if ($decoded['role'] !== 'admin') {
        $response->getBody()->write(json_encode(['error' => 'Accès refusé']));
        return $response->withStatus(403)->withHeader('Content-Type', 'application/json');
    }

    $id = $args['id'];
    $controller = new UserController();
    $result = $controller->deleteById($id);

    $response->getBody()->write($result);
    return $response->withHeader('Content-Type', 'application/json');
});

// Démarrer l'application Slim
$app->run();