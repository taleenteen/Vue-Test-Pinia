<script setup>
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";
const userStore = useUserStore();
</script>

<template>
  <div>
    <div class="flex justify-center mt-4">
      <h1 class="text-2xl font-bold mb-6">User Profiles</h1>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(user, index) in userStore.users"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mt-6 mx-2 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div
          class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
        >
          <img class="object-cover object-center h-32" :src="user.img" />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">{{ user.name }}</h2>
          <p class="text-gray-500">{{ user.email }}</p>
        </div>
        <div class="p-4 border-t mx-8 mt-2">
          <RouterLink :to="{ name: 'user-info', params: { id: index } }">
            <button
              class="w-full block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Details
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
