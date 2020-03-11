Vue.component('task', {
    name: 'Task',
    props: ['taskItem'],
    template: `
        <li class="text-left d-flex mr-5 mb-2">
            <template v-if="todoType === 'change'">
            <div class="checkbox"  :class="{'done': taskItem.checked }" >
                <label class="text-info mt-2">
                <input v-model="taskItem.checked" type="checkbox">
                    {{taskItem.title}}</label>
            </div>
            </template>
            <template v-else>
                <label class="text-info mt-2"> 
                    {{taskItem.title}}</label>
                <input class="form-control" v-model="taskItem.title">
            </template>
            <button @click="changeTodo" class="edit ml-2 mb-2 btn btn-outline-info active">Edit</button>
            <button @click="$emit('on-delete')" class="delete ml-2 mb-2 close btn btn-info">
                <span aria-hidden="true">×</span>
            </button>
        </li>
    `,
    data: () => {
        return {
            todoType: 'change'
        }
    },
    methods: {
        changeTodo: function () {
            this.todoType = this.todoType === 'change' ? 'input' : 'change'
        }
    }
})

var app17 = new Vue({
    el: '#todo-list',
    data: () => {
        return {
            title: 'TO DO list',
            newTodoText: '',
            todos: [
            ],
            nextTodoId: 0
        }
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
        },
        deleteTodo (index) {
            this.todos.splice(index, 1)
        }
    }
})


