<?php

namespace Zoo\Management\Middleware;




use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Server\MiddlewareInterface;

class JWTMiddleware implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface {
        $headers = $request->getHeaderLine('Authorization');

        if ($headers) {
            $token = str_replace('Bearer ', '', $headers);
            $decoded = JWTHandler::decodeToken($token);

            if ($decoded) {
                $request = $request->withAttribute('user', $decoded); // Stocker les informations de l'utilisateur dans la requête
                return $handler->handle($request);
            }
        }

        // Si le token n'est pas valide ou absent, retournez une réponse non autorisée
        $response = new \Slim\Psr7\Response();
        $data = ['error' => 'Unauthorized'];
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
    }
}