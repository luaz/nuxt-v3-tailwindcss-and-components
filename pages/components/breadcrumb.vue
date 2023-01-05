<script setup>
useHead({
  title: 'Breadcrumb'
})

const items = [
  {
    text: 'Home',
    active: true
  },
  {
    text: 'Library',
    to: '#'
  },
  {
    text: 'Data'
  }
]
</script>


<template>
  <div>
    <h1>Breadcrumb</h1>

    <h2>By Utilities</h2>
    <div class="my-3">
      <nav aria-label="breadcrumb">
        <ol class="flex">
          <li>Home</li>
          <li><span class="text-gray-500 mx-2">/</span></li>
          <li><a href="#">Library</a></li>
          <li><span class="text-gray-500 mx-2">/</span></li>
          <li class="text-gray-500" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>

    <h2>By Component</h2>
    <div class="my-3">
      <nav aria-label="breadcrumb">
        <ol class="t-inline-container">
          <li class="t-breadcrumb-item active">Home</li>
          <li class="t-breadcrumb-sep">/</li>
          <li class="t-breadcrumb-item active"><a href="#">Library</a></li>
          <li class="t-breadcrumb-sep">/</li>
          <li class="t-breadcrumb-item">Data</li>
        </ol>
      </nav>
    </div>

    <h2>By Vue Component</h2>
    <div class="my-3">
      <t-breadcrumb :items="items"></t-breadcrumb>
    </div>
  </div>
</template>