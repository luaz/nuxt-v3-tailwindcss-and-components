<script setup>
useHead({
  title: 'Chip'
})

const tags = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'mango', 'pear', 'pineapple', 'watermelon', 'lemon', 'peach', 'apricot', 'plum', 'cherry', 'blueberry', 'raspberry', 'blackberry', 'kiwi', 'cantaloupe', 'avocado', 'star fruit', 'papaya', 'dragon fruit', 'persimmon']; 
</script>

<template>
  <div>
    <h1 class="text-4xl">Chip</h1>

    <h2 class="text-3xl mt-5">By Utilities</h2>

    <h3 class="text-2xl">Dark</h3>
    <ul class="inline-flex flex-wrap gap-x-2 gap-y-1 my-3">
      <li v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-300 rounded-lg">
        {{ tag }}
      </li>
    </ul>

    <h3 class="text-2xl">Light</h3>
    <ul class="inline-flex flex-wrap gap-x-2 gap-y-1 my-3">
      <li v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded-lg">
        {{ tag }}
      </li>
    </ul>

    <h3 class="text-2xl">Small + Light</h3>
    <ul class="inline-flex flex-wrap gap-x-2 gap-y-1 my-3">
      <li v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium">
        {{ tag }}
      </li>
    </ul>

    <h2 class="text-3xl mt-5">By Components</h2>

    <h3 class="text-2xl">Dark</h3>
    <ul class="t-chip-container my-3">
      <li v-for="tag in tags" :key="tag" class="t-chip">
        {{ tag }}
      </li>
    </ul>

    <h3 class="text-2xl">Light</h3>
    <ul class="t-chip-container my-3">
      <li v-for="tag in tags" :key="tag" class="t-chip t-chip-light">
        {{ tag }}
      </li>
    </ul>

    <h3 class="text-2xl">Small + Light</h3>
    <ul class="t-chip-container my-3">
      <li v-for="tag in tags" :key="tag" class="t-chip t-chip-light t-chip-small">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>