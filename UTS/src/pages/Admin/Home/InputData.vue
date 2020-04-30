<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-orange">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="ID Driver"
            lazy-rules
            color="teal"
            v-model="id"
            :rules="[
           val => val !== null && val !== '' || 'ID Driver Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-input
            label="Nama Driver"
            lazy-rules
            color="teal"
            v-model="nama"
            :rules="[
           val => val !== null && val !== '' || 'Nama Driver Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="directions_bike"/>
            </template>
          </q-input>

          <q-input
            label="No Telepon"
            lazy-rules
            color="teal"
            v-model="notelp"
            :rules="[
           val => val !== null && val !== '' || 'Nomor Telepon Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="local_phone"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Kendaraan"
            lazy-rules
            color="teal"
            v-model="kendaraan"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Kendaraan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="two_wheeler"/>
            </template>
          </q-input>

          <q-input
            label="Kode Kendaraan"
            lazy-rules
            color="teal"
            v-model="kode"
            :rules="[
           val => val !== null && val !== '' || 'Kode Kendaraan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="verified_user"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="done"
              label="Simpan Data"
              style="height: 50px"
              color="purple"
              to="/admin"/>
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
      id: null,
      nama: null,
      notelp: null,
      kendaraan: null,
      kode: null
    }
  }
}
</script>

<style scoped>

</style>
