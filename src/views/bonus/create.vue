<template>
  <Auth>
    <div class="w-2/3 mx-auto p-5 pl-0 sm:p-20 mt-16 sm:mt-0">
        <h3 class="text-xl sm:text-2xl font-semibold text-center text-white sm:text-left sm:ml-52">Create Bonus</h3>
            <form class="bg-gray-800 p-8 rounded-md shadow-md mt-5" @submit.prevent="submitBonus">
                <div class="mb-5 grid grid-cols-2">
                    <div class="flex">
                        <label for="pembayaran" class="block w-1/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Pembayaran</label>
                        <input type="text" id="pembayaran" v-model="form.pembayaran" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                </div>
                <div class="mb-5 grid grid-cols-3 gap-2">
                    <div class="flex">
                        <label for="buruhA" class="block w-2/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Buruh A</label>
                        <input type="text" v-model="form.presentasiA" id="buruhA" class="shadow-sm mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <small class="text-white font-bold mt-4">%</small>
                </div>
                <div class="mb-5 grid grid-cols-3 gap-2">
                    <div class="flex">
                        <label for="buruhB" class="block w-2/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Buruh B</label>
                        <input type="text" v-model="form.presentasiB" id="buruhB" class="shadow-sm mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <small class="text-white font-bold mt-4">%</small>
                </div>
                <div class="mb-5 grid grid-cols-3 gap-2">
                    <div class="flex">
                        <label for="buruhC" class="block w-2/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Buruh C</label>
                        <input type="text" v-model="form.presentasiC" id="buruhC" class="shadow-sm mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <small class="text-white font-bold mt-4">%</small>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="submit">Submit</button>
                </div>
            </form>

            <div class="w-full flex p-2 bg-white">
                <div class="w-1/2 shadow-2xl">
                   <p>Buruh A</p>
                </div>
                <div class="w-1/2 shadow-2xl">
                    <p>Rp. {{ (form.presentasiA * form.pembayaran) / 100 }}</p>
                </div>
            </div>
            <div class="w-full flex p-2 bg-white">
                <div class="w-1/2 shadow-2xl">
                   <p>Buruh B</p>
                </div>
                <div class="w-1/2 shadow-2xl">
                   <p>Rp. {{ (form.presentasiB * form.pembayaran) / 100 }}</p>
                </div>
            </div>
            <div class="w-full flex p-2 bg-white">
                <div class="w-1/2 shadow-2xl">
                   <p>Buruh C</p>
                </div>
                <div class="w-1/2 shadow-2xl">
                   <p>Rp. {{ (form.presentasiC * form.pembayaran) / 100 }}</p>
                </div>
            </div>
        </div>
  </Auth>
</template>

<script>
import Auth from '../layouts/auth.vue'
import Swal from 'sweetalert2'
import api from '../../api'

export default {
  components: {
    Auth
  },
  data() {
    return {
      form: {
        pembayaran: '',
        presentasiA: '',
        presentasiB: '',
        presentasiC: '',
      },
      presentasiValid: false 
    };
  },
  computed: {
    totalPresentasi() {
      const {presentasiA, presentasiB, presentasiC } = this.form
      return Number(presentasiA) + Number(presentasiB) + Number(presentasiC)
    },
    allFieldsFilled() {
      const {presentasiA, presentasiB, presentasiC } = this.form
      return presentasiA && presentasiB && presentasiC
    },
  },
  watch: {
    totalPresentasi(){
      this.validatePresentasi()
    },
    allFieldFilled() {
      this.validatePresentasi();
    }
  },
  methods: {
    validatePresentasi() {
      if(this.allFieldsFilled) {
        if(this.totalPresentasi !== 100) {
          Swal.fire({
            title: 'Error!',
            text:'Pembagian Bonus Masih Salah',
            icon: 'error',
            confirmButtonText: 'Close'
          })
        }
      }
    },
    async submitBonus(){
      await api.post('/submit-bonus', this.form).then((response) => {
        if(response.data.message === 'success') {
          Swal.fire({
            title: 'Success',
            text: 'Data berhasil disimpan',
            icon: 'success'
          });
        }
      })
    }
  }
};


</script>