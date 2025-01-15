
import {defineStore}  from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play e football", isFav: true}
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(state => state.isFav)
        },

        favCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav ? p+1 :p
            }, 0)
        },

        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },

        toggleFav(id) {
            const task = this.tasks.find( t => t.id === id)
            task.isFav = !task.isFav
        },
        editTaskTitle(id, newTitle) {
            const task = this.tasks.find(t => t.id === id);
            if (task) {
              task.title = newTitle;
            } else {
              console.warn(`Task with id ${id} not found.`);
            }
          }
    }
})