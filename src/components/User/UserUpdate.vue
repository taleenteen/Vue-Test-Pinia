<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const isValid = ref(true);
const errors = reactive({
  name: "",
  email: "",
});

const userData = reactive({
  name: "",
  email: "",
  img: "",
  description: "",
});

const displayButton = computed(() => {
  return mode.value === "create" ? "Add" : "Update";
});

const displayUserState = computed(() => {
  return mode.value === "create" ? "User Create" : "User Update";
});

const mode = ref("create");
const userIndex = ref(-1);

const validateName = (name) => {
  const re = /\d/;
  return !re.test(name);
};
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

onMounted(() => {
  if (route.name === "user-edit") {
    mode.value = "update";
    userIndex.value = parseInt(route.params.id);
    const vUserStore = userStore.users[userIndex.value];
    userData.name = vUserStore.name;
    userData.email = vUserStore.email;
    userData.img = vUserStore.img;
    userData.description = vUserStore.description;
  }
});

const addUser = () => {
  if (mode.value === "update") {
    userStore.updateUser(userData, userIndex.value);
  } else {
    userStore.addUser(userData);
  }
  router.push({ name: "user-list" });
};

watch(
  () => [userData.name, userData.email],
  () => {
    isValid.value = true;
    errors.name = "";
    errors.email = "";

    if (!validateName(userData.name)) {
      isValid.value = false;
      errors.name = "ชื่อจะต้องไม่มีตัวเลข";
    }
    if (!validateEmail(userData.email)) {
      isValid.value = false;
      errors.email = "อีเมลมีตัวอย่างดังนี้ example@gmail.com";
    }
  },
  { immediate: true }
);

const showDropdown = ref(false);
const selectImage = (img) => {
  userData.img = img;
  showDropdown.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center mt-8">
    <h1 class="text-2xl font-bold mb-6">{{ displayUserState }}</h1>
    <div class="w-full max-w-lg mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        User name
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        v-model="userData.name"
        id="name"
      />
      <p v-if="errors.name" class="text-red-500 text-xs italic">
        {{ errors.name }}
      </p>
    </div>
    <div class="w-full max-w-lg mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        User email
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        v-model="userData.email"
        id="email"
      />
      <p v-if="errors.email" class="text-red-500 text-xs italic">
        {{ errors.email }}
      </p>
    </div>
    <div class="w-full max-w-lg mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="description"
      >
        User Description
      </label>
      <textarea
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        v-model="userData.description"
        id="description"
      ></textarea>
    </div>
    <div class="w-full max-w-lg mb-4 relative">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
        Select Image
      </label>
      <div
        class="truncate appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white cursor-pointer"
        @click="showDropdown = !showDropdown"
      >
        {{ userData.img || "Select an image" }}
      </div>
      <transition name="slide-fade">
        <div
          v-if="showDropdown"
          class="absolute w-full bg-white border rounded shadow-lg z-10"
        >
          <div
            v-for="(picture, index) in userStore.images"
            :key="index"
            class="truncate py-2 px-4 hover:bg-gray-200 cursor-pointer"
            @click="selectImage(picture.img)"
          >
            {{ picture.img }}
          </div>
        </div>
      </transition>
    </div>
    <button
      :disabled="!isValid"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      @click="addUser"
    >
      {{ displayButton }}
    </button>
  </div>

  <div class="flex justify-center flex-col items-center mt-16">
    <div class="mb-4">
      <h1 class="text-2xl font-bold mb-6">Example</h1>
    </div>
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
        <img class="object-cover object-center h-32" :src="userData.img" />
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
  </div>
</template>

<style scoped>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
