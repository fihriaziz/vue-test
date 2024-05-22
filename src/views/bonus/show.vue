<template>
  <Auth>
    <div class="p-4 sm:p-20 sm:ml-52 items-center text-center shadow-sm mt-6 sm:mt-0 min-h-screen">
        <h3 class="text-2xl mt-10 sm:mt-4 sm:mb-3 font-semibold text-center sm:text-left text-black dark:text-white">View Detail</h3>
        <div class="relative overflow-x-auto shadow-md rounded-md mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-white">
                            Pembayaran
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh A
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh B
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh C
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-slate-50 odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td class="px-6 py-4">
                            {{formatRupiah(bonus.pembayaran)}}
                        </td>
                        <td class="px-6 py-4">
                            {{formatRupiah((bonus.presentasiA * bonus.pembayaran) / 100)}}
                        </td>
                        <td class="px-6 py-4">
                            {{formatRupiah((bonus.presentasiB * bonus.pembayaran) / 100)}}
                        </td>
                        <td class="px-6 py-4">
                            {{formatRupiah((bonus.presentasiC * bonus.pembayaran) / 100)}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </Auth>
</template>

<script>
import api from '../../api'
import Auth from '../layouts/auth.vue'
export default {
    data() {
        return {
            bonus: {}
        }
    },
    components: {
        Auth
    },
    mounted() {
        api.get('/getBy/'+this.$route.params.id).then((response) => {
            this.bonus = response.data.data 
        })
    },
    methods: {
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(number)
        }
    }
}
</script>