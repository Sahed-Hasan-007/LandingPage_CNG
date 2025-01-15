<template>
    <div class="mt-10 flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
       <form @submit.prevent="handleSubmit">
        <labe class="font-bold mb-2 text-lg block">Write Your Task</labe>
         <input 
            class="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            type="text"
            placeholder="write something"
            v-model="newTask"
         >
         <button class="!mt-8 px-6 py-2.5 text-sm bg-[#333] hover:bg-[#222] text-white rounded-sm">Add Task</button>
       </form>
    </div>
</template>

<script setup>

import { useTaskStore } from "./stores/taskStore"


const taskStore =useTaskStore()
const newTask = ref('')

const handleSubmit = () =>{
    if (newTask.value.length > 0){
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 10000)
        })
        newTask.value = '' 
    }
}

</script>

<style lang="scss" scoped>

</style>