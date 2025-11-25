<script setup lang="ts">
import { FormSchema } from "@/schema/form";
import { toTypedSchema } from "@vee-validate/zod";
import { Form } from "vee-validate";

const urlAction = import.meta.env.VITE_API_FORM;

const validationSchema = toTypedSchema(FormSchema)

const onSubmit = (values: any) => {
    console.log(values)
}
</script>
<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit" :action="urlAction"> 
    

  </Form>
</template>
