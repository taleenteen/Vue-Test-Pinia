<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  showModal: Boolean,
  message: String,
});

const emits = defineEmits(["confirm", "cancel"]);

const confirm = () => {
  emits("confirm");
};

const cancel = () => {
  emits("cancel");
};
const show = ref(props.showModal);

watch(
  () => props.showModal,
  (newValue) => {
    if (newValue) {
      show.value = true;
      setTimeout(() => {
        document.getElementById("modal").classList.add("show");
      }, 10);
    } else {
      document.getElementById("modal").classList.remove("show");
      setTimeout(() => {
        show.value = false;
      }, 300);
    }
  }
);
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
  >
    <div
      id="modal"
      class="modal-content bg-white p-4 rounded-lg shadow-lg text-center transition-transform transform scale-95 duration-300"
    >
      <h2 class="text-xl font-bold mb-4">Confirm Delete</h2>
      <p>{{ message }}</p>
      <div class="mt-4">
        <button
          class="bg-red-500 text-white rounded px-4 py-2 mr-2 hover:bg-red-600"
          @click="confirm"
        >
          Yes, Delete
        </button>
        <button
          class="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.3s, transform 0.3s;
}

.modal-content.show {
  opacity: 1;
  transform: scale(1);
}
</style>
