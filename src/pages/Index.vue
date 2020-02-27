<template>
  <Layout class="home">
    <section class="top">
      <b-container>
        <div class="title">
          <g-image class="nav__logo-img" src="~/assets/img/logo-large.png" alt="Logo" />
          <div class="txt text-left text-white d-flex align-items-center" sm="12" lg="5">
            &#8220; To provide a smart and sustainable SOLAR POWER solutions for homes,
            <br />Housing complex, commercial buildings and industries. &#8221;
          </div>
        </div>
      </b-container>
    </section>

    <section class="benefit">
      <b-container>
        <h4 class="title text-title">
          What Do You Get from
          <g-image class="nav__logo-img" src="~/assets/img/logo.png" alt="Logo" />?
        </h4>
        <h5
          class="subtitle mt-5 pt-5 text-subtitle"
        >A Hybrid Solar System – Renewable and Clean Energy</h5>
        <div class="separator"></div>
        <div class="list mb-5 pb-5">
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
        <h5 class="subtitle mt-5 pt-5 text-subtitle">Benefits:</h5>
        <div class="separator"></div>
        <div class="ben mt-5">
          <b-row class="mb-lg-5 pb-lg-5">
            <b-col class="ben__item mb-5 mb-lg-0 text-center" sm="12" lg="3" offset-lg="1">
              <div class="img">
                <g-image class="nav__logo-img" src="~/assets/img/ben-1.png" alt="Benefit 1" />
              </div>
              <div class="separator"></div>
              <div
                class="txt"
              >Custom Designed System Based on Usage Characteristic to Maximize Your Efficiency</div>
            </b-col>
            <b-col class="ben__item mb-5 mb-lg-0 text-center" sm="12" lg="3" offset-lg="1">
              <div class="img">
                <g-image class="nav__logo-img" src="~/assets/img/ben-2.png" alt="Benefit 2" />
              </div>
              <div class="separator"></div>
              <div class="txt">Innovative Payment and Pricing Scheme</div>
            </b-col>
            <b-col class="ben__item mb-5 mb-lg-0 text-center" sm="12" lg="3" offset-lg="1">
              <div class="img">
                <g-image class="nav__logo-img" src="~/assets/img/ben-3.png" alt="Benefit 3" />
              </div>
              <div class="separator"></div>
              <div class="txt">Reliable and Long Life</div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="ben__item mb-5 mb-lg-0 text-center" sm="12" lg="3" offset-lg="3">
              <div class="img">
                <g-image class="nav__logo-img" src="~/assets/img/ben-4.png" alt="Benefit 4" />
              </div>
              <div class="separator"></div>
              <div class="txt">Free Installation and Maintenance and 24hr Service Care</div>
            </b-col>
            <b-col class="ben__item mb-5 mb-lg-0 text-center" sm="12" lg="3" offset-lg="1">
              <div class="img">
                <g-image class="nav__logo-img" src="~/assets/img/ben-5.png" alt="Benefit 5" />
              </div>
              <div class="separator"></div>
              <div class="txt">Reduce Carbon Footprint</div>
            </b-col>
          </b-row>
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
      padding-top: 5rem;
      padding-bottom: 5rem;
      text-align: left;

      @media (max-width: 992px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      img {
        width: 50%;

        @media (max-width: 992px) {
          width: 100%;
        }
      }
      .txt {
        margin-top: 3rem;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 2px;
        line-height: 3rem;
      }
    }
  }

  & section.benefit {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .title {
      text-shadow: 2px 1px 2px #eea915;
    }

    .subtitle {
      text-shadow: 0 0 1px #888;
    }

    .ben {
      margin-top: 5rem;

      .ben__item {
        img {
          width: auto;
          max-height: 10rem;
          object-fit: contain;
          margin-bottom: 1rem;
        }

        .separator {
          background-color: var(--primary);
          width: 30%;
          margin-left: auto;
          margin-right: auto;
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
    .table th,
    .table td {
      border-top: 2px solid var(--primary);
    }
  }
}
</style>
