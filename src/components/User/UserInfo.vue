<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";

const route = useRoute();
const userStore = useUserStore();
const userData = reactive({
  name: "",
  email: "",
  img: "",
  description: "",
});

const userIndex = ref(-1);

onMounted(() => {
  if (route.name === "user-info") {
    userIndex.value = parseInt(route.params.id);
    const vUserStore = userStore.users[userIndex.value];
    userData.name = vUserStore.name;
    userData.email = vUserStore.email;
    userData.img = vUserStore.img;
    userData.description = vUserStore.description;
  }
});
</script>

<template>
  <div class="flex justify-center flex-col items-center mt-16">
    <div class="w-4/5 bg-white shadow-xl rounded-lg text-gray-900">
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
        <img
          class="object-cover object-center h-32"
          :src="userData.img"
          alt="Woman looking front"
        />
      </div>
      <div class="text-center mt-2">
        <span class="font-semibold">User name:</span> {{ userData.name }}
        <p><span class="font-semibold">Email:</span> {{ userData.email }}</p>
      </div>
      <div class="p-4 border-t mx-8">
        <h2 class="font-semibold">Description</h2>
        <p class="flex justify-center">
          {{ userData.description }}
        </p>
      </div>
    </div>
    <div class="mt-4">
      <RouterLink :to="{ name: 'user-edit', params: { id: userIndex.value } }">
        <button
          class="bg-blue-500 text-white rounded mx-2 px-4 py-2 hover:bg-blue-600"
        >
          <i class="pi pi-pencil"></i> Edit
        </button>
      </RouterLink>
      <RouterLink :to="{ name: 'home' }">
        <button
          class="bg-green-500 text-white rounded mx-2 px-4 py-2 hover:bg-green-600"
        >
          <i class="pi pi-home"></i> Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>
