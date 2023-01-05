<template>
  <div>
    <h1>Button</h1>

    <h2>By Utilities</h2>
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
        Link (Button Link)
      </NuxtLink>
    </div>

    <h2>By Component</h2>
    <div class="t-inline-container my-3">
      <button type="button" class="t-button">
        Button
      </button>

      <button type="button" class="t-button t-button-outline">
        Outline Button
      </button>

      <button type="button" class="t-button t-button-fill">
        Outline Filled
      </button>

      <NuxtLink class="t-button">
        Link
      </NuxtLink>

      <NuxtLink class="t-button no-link">
        Link (No Link)
      </NuxtLink>

      <NuxtLink class="t-button button-link">
        Link (Button Link)
      </NuxtLink>
    </div>
  </div>
</template>