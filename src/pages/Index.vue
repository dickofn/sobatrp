<template>
  <Layout class="home">
    <section class="top">
      <b-container>
        <div class="title">
          <h1 class="font-weight-bold">
            <span class="text-primary mr-2">SObat</span>
            <span class="text-secondary">Rp</span>
          </h1>
          <h5>
            <span class="text-primary mr-2">Solar Baterai</span>
            <span class="text-secondary">Rumah Pintar</span>
          </h5>
        </div>
      </b-container>
    </section>

    <section class="benefit">
      <b-container>
        <h4 class="title text-title">What Do You Get from SObat Rp ?</h4>
        <h5 class="subtitle mb-5">A Hybrid Solar System – Renewable and Clean Energy</h5>
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
        <h5 class="subtitle my-5">Benefits:</h5>
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

    <section class></section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.layout.home {
  .text-title {
    text-align: center;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 5rem;
  }

  & section.top {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: linear-gradient(
        to right,
        rgba(#000, 0.9),
        rgba(#1b3003, 0.9),
        rgba(#326305, 0.6)
      ),
      url("~@/assets/img/bg-1.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
  }

  & section.benefit {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .list {
      display: flex;
      flex-direction: column;

      .list-item {
        display: flex;

        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
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
  }
}
</style>
