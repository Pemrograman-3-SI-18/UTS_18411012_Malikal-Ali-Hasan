<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-orange">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey">Pembayaran</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="Kode Transaksi"
            lazy-rules
            color="purple"
            v-model="kodetr"
            :rules="[
           val => val !== null && val !== '' || 'Automatis Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="work_outline"/>
            </template>
          </q-input>

          <q-input
            label="User Name"
            lazy-rules
            color="purple"
            v-model="user"
            :rules="[
           val => val !== null && val !== '' || 'Masukan User Name Anda'
           ]">
            <template v-slot:append>
              <q-icon name="person_pin"/>
            </template>
          </q-input>

          <q-input
            label="ID Driver"
            lazy-rules
            color="purple"
            v-model="id"
            :rules="[
           val => val !== null && val !== '' || 'Tanyakan Pada Driver'
           ]">
            <template v-slot:append>
              <q-icon name="directions_bike"/>
            </template>
          </q-input>

          <q-input
            label="Harga"
            lazy-rules
            color="purple"
            v-model="harga"
            :rules="[
           val => val !== null && val !== '' || 'Harga Dibutuhkan Konfirmasi Driver'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="account_balance_wallet"
              label="Bayar Sekarang"
              style="height: 50px"
              color="purple"
              to="/customer/transaksi"/>
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
      kodetr: null,
      user: null,
      id: null,
      harga: null
    }
  }
}
</script>

<style scoped>

</style>
