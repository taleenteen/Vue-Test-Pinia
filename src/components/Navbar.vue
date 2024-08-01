<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav
    class="bg-gray-700 w-full z-20 top-0 start-0 border-b border-gray-200 border-gray-600"
  >
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <RouterLink
        class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white"
        to="/"
        ><li class="pi pi-home text-white mx-5"></li>
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >HOME</span
        ></RouterLink
      >
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white hover:bg-blue-600 p-2 rounded transition-all duration-300"
          >
            <li class="pi pi-bars"></li>
          </button>
        </div>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-700 border-gray-700"
        >
          <li>
            <RouterLink
              class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              to="/user"
              >User List</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              to="/user/create"
              >Create User</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 flex justify-end md:hidden"
      @click.self="toggleMenu"
      :class="{
        'opacity-100': isMenuOpen,
        'opacity-0 pointer-events-none': !isMenuOpen,
        'transition-opacity duration-300': true,
      }"
    >
      <div
        class="w-64 bg-gray-800 h-full shadow-lg p-4 transition-transform duration-300 transform"
        :class="{
          'translate-x-0': isMenuOpen,
          'translate-x-full': !isMenuOpen,
        }"
      >
        <button
          @click="toggleMenu"
          class="text-gray-500 hover:text-gray-400 absolute top-4 right-4"
        >
          ✕
        </button>
        <ul class="px-2 pt-8 pb-3 space-y-1 list-none">
          <li>
            <RouterLink
              class="block py-2 px-3 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              to="/user"
              @click="toggleMenu"
              >User List</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 px-3 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              to="/user/create"
              @click="toggleMenu"
              >User Create</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
