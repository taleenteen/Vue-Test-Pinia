<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import { RouterLink } from "vue-router";
import ConfirmModal from "../ConfirmModal.vue";

const userStore = useUserStore();
const showModal = ref(false);
const userToDelete = ref(null);

const confirmDelete = (index) => {
  userToDelete.value = index;
  showModal.value = true;
};

const deleteUser = () => {
  if (userToDelete.value !== null) {
    userStore.removeUser(userToDelete.value);
    userToDelete.value = null;
    showModal.value = false;
  }
};

const cancelDelete = () => {
  userToDelete.value = null;
  showModal.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center mt-8 w-full">
    <h1 class="text-2xl font-bold mb-6">User List</h1>
    <div class="w-full overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="w-1/4 px-4 py-2 text-center">Avatar</th>
            <th class="w-1/4 px-4 py-2 text-center">Name</th>
            <th class="w-1/4 px-4 py-2 text-center">Email</th>
            <th class="w-1/4 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in userStore.users"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border-t px-4 py-2 text-center">
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                :src="user.img"
              />
            </td>
            <td class="border-t px-4 py-2 text-center">{{ user.name }}</td>
            <td class="border-t px-4 py-2 text-center">{{ user.email }}</td>
            <td class="border-t px-4 py-2 text-center">
              <RouterLink :to="{ name: 'user-edit', params: { id: index } }">
                <button
                  class="bg-blue-500 text-white rounded px-2 py-1 sm:px-4 sm:py-2 mr-2 hover:bg-blue-600"
                >
                  <i class="pi pi-pencil"></i>
                </button>
              </RouterLink>
              <button
                class="bg-red-500 text-white rounded px-2 py-1 sm:px-4 sm:py-2 hover:bg-red-600"
                @click="confirmDelete(index)"
              >
                <i class="pi pi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <RouterLink :to="{ name: 'user-create' }">
      <button
        class="mt-6 bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
      >
        <i class="pi pi-plus mr-2"></i>Create User
      </button>
    </RouterLink>

    <!-- Modal Component -->
    <ConfirmModal
      :showModal="showModal"
      message="Are you sure you want to delete this user?"
      @confirm="deleteUser"
      @cancel="cancelDelete"
    />
  </div>
</template>

<style scoped>
/* Ensure table is scrollable in small screens */
table {
  @apply table-auto;
}
@media (max-width: 520px) {
  /* Hide table headers on small screens */
  thead {
    @apply hidden;
  }
  /* Display table rows as cards on small screens */
  tr {
    @apply block mb-6;
  }
  td {
    @apply block text-center;
    &:first-child {
      @apply border-t-0;
    }
  }
}
</style>
