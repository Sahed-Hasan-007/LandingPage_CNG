<template>
  <div class="pt-8 font-[sans-serif] space-x-4 space-y-4 text-center">
    <button type="button" @click="filter = 'all'"
      class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300">
      All Task
    </button>

    <button type="button" @click="filter = 'favs'"
      class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300">
      Favorite Task
    </button>
  </div>

  <div v-if="filter === 'all'" class="mt-6">
    <div class="text-center">
      <p
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold mx-6 sm:mx-36 p-4 text-xl rounded-3xl shadow-lg">
        You have {{ taskStore.totalCount }} task<span v-if="taskStore.totalCount !== 1">s</span> to do.
      </p>
    </div>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      <div v-for="task in taskStore.tasks" :key="task.id"
        class="bg-white shadow-md rounded-lg p-4 border border-gray-200 transform transition duration-300 hover:scale-105">
        <div v-if="editedTaskId === task.id">
          <input type="text" v-model="editedTitle" class="w-full p-2 border rounded mb-4" />
          <div class="flex justify-end space-x-2">
            <button @click="saveEdit(task.id)" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Save
            </button>
            <button @click="cancelEdit" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </div>
        <div v-else>
          <h1 class="text-center pb-4 text-lg font-semibold text-gray-800">{{ task.title }}</h1>
          <div class="flex justify-between items-center border-t-4 pt-2">
            <button @click="taskStore.toggleFav(task.id)" class="ml-2" title="Add to Favorite">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-blue-500 hover:fill-blue-700" viewBox="0 0 24 24">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>

            <button @click="startEdit(task)" class="ml-2" title="Edit Task">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                viewBox="0 0 348.882 348.882">
                <path
                  d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                  data-original="#000000" />
                <path
                  d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                  data-original="#000000" />
              </svg>
            </button>
            <button @click="taskStore.deleteTask(task.id)" class="mr-2" title="Delete Task">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                <path
                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="filter === 'favs'" class="mt-6">
    <div class="text-center">
      <p
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold mx-6 sm:mx-36 p-4 text-xl rounded-3xl shadow-lg">
        You have {{ taskStore.favCount }} favorite task<span v-if="taskStore.favCount !== 1">s</span>.
      </p>
    </div>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      <div v-for="item in taskStore.favs" :key="item.id"
        class="bg-white shadow-md rounded-lg p-4 border border-gray-200 transform transition duration-300 hover:scale-105">
        <h1 class="text-center text-lg font-semibold text-gray-800">{{ item.title }}</h1>
      </div>
    </div>
  </div>


</template>

<script setup>
import { useTaskStore } from "./stores/taskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const filter = ref("all");

// For editing tasks
const editedTaskId = ref(null);
const editedTitle = ref("");

function startEdit(task) {
  editedTaskId.value = task.id;
  editedTitle.value = task.title;
}

function saveEdit(id) {
  taskStore.editTaskTitle(id, editedTitle.value);
  cancelEdit();
}

function cancelEdit() {
  editedTaskId.value = null;
  editedTitle.value = "";
}
</script>
