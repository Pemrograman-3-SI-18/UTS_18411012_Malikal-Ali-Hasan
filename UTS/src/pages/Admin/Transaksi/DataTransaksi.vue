<template>
  <q-page class="bg-orange" view="hHh Lpr LFf">
    <div class="q-pa-md offset-1">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>

          <q-btn color="purple" :disable="loading"
                 label="Edit Data"
                 icon="edit"/>

          <q-btn color="purple" :disable="loading"
                 label="Hapus Data"
                 class="offset-1"
                 icon="delete"/>

          <q-btn color="purple" :disable="loading"
                 label="Refresh"
                 class="offset-1"
                 icon="cached"/>

          <q-space />
          Masukan data :
          <q-input borderless dense debounce="300" color="blue-grey" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'user', align: 'center', label: 'User Name', field: 'user', sortable: true },
        { name: 'id', align: 'center', label: 'ID Driver', field: 'id' },
        { name: 'jemput', align: 'center', label: 'Lokasi Penjemputan', field: 'jemput' },
        { name: 'antar', align: 'center', label: 'Tujuan Antar', field: 'antar', sortable: true },
        { name: 'harga', align: 'center', label: 'Harga', field: 'harga' },
        { name: 'pajak', align: 'center', label: 'Potongan Pajak', field: 'pajak' },
        { name: 'total', align: 'center', label: 'Total', field: 'total' }
      ],

      data: [
        {
          kodetransaksi: 'T0001',
          user: 'Waluyo',
          id: 'D0001',
          jemput: 'Pasca Sarjana Universitas Bandar Lampung',
          antar: 'Marketing Universitas Bandar Lampung',
          harga: 'Rp6.000',
          pajak: '10%',
          total: 'Rp5.400'
        },

        {
          kodetransaksi: 'T0002',
          user: 'Mustofa',
          id: 'D0003',
          jemput: 'Pasca Sarjana Universitas Bandar Lampung',
          antar: 'Mall Bumi Kedaton',
          harga: 'Rp15.000',
          pajak: '10%',
          total: 'Rp13.500'
        },

        {
          kodetransaksi: 'T0003',
          user: 'Samsul',
          id: 'D0001',
          jemput: 'Marketing Universitas Bandar Lampung',
          antar: 'Pasca Sarjana Universitas Bandar Lampung',
          harga: 'Rp6.000',
          pajak: '10%',
          total: 'Rp5.400'
        },

        {
          kodetransaksi: 'T0004',
          user: 'Samsul',
          id: 'D0002',
          jemput: 'Pasca Sarjana Universitas Bandar Lampung',
          antar: 'Marketing Universitas Bandar Lampung',
          harga: 'Rp6.000',
          pajak: '10%',
          total: 'Rp5.400'
        },

        {
          kodetransaksi: 'T0005',
          user: 'Waluyo',
          id: 'D0003',
          jemput: 'Marketing Universitas Bandar Lampung',
          antar: 'FitriNop Swalayan',
          harga: 'Rp5.000',
          pajak: '10%',
          total: 'Rp4.500'
        },

        {
          kodetransaksi: 'T0006',
          user: 'Mustofa',
          id: 'D0002',
          jemput: 'Marketing Universitas Bandar Lampung',
          antar: 'Terminal Raja Basa',
          harga: 'Rp22.000',
          pajak: '10%',
          total: 'Rp19.800'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
