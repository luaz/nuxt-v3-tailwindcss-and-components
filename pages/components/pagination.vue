<script setup>
useHead({
  title: 'Pagination'
})
</script>

<template>
  <div>
    <h1>Pagination</h1>

    <h2>By Utilities</h2>
    <div class="my-3">
        <nav aria-label="page navigation">
          <ul class="inline-flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center text-gray-300 no-underline">«</span>
            </li>
            <li aria-current="page">
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center bg-blue-500 text-white">1</span>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-200 hover:bg-blue-200 no-underline">2</a>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-200 hover:bg-blue-200 no-underline">3</a>
            </li>
            <li>
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-100 text-gray-400">...</span>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center hover:bg-blue-200 no-underline" aria-label="Next">»</a>
            </li>
          </ul>
        </nav>
    </div>

    <h2>By Component</h2>
    <div class="my-3">
        <nav aria-label="page navigation">
          <ul class="t-inline-container">
            <li>
              <span class="t-page-nav disabled">«</span>
            </li>
            <li aria-current="page">
              <span class="t-page-item active">1</span>
            </li>
            <li>
              <a href="#" class="t-page-item">2</a>
            </li>
            <li>
              <a href="#" class="t-page-item">3</a>
            </li>
            <li>
              <span class="t-page-item disabled">...</span>
            </li>
            <li>
              <a href="#" class="t-page-nav" aria-label="Next">»</a>
            </li>
          </ul>
        </nav>
    </div>
  </div>  
</template>