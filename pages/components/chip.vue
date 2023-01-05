<script setup>
useHead({
  title: 'Chip'
})

const tags = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'mango', 'pear', 'pineapple', 'watermelon', 'lemon', 'peach', 'apricot', 'plum', 'cherry', 'blueberry', 'raspberry', 'blackberry', 'kiwi', 'cantaloupe', 'avocado', 'star fruit', 'papaya', 'dragon fruit', 'persimmon']; 
</script>

<template>
  <div>
    <h1 class="text-4xl">Chip</h1>
    <ul class="inline-flex flex-wrap gap-x-2 gap-y-1 my-3">
      <li v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-300 rounded-lg">
        {{ tag }}
      </li>
    </ul>

    <ul class="inline-flex flex-wrap gap-x-2 gap-y-1 my-3">
      <li v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded-lg">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>