<template>
  <div>
    <h1>Button</h1>
    <div class="t-inline-container my-3">
      <button type="button" class="px-4 py-2 font-medium rounded-lg border border-gray-200 hover:bg-gray-100">
        Button
      </button>

      <button type="button" class="px-4 py-2 font-medium rounded-lg border border-gray-500 hover:bg-gray-100">
        Outline Button
      </button>

      <button type="button" class="px-4 py-2 font-medium rounded-lg border border-gray-900 text-white bg-gray-900 hover:bg-gray-700">
        Outline Filled
      </button>

      <NuxtLink class="w-fit cursor-pointer m-0 px-4 py-2 font-medium rounded-lg border border-gray-200 hover:bg-gray-100">
        Link
      </NuxtLink>

      <NuxtLink class="w-fit cursor-pointer m-0 px-4 py-2 font-medium rounded-lg border border-gray-200 hover:bg-gray-100 no-link">
        Link (No Link)
      </NuxtLink>

      <NuxtLink class="w-fit cursor-pointer m-0 px-4 py-2 font-medium rounded-lg border border-gray-200 hover:bg-gray-100 button-link">
        Nuxt Link (Button Link)
      </NuxtLink>
    </div>
  </div>
</template>