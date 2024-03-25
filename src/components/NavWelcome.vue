<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
</script>

<template>

  <header class="antialiased">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex mr-4">
        <img src="../assets/images/box-icon.png" class="mr-3 h-8" alt="Stock Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap font-mono dark:text-white"
          >STOCK</span
        >
      </a>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="/login" class="flex mr-4">

          <span class="sr-only">Access Services</span>
          <FontAwesomeIcon :icon="faShareFromSquare" class="w-8 h-8 text-orange-600" />
        </a>     
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#Home"
              class="block py-2 px-3 text-orange-600 font-semibold rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-600"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#About"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#Services"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
