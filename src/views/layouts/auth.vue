<template>
  <div>
    <Sidebar/>
    <div>
        <Navbar/>
        <div class="bg-gray-900  min-h-screen">
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
    }
}
</script>

<style>

</style>