<template>
  <div>
    <Sidebar/>
    <div>
        <Navbar @toggle="showNav"/>
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <slot/>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Sidebar,
        Navbar
    },
    methods: {
      showNav() {
        const toggleMobile = document.getElementById('logo-sidebar')
        if(toggleMobile) {
          toggleMobile.classList.toggle('-translate-x-full')
        }
      }
    }
}
</script>

<style>

</style>