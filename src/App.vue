<script setup lang="ts">
import Form from './components/Form.vue';
import { logo } from './lib/constanta';

</script>

<template>
  <main
    class="mx-2 my-4 md:w-[780px] md:mx-auto sm:px-4 sm:p-4 sm:my-0"
  >
    <img :src="logo" alt="swave logo" class="mx-auto my-4 px-8 sm:max-w-[500px]">

    <Form/>
  </main>
</template>
