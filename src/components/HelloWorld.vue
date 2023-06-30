<template>
  <div class="hello">
    <h1 data-testid="header">{{ msg }}</h1>
    <p>
      Counter is: <span data-testid="counter-span">{{ counter }}</span>
    </p>
    <button @click="++counter" data-testid="increment-button">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 0,
    };
  },
});
</script>
