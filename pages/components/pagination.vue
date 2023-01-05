<script setup>
useHead({
  title: 'Pagination'
})
</script>

<template>
  <div>
    <h1>Pagination</h1>

    <div class="my-3">
        <nav aria-label="page navigation">
          <ul class="inline-flex flex-wrap gap-x-1 gap-y-1">
            <li>
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center text-gray-300 no-underline">«</span>
            </li>
            <li aria-current="page">
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center bg-blue-500 text-white no-underline">1</span>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-200 hover:bg-blue-200 no-underline">2</a>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-200 hover:bg-blue-200 no-underline">100</a>
            </li>
            <li>
              <span class="flex w-12 aspect-square rounded-lg items-center justify-center bg-gray-100 text-gray-400 no-underline">...</span>
            </li>
            <li>
              <a href="#" class="flex w-12 aspect-square rounded-lg items-center justify-center hover:bg-blue-200 no-underline" aria-label="Next">»</a>
            </li>

            <!--
            <li class="page-item"><a
                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#">1</a></li>
            <li class="page-item"><a
                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#">2</a></li>
            <li class="page-item"><a
                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#">3</a></li>
            <li class="page-item"><a
                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#">Next</a></li> -->
          </ul>
        </nav>
    </div>
  </div>  
</template>