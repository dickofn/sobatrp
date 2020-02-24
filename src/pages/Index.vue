<template>
  <Layout class="home">
    <section class="top">
      <b-container>
        <div class="title">
          <g-image class="nav__logo-img" src="~/assets/img/logo-large.png" alt="Logo" />
        </div>
      </b-container>
    </section>

    <section class="benefit">
      <b-container>
        <h4 class="title text-title">
          What Do You Get from
          <g-image class="nav__logo-img" src="~/assets/img/logo.png" alt="Logo" />?
        </h4>
        <h5 class="subtitle text-subtitle mb-5">A Hybrid Solar System – Renewable and Clean Energy</h5>
        <div class="list my-5 pb-5">
          <div class="list-item">
            <div class="index mr-3">1.</div>
            <div
              class="content"
            >Hybrid Solar Systems generate power in the same way as a common grid-tie solar system but use special hybrid inverters and batteries to store energy for later use.</div>
          </div>
          <div class="list-item">
            <div class="index mr-3">2.</div>
            <div
              class="content"
            >Solar Energy create clean, renewable power from the sun and benefits the environment. Using Solar Energy instead of fossil fuels reduces carbon footprint.</div>
          </div>
        </div>
        <b-row class="justify-content-center">
          <b-col sm="12" md="8">
            <b-table-simple fixed thead-class="hidden_header">
              <b-tbody>
                <b-tr>
                  <b-td rowspan="2">P type monocrystalline Silicon Photovoltaics Solar Panel</b-td>
                  <b-td>Power Conversion System (PCS)</b-td>
                </b-tr>
                <b-tr>
                  <b-td>LED Lighting System</b-td>
                </b-tr>
                <b-tr>
                  <b-td>Lithium Ion Battery</b-td>
                  <b-td>Smart Application</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-col>
        </b-row>
        <h5 class="subtitle text-subtitle my-5">Benefits:</h5>
        <div class="list">
          <div class="list-item">High Quality Products</div>
          <div class="list-item">Innovative Payment and Pricing Scheme</div>
          <div class="list-item">Reliable and Long Life</div>
          <div class="list-item">Free Installation and Maintenance and 24hr Service Care</div>
          <div
            class="list-item"
          >Custom Designed System Based on Usage Characteristic to Maximize Your Efficiency</div>
          <div class="list-item">Reduce Carbon Footprint</div>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  created() {
    this.$store.dispatch("toogleLoading", false);
  }
};
</script>

<style lang="scss" scoped>
.layout.home {
  & section.top {
    padding-top: 10rem;
    padding-bottom: 10rem;
    background: linear-gradient(
        to left,
        rgba(#000, 0.9),
        rgba(#1b3003, 0.9),
        rgba(#326305, 0.6)
      ),
      url("~@/assets/img/forest.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .title {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  & section.benefit {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: rgba(#b4895f, 0.3);

    .title {
      text-shadow: 2px 1px 2px #eea915;
    }

    .subtitle {
      text-shadow: 0 0 1px #888;
    }
  }
}
</style>

<style lang="scss">
.layout.home {
  & section.benefit {
    .hidden_header {
      display: none;
    }
    .table th,
    .table td {
      border-top: 1px solid var(--secondary);
    }
  }
}
</style>
