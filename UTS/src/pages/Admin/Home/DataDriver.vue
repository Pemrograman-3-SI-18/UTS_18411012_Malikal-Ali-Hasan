<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">

        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">

            <q-card-section align="center">
              <q-img spinner-color="white"
                     style="height: 100%; max-width: 80%"
                     placeholder-src="statics/driver/naruto.jpg"
                     src="statics/driver/naruto.jpg"/>
            </q-card-section>

            <q-card-section>
              <div>
                ID Driver: D0001 // Nama: Naruto
              </div>
              <div>
                No Telpon: 089612383218
              </div>
              <div>
                Jenis Kendaraan: Honda Beat
            </div>
              <div>
                Kode Kendaraan: BE 1827 AB
              </div>
            </q-card-section>

            <q-card-section>
              <div>
                <q-btn color="blue"
                       label="Edit Data"
                       rounded flat icon="edit"
                       unelevated no-caps/>
                <q-btn rounded flat icon="delete"
                       class="offset-1"
                       label="Hapus Data"
                       unelevated no-caps
                       color="negative"/>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">

            <q-card-section align="center">
              <q-img spinner-color="white"
                     style="height: 100%; max-width: 61%"
                     placeholder-src="statics/driver/sasuke.jpg"
                     src="statics/driver/sasuke.jpg"/>
            </q-card-section>

            <q-card-section>
              <div>
                ID Driver: D0002 // Nama: Sasuke
              </div>
              <div>
                No Telpon: 087817268829
              </div>
              <div>
                Jenis Kendaraan: Honda Vario
              </div>
              <div>
                Kode Kendaraan: BE 3726 OT
              </div>
            </q-card-section>

            <q-card-section>
              <div>
                <q-btn color="blue"
                       label="Edit Data"
                       rounded flat icon="edit"
                       unelevated no-caps/>
                <q-btn rounded flat icon="delete"
                       class="offset-1"
                       label="Hapus Data"
                       unelevated no-caps
                       color="negative"/>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-white text-blue-grey-14">

            <q-card-section align="center">
              <q-img spinner-color="white"
                     style="height: 100%; max-width: 69%"
                     placeholder-src="statics/driver/garra.jpg"
                     src="statics/driver/garra.jpg"/>
            </q-card-section>

            <q-card-section>
              <div>
                ID Driver: D0003 // Nama: Garra
              </div>
              <div>
                No Telpon: 081327920029
              </div>
              <div>
                Jenis Kendaraan: Honda PCX
              </div>
              <div>
                Kode Kendaraan: BE 8303 YB
              </div>
            </q-card-section>

            <q-card-section>
              <div>
                <q-btn color="blue"
                       label="Edit Data"
                       rounded flat icon="edit"
                       unelevated no-caps/>
                <q-btn rounded flat icon="delete"
                       class="offset-1"
                       label="Hapus Data"
                       unelevated no-caps
                       color="negative"/>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataBuku'
}
</script>

<style scoped>

</style>
