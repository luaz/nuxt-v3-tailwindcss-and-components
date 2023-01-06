<script setup>
// import { VPagination } from 'vuetify/components/VPagination'

const props = defineProps({
  page: Number,
  length: Number,
  totalVisible: Number,
  to: Function
})

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

let totalVisible = props.totalVisible - 2
if (totalVisible < 0)
  totalVisible = 3
let total = Math.floor(totalVisible/2)
let start = props.page - total
if (start <= 0) {
  total = 0
  start = 1
}

total = totalVisible - total
let end = props.page + total
if (end > props.length) {
  end = props.length
  start -= total
  if (start <= 0)
    start = 1
}

let pages = range(start, end)

if (pages[0] != 1) {
  pages.unshift(1)
  if (pages[1] != 2) {
    pages.splice(1, 0, 0);
  }
}

if (pages[pages.length - 1] != props.length) {
  pages.push(props.length)
  if (pages[pages.length - 2] != props.length-1) {
    pages.splice(pages.length-1, 0, 0);
  }
}
</script>

<template>
  <!-- need this to trigger dynamic import -->
  <!-- <v-pagination v-show="false" /> -->
  <nav aria-label="page navigation">
    <ul class="t-inline-container">
      <li>
        <NuxtLink v-if="page !== 1" class="t-page-nav" aria-label="Previous" :to="to(page - 1)">«</NuxtLink>
        <span v-else class="t-page-nav disabled">«</span>
      </li>
      <li v-for="_page in pages" :key="_page" v-bind="page == _page ? { 'aria-current': 'page' } : {}">
        <span v-if="page == _page" class="t-page-item active">{{ _page }}</span>
        <span v-else-if="_page == 0" class="t-page-item disabled">...</span>
        <NuxtLink v-else class="t-page-item" :to="to(_page)">{{ _page }}</NuxtLink>
      </li>
      <li>
        <NuxtLink v-if="page != length" class="t-page-nav" aria-label="Next" :to="to(page + 1)">»</NuxtLink>
        <span v-else class="t-page-nav disabled">»</span>
      </li>
    </ul>
  </nav>
</template>