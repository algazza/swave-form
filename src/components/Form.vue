<script setup lang="ts">
import { FormSchema } from "@/schema/form";
import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import CardProduct from "./CardProduct.vue";
import { classArray, productArray, variantPrice } from "@/lib/constanta";
import Label from "./ui/label/Label.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { computed } from "vue";

const urlAction = import.meta.env.VITE_API_FORM;
const validationSchema = toTypedSchema(FormSchema);

const { handleSubmit, errors, values } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values, ctx) => {
  console.log(values);

  const form = ctx.evt?.target as HTMLFormElement;
  form.submit();
});

const formatRupiah = (price: number) => {
  return price.toLocaleString("id-ID");
};

const totalPrice = computed(() => {
  let total = 0;

  for (const variant of variantPrice) {
    const products = productArray[variant.name];

    for (const product of products) {
      const formValues = values as unknown as Record<string, any>;
      const qty = Number(formValues[product.id] ?? 0);
      total += qty * variant.price;
    }
  }

  return total;
});
</script>

<template>
  <form :action="urlAction" @submit="onSubmit" target="hidden_iframe">
    <div v-for="variant in variantPrice" class="mb-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl">{{ variant.name }}</h1>
        <span class="">Rp{{ formatRupiah(variant.price) }}</span>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-5 justify-center items-center">
        <CardProduct
          v-for="product in productArray[variant.name]"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <section class="space-y-2">
      <div class="grid gap-2">
        <Label>Nama</Label>
        <Field v-slot="{ componentField }" name="name"
          ><input
            v-bind="componentField"
            name="entry.1841762506"
            placeholder="Name"
            class="border border-primary rounded-sm py-1 px-3"
        /></Field>
        <span class="text-red-500">{{ errors.name }}</span>
      </div>

      <div class="grid gap-2">
        <Label>Phone</Label>
        <Field v-slot="{ componentField }" name="number">
          <input
            v-bind="componentField"
            name="entry.981548500"
            placeholder="+62xxxxxx"
            class="border border-primary rounded-sm py-1 px-3"
          />
        </Field>
        <span class="text-red-500">{{ errors.number }}</span>
      </div>

      <div class="grid gap-2">
        <Field v-slot="{ componentField }" name="classes">
          <Label>Class</Label>
          <Select v-bind="componentField">
            <SelectTrigger class="cursor-pointer w-full">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup v-for="clas in classArray" :key="clas">
                <SelectItem :value="clas">{{ clas }}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <input
            type="hidden"
            name="entry.1274882817"
            :value="componentField.modelValue"
          />
        </Field>
        <span class="text-red-500">{{ errors.classes }}</span>
      </div>

      <div class="flex justify-between">
        <h2 class="text-2xl">Total</h2>
        <span class="">Rp{{ formatRupiah(totalPrice) }}</span>
      </div>
      <Button class="text-background w-full">Submit</Button>
    </section>
  </form>
</template>
