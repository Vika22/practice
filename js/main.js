var app17 = new Vue({
    el: '#todo-list',
    data: {
        title: 'TO DO list',
        newTodoText: '',
        todos: [
        ],
        nextTodoId: 0,
        editedTodo: 0
    },
    methods: {
        addTodo: function () {
            if (!this.newTodoText) {

                return;
            }
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText,
                checked: false
            })
            this.newTodoText = ''
        }
    }
})


