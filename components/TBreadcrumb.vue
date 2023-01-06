<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="t-inline-container">
      <template v-for="(item, key) in items">
        <li class="t-breadcrumb-item" :class="{ active: item.active || item.to }">
          <NuxtLink v-if="item.to" :to="item.to">{{ item.text }}</NuxtLink>
          <span v-else>{{ item.text }}</span>
        </li>
        <li v-if="key != items.length - 1" class="t-breadcrumb-sep">/</li>
      </template>
    </ol>
  </nav>
</template>