<?php
namespace Cursos\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Adapter\Adapter;

class CursosTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function fetchAll()
    {
        $resultSet = $this->tableGateway->select();
        return $resultSet;
    }

    public function getCursos($id)
    {
        $id  = (int) $id;
        $rowset = $this->tableGateway->select(array('id' => $id));
        $row = $rowset->current();
        if (!$row) {
            throw new \Exception("Não foi encontrado o Curso $id");
        }
        return $row;
    }
}
