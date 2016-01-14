import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, COMMON_PIPES} from 'angular2/common';

import {TodoService} from '../../services/todo';

@Component({
    selector: 'home',
    templateUrl: 'components/home/home.html',
    directives: [CORE_DIRECTIVES],
    pipes: [COMMON_PIPES]
})
export class Home {
    constructor(todoService:TodoService) {
        this.todoService = todoService;
        this.title = 'Home Page';
    }

    ngOnInit() {
        this.todoService.getTodos()
            .subscribe((response) => {
                this.todos = response.json();
            });
    }
}