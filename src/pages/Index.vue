<template>
  <Layout class="home">
    <section class="top">
      <b-container>
        <div class="title">
          <g-image
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="3000"
            class="nav__logo-img"
            src="~/assets/img/logo-large.png"
            alt="Logo"
          />
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="3000"
            class="txt text-left text-white d-flex align-items-center"
            sm="12"
            lg="5"
          >
            &#8220; To provide a smart and sustainable SOLAR POWER solutions for homes,
            <br />Housing complex, commercial buildings and industries. &#8221;
          </div>
        </div>
      </b-container>
    </section>

    <section class="benefit">
      <b-container>
        <h4 data-aos="fade" class="title text-title">
          What Do You Get from
          <g-image class="nav__logo-img" src="~/assets/img/logo.png" alt="Logo" />?
        </h4>
        <h5
          data-aos="fade"
          class="subtitle mt-5 pt-5 text-subtitle"
        >A Hybrid Solar System – Renewable and Clean Energy</h5>
        <div class="separator"></div>
        <div class="hybrid">
          <b-row class="justify-content-center">
            <b-col
              data-aos="fade"
              sm="12"
              md="8"
              lg="4"
              class="content"
            >Hybrid Solar Systems generate power in the same way as a common grid-tie solar system but use special hybrid inverters and batteries to store energy for later use</b-col>
            <b-col
              data-aos="fade"
              sm="12"
              md="8"
              lg="4"
              class="content"
            >Solar Energy create clean, renewable power from the sun and benefits the environment. Using Solar Energy instead of fossil fuels reduces carbon footprint</b-col>
          </b-row>
        </div>
        <b-row class="justify-content-center">
          <b-col sm="12" md="8">
            <b-table-simple data-aos="fade" fixed thead-class="hidden_header">
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
        <h5 data-aos="fade" class="subtitle mt-5 pt-5 text-subtitle">Benefits:</h5>
        <div class="separator"></div>
        <div class="ben mt-5">
          <b-row class="mb-lg-5 pb-lg-5">
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-6.png" alt="Benefit 6" />
                </div>
                <div class="txt">High Quality Products</div>
              </div>
            </b-col>
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" data-aos-delay="100" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-2.png" alt="Benefit 2" />
                </div>
                <div class="txt">Innovative Payment and Pricing Scheme</div>
              </div>
            </b-col>
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" data-aos-delay="200" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-3.png" alt="Benefit 3" />
                </div>
                <div class="txt">Reliable and Long Life</div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-4.png" alt="Benefit 4" />
                </div>
                <div class="txt">Free Installation and Maintenance and 24hr Service Care</div>
              </div>
            </b-col>
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" data-aos-delay="100" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-1.png" alt="Benefit 1" />
                </div>
                <div
                  class="txt"
                >Custom Designed System Based on Usage Characteristic to Maximize Your Efficiency</div>
              </div>
            </b-col>
            <b-col class="mb-5 mb-lg-0 text-center" md="12" lg="4">
              <div data-aos="zoom-in" data-aos-delay="200" class="ben__item">
                <div class="img">
                  <g-image class="nav__logo-img" src="~/assets/img/ben-5.png" alt="Benefit 5" />
                </div>
                <div class="txt">Reduced Carbon Footprint</div>
              </div>
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
    min-height: 100vh;
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
    display: flex;
    align-items: center;

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
    background: linear-gradient(to bottom, rgba(#fff, 0.6), rgba(#fff, 0.6)),
      url("~@/assets/img/seamless-pine.svg");
    color: #000;
    font-size: 1.8rem;

    .title {
      text-shadow: 2px 2px 2px var(--secondary);
      color: varr(--primary);
    }

    .subtitle {
      color: var(--secondary);
      text-shadow: 0 0 5px #eee;
      font-weight: 700;
    }

    .hybrid {
      padding: 2rem;
      .content {
        background-color: var(--secondary);
        color: #fff;
        margin-bottom: 2rem;
        padding: 2rem;
        box-shadow: 3px 3px 0 #000;
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }

    .ben {
      margin-top: 5rem;

      .ben__item {
        background-color: rgba(#fff, 0.7);
        border-radius: 1rem;
        box-shadow: 3px 5px 5px #000;
        padding: 2rem;
        display: flex;
        align-items: center;

        img {
          max-width: 10rem;
          height: 15rem;
          object-fit: contain;
          margin-bottom: 1rem;
          border-right: 2px solid var(--secondary);
          padding-right: 1rem;
          padding-left: 1rem;
        }

        .txt {
          padding-left: 1rem;
          flex: 1;
        }
      }
    }

    .separator {
      background-color: var(--primary);
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
