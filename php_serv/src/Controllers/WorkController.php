<?php

namespace Zoo\Management\Controllers;

use Zoo\Management\Models\Entities\WorkModel;
use Zoo\Management\Models\Connection\Model;



class WorkController {
    private $workModel;

    public function __construct() {
        $this->workModel = new WorkModel();
    }

    // Récupérer tous les rapports
    public function getReports(){
        $reports = $this->workModel->getDBReports();
        return Model::sendJSON($reports);
    }

    // Récupérer toutes les nourritures
    public function getFood(){
        $food = $this->workModel->getDBFood();
        return Model::sendJSON($food);
    }
}