<script setup>
import NavWelcome from '../components/NavWelcome.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBoxesStacked,  faMoneyBillWave,  faFileInvoice, faRightLeft, faUserGear, faChartPie} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <NavWelcome />
  <section id="Home" class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Manage your inventory
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Easily and quickly manage your company’s inventory and issue reports
        </p>

        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Get started
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img class="" src="../assets/images/boxes.png" alt="arrow down icon" />
      </div>
    </div>
  </section>

  <hr class="border-orange-600" />

  <section id="About" class="bg-white dark:bg-gray-900">
    <div
      class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Make life easier for your business
        </h2>
        <p class="mb-4">
          <strong class="font-bold text-orange-600">Stock</strong> is an inventory control system
          with a comprehensive solution for companies that want to manage their products
          efficiently. It offers advanced features for tracking, monitoring and optimizing the flow
          of items in your stock.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg" src="../assets/images/stock.jpg" alt="stock store" />
        <img
          class="mt-4 w-full lg:mt-10 rounded-lg"
          src="../assets/images/stock1.jpg"
          alt="stock store 2"
        />
      </div>
    </div>
  </section>

  <hr class="border-orange-600" />

  <section  id="Services" class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Made for those looking for organization.
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          We focus on the day-to-day needs of those who need organization and management.
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faBoxesStacked" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Organization</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Efficiently arrange and categorize inventory items within the storage facility. Proper
            organization ensures easy access, minimizes search time, and prevents misplacement.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faMoneyBillWave" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Financial Management</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Handle financial aspects related to inventory, including cost tracking, pricing,
            budgeting, and profit analysis. Effective financial management contributes to overall
            business success.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faFileInvoice" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Report Generation</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Generate comprehensive reports detailing inventory levels, sales trends, replenishment
            needs, and other relevant data. Reports support decision making and provide insight for
            strategic planning.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faRightLeft" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Inbound and Outbound Control</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Monitor the inflow and outflow of goods. Accurate tracking ensures inventory accuracy,
            prevents stockouts, and optimizes supply chain operations.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faUserGear" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">User Monitoring and Control</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Administer access rights and permissions for system users. Control who can view, modify,
            or manage inventory data. User monitoring enhances security and accountability.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <FontAwesomeIcon :icon="faChartPie" class="w-7 h-7 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Graphics</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Have a visual representation of your business with a graphics panel, containing all the
            data registered in the system
          </p>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-orange-600" />

</template>
