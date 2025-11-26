<script setup lang="ts">
import type { productType } from "@/schema/form";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "./ui/number-field";
import { Field } from "vee-validate";

defineProps<{ product: productType }>();
</script>
<template>
  <div
    class="relative p-2 duration-300"
    :class="product.stock > 0 ? '' : 'grayscale'"
  >
    <div class="bg-neutral-700 p-3 mb-4 rounded-lg border border-white">
      <img :src="product.img" :alt="`Gambar ${product.name}`" />
    </div>

    <div class="grid gap-1.5 w-full">
      <Field v-slot="{ componentField }" :name="`${product.id}`">
        <NumberField
          id="Jumlah"
          :min="0"
          :max="product.stock"
          :default-value="0"
          v-model="product.qty"
          :disabled="product.stock === 0"
          v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>

        <input
          type="hidden"
          :name="product.entry"
          :value="componentField.modelValue"
        />
      </Field>
    </div>
  </div>
</template>
