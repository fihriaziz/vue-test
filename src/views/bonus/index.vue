<template>
  <Auth>
    <div class="p-4 sm:p-20 sm:ml-52 items-center text-center shadow-sm mt-6 sm:mt-0 min-h-screen">
        <h3 class="text-2xl mt-10 sm:mt-4 sm:mb-3 font-semibold text-center sm:text-left text-white">Tabel Bonus</h3>
        <div class="relative overflow-x-auto shadow-md rounded-md mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh A
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh B
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Buruh C
                        </th>
                        <th scope="col" class="px-6 py-3 text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody v-for="bonus in bonuses" :key="bonus.id">
                    <tr class="odd:bg-white odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td class="px-6 py-4">
                            Rp. {{formatRupiah((bonus.presentasiA * bonus.pembayaran) / 100)}}
                        </td>
                        <td class="px-6 py-4">
                            Rp. {{formatRupiah((bonus.presentasiB * bonus.pembayaran) / 100)}}
                        </td>
                        <td class="px-6 py-4">
                            Rp. {{formatRupiah((bonus.presentasiC * bonus.pembayaran) / 100)}}
                        </td>
                        <td class="px-6 py-4">
                            <router-link :to='`/view/bonus/${bonus.id}`' class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">view detail</router-link>
                            <router-link :to='`/edit/bonus/${bonus.id}`' v-if="isAdmin" class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">modify</router-link>
                            <button v-if="isAdmin" @click="deleteData(bonus.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">delete</button>
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
import Swal from 'sweetalert2'
import Auth from '../layouts/auth.vue'
export default {
    data() {
        return {
            bonuses: [],
            role: localStorage.getItem('role')
        }
    },
    components: {
        Auth
    },
    computed: {
        isAdmin() {
            return this.role === 'admin'
        }
    },
    mounted() {
        api.get('/getAll').then((response) => {
            this.bonuses = response.data.data 
        })
    },
    methods : {
        deleteData(id) {
            Swal.fire({
                    title: "Yakin ingin dihapus?",
                    showDenyButton: true,
                    confirmButtonText: "Ya",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Berhasil dihapus!", "", "success");
                        api.delete(`/delete/${id}`).then((response) => {
                            if(response.data.message === 'success') {
                                this.bonuses = this.bonuses.filter(bonus => bonus.id !== id)
                            }
                        })
                    } else if (result.isDenied) {
                        Swal.fire("Tidak jadi dihapus", "", "info");
                    }
                });
        },
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            }).format(number)
        }
    }
}
</script>