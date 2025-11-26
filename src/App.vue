<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import Form from './components/Form.vue';
import { logo } from './lib/constanta';
import SuccessForm from './components/SuccessForm.vue';
// const isNewCheckout = useLocalStorage<boolean>("isNew", true);
const isNewCheckout = false;

</script>

<template>
  <iframe name="hidden_iframe" style="display: none"></iframe>
  <main
    class="mx-6 my-4 md:w-[780px] md:mx-auto sm:px-4 sm:p-4 sm:my-0"
  >
    <img :src="logo" alt="swave logo" class="mx-auto my-4 px-8 sm:max-w-[500px]">

    <Form v-if="isNewCheckout"/>
    <SuccessForm v-else/>
  </main>
</template>
