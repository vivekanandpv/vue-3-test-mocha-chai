<template>
  <div class="hello">
    <h1 data-testid="header">{{ msg }}</h1>
    <p>
      Counter is: <span data-testid="counter-span">{{ counter }}</span>
    </p>

    <p data-testid="inject-output">{{ getMessage() }}</p>
    <button @click="++counter" data-testid="increment-button">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { FOO_SYMBOL } from '@/services/foo.service';
import { inject, ref } from 'vue';

const counter = ref(0);

defineProps({
  msg: String,
});

const getMessage = () => {
  const foo = inject<() => string>(FOO_SYMBOL);
  return foo ? foo() : 'Default';
};
</script>
