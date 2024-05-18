<template>
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <router-link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" active-class="bg-teal-500">
               <span class="ms-3">Dashboard</span>
            </router-link>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="ml-2 whitespace-nowrap">Bonus</span>
            </button>
            <ul id="dropdown-news" class="py-2 space-y-2">
                  <li class="ml-4">
                     <router-link :to="{name: 'Bonus'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">List</span>
                     </router-link>
                  </li>
                  <li class="ml-4">
                     <router-link :to="{name: 'CreateBonus'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Create</span>
                     </router-link>
                  </li>
            </ul>
         </li>
      </ul>
   </div>
</aside>
</template>

<style>
   
</style>