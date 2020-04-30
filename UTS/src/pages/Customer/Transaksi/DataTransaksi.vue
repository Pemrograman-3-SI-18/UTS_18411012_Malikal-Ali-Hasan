<template>
  <q-page class="bg-orange">
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <span class="text-h5 text-weight-light q-pa-md">
            <span class="text-blue-grey-14">Riwayat Transaksi</span>
          </span>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
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
        { name: 'harga', align: 'center', label: 'Harga', field: 'harga' }
      ],

      data: [
        {
          kodetransaksi: 'T0001',
          user: 'Waluyo',
          id: 'D0001',
          jemput: 'Pasca Sarjana Universitas Bandar Lampung',
          antar: 'Marketing Universitas Bandar Lampung',
          harga: 'Rp6.000'
        },

        {
          kodetransaksi: 'T0005',
          user: 'Waluyo',
          id: 'D0003',
          jemput: 'Marketing Universitas Bandar Lampung',
          antar: 'FitriNop Swalayan',
          harga: 'Rp5.000'
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
