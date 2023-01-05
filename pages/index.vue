<script setup>
const components = {
  '/components/chip': 'Chip',
  '/components/button': 'Button',
  '/components/breadcrumb': 'Breadcrumb',
  '/components/pagination': 'Pagination'
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Test</h1>
    <div class="text-red-500">text-red-500</div>

    <h2 class="mt-3">Components</h2>
    <ul>
      <li v-for="(text, link) in components"><NuxtLink :to="link">{{ text }}</NuxtLink></li>  
    </ul>
  </div>
</template>