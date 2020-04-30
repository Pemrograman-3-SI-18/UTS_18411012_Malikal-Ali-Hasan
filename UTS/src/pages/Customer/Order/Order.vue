<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-orange">
    <q-card flat class="bg-white q-pa-md">
      <div class="q-pa-md">
        <q-form class="q-gutter-md">

          <div class="q-gutter-md-2 offset-1 col-xs-2" align="center">
            <q-img spinner-color="white" align="center" style="height: 100%; max-width: 90mm" placeholder-src="statics/Logo.jpg" src="statics/Logo.jpg"> </q-img>
          </div>

          <q-input
            label="Lokasi Jemput Anda"
            lazy-rules
            color="purple"
            v-model="jemput"
            :rules="[val => val !== null && val !== '' || 'Lokasi Penjemputan Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="my_location"/>
            </template>
          </q-input>

          <q-input
            label="Mau Kemana Kita hari ini?"
            lazy-rules
            color="purple"
            v-model="antar"
            :rules="[val => val !== null && val !== '' || 'Alamat Tujuan Antar Dibutuhkan']">
            <template v-slot:append>
              <q-icon name="edit_location"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="directions_bike"
              label="Yuk, Berangkat !"
              style="height: 50px"
              color="purple"
              to="/customer/pembayaran"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      jemput: null,
      antar: null
    }
  }
}
</script>

<style scoped>

</style>
