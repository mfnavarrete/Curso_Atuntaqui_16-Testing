import { LoggerService } from "./logger.service";
import { TodoService } from "./todo.service";

import { TODOS } from './test-data/todo.db';
import { TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoService', () => {

    let todoSvc: TodoService;
    let loggerSpy: any;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TodoService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        });
        todoSvc = TestBed.inject(TodoService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('debería agregar una nueva tarea', () => {
        // const logger = jasmine.createSpyObj('LoggerService', ['log']);
        // spyOn(logger, 'log');

        // const todoSvc = new TodoService(logger);
        todoSvc.add({ autor: 'PruebaAutor', titulo: 'PruebaTitulo', descripcion: 'PruebaDescripcion' });

        expect(todoSvc.todos.length).toBe(1, 'Debe obtener una única tarea');
        expect(todoSvc.todos[0].id).toBe(1, 'El autoincrementa esta funcionando y deberia ser 1');
        expect(todoSvc.autoIncrementId).toBe(2, 'El autoinremental deberia avanzar');
        expect(todoSvc.todos[0].titulo).toEqual('PruebaTitulo', 'El titulo debe coincidir con el dato de prueba');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('Debería borrar un todo', () => {
        // const logger = jasmine.createSpyObj('LoggerService', ['log']);
        // const todoSvc = new TodoService(logger);

        todoSvc.todos = TODOS;

        todoSvc.delete(2);

        expect(todoSvc.todos.length).toBe(2, 'El numero de tareas deberia ser 2');
        expect(todoSvc.todos[1].autor).toEqual('Sara', 'El autor debe ser Sara');
    });

    it('Debe recuperar todas las tareas', () => {
        todoSvc.getAll().subscribe(todos => {
            expect(todos).toBeTruthy('No existen las tareas');
            expect(todos.length).toBe(1, 'La longitud no es correcta');
        });
        const req = httpTestingController.expectOne('http://localhost:3000/api/todos/all');
        expect(req.request.method).toBe('GET');
        req.flush([
            {
                id: 1,
                autor: 'Roberto',
                titulo: 'Sacar al perro desde HTTP',
                descripcion: 'Hemos quedado en el parque para dar una vuelta'
            }
        ]);
    });

});
