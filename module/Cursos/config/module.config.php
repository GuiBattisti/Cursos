<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Cursos\Controller\Cursos' => 'Cursos\Controller\CursosController',
        ),
    ),
// The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'cursos' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'	=> '/cursos[/:action][/:id]',
		  //'route'	=> '/cursos[/:campus][/:nivel][/:curso]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
		  //	'campus' => '[a-zA-Z][a-zA-Z0-9_-]*',
		  //	'nivel'	 => '[a-zA-Z][a-zA-Z0-9_-]*',
		  //	'curso'	 => '[a-zA-Z][a-zA-Z0-9_-]*',
                    ),
                    'defaults' => array(
                        'controller' => 'Cursos\Controller\Cursos',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'cursos' => __DIR__ . '/../view',
	//  'campus' => __DIR__ . '/../view',
	//  'nivel' => __DIR__ . '/../view',
	//  'curso' => __DIR__ . '/../view',
        ),
    ),
);