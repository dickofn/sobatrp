<template>
  <Layout class="simulation">
    <section class="banner">
      <div>
        <g-image class="nav__logo-img" src="~/assets/img/rumah-pv-1.jpg" alt="Banner" />
      </div>
    </section>

    <section class="form">
      <b-container>
        <div class="title text-title">Simulation</div>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            class="mb-5"
            id="input-group-1"
            label="Daya Terpasang di Rumah:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              size="lg"
              v-model="power"
              type="number"
              min="0"
              required
              placeholder="VA"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="mb-5"
            id="input-group-2"
            label="Rata-rata Tagihan Listrik per Bulan:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              size="lg"
              v-model="bill"
              type="number"
              min="0"
              required
              placeholder="Rupiah"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-5" id="input-group-3" label="Luas Bangunan:" label-for="input-3">
            <b-form-input
              id="input-3"
              size="lg"
              v-model="area"
              type="number"
              min="0"
              required
              placeholder="M2"
            ></b-form-input>
          </b-form-group>

          <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-form-group
          class="mt-5"
          id="input-group-result"
          label="Estimasi Biaya Sewa Perbulan:"
          label-for="result"
        >
          <b-form-input id="result" size="lg" v-model="result" placeholder="Rupiah" disabled></b-form-input>
        </b-form-group>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Simulation"
  },
  data() {
    return {
      power: "",
      bill: "",
      area: "",
      result: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.result =
        "Rp " +
        this.numberWithCommas(
          parseInt(this.power) + parseInt(this.bill) + parseInt(this.area)
        );
    },
    onReset(evt) {
      evt.preventDefault();
      this.power = "";
      this.bill = "";
      this.area = "";
      this.result = "";
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout.simulation {
  & section.banner {
    img {
      width: 100%;
      max-height: 80vh;
      object-fit: cover;
    }
  }

  & section.form {
    text-shadow: 0 0 1rem #fff;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: linear-gradient(
        to bottom,
        rgba(#fff, 0.6),
        rgba(#fff, 0.8),
        rgba(#fff, 1),
        rgba(#fff, 1),
        rgba(#fff, 1),
        rgba(#fff, 0.8),
        rgba(#fff, 0.6)
      ),
      url("~@/assets/img/seamless-leaf.jpg");
  }
}
</style>