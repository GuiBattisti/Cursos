<?php
namespace Cursos\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Adapter\Adapter;
use Zend\Db\Sql\Select;

class CursoCampusTable extends TableGateway
{
    protected $table ='cursocampus';

    public function __construct(TableGateway $tableGateway)
    {
        $this->TableGateway = $tableGateway;
        $this->initialize();
    }
    
    public function getCursoCampus($id)
    {
        $resultSet  = $this->TableGateway(function (TableGateway $select) use ($id){
        	$select->where(array('cursos'=>$id));
        	$select->join('cursocampus', 'cursos.id_campus = cursocampus.id_campus');
                
     	});
        return $resultSet;
    }
}