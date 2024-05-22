<template>
    <div class="w-full flex flex-wrap p-2 rounded bg-green-100">
        <div class="w-full flex min-h-screen flex-col md:bg-green-200 shadow-md">
            <div class="flex w-1/2 flex-col justify-center my-auto mx-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl shad">Login</p>
                <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="login">
                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" v-model="form.email" id="email" :class="{ 'border-red-600 rounded': errors.email }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                        <small v-if="errors.email" class="text-red-600 text-sm">{{ errors.email[0] }}</small>
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" v-model="form.password" id="password" :class="{ 'border-red-600 rounded': errors.password }" class="shadow appearance-none border rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                        <small v-if="errors.password" class="text-red-600 text-sm">{{ errors.password[0] }}</small>
                    </div>
                    <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 hover:cursor-pointer p-2 mt-8">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../api'
export default {
    data: () => ({
        form: {
            email: '',
            password: '',
        },
        errors: [],
    }),
    methods: {
        async login() {
            await api.post('/login', this.form).then(response => {
                const user = response.data.data
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('role', user.role)
                this.$router.push('/')
            }).catch(error => {
                this.errors = error.response.data.errors
            })
            
        }
    }
}
</script>

<style>

</style>