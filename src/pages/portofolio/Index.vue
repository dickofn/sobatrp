<template>
  <Layout class="portofolio">
    <section data-aos="slide-down" data-aos-once="true" class="banner">
      <b-container>
        <b-row class="align-items-center">
          <b-col sm="12" lg="8" class="pl-lg-0">
            <g-image src="~/assets/img/portofolio-banner.png" alt="Portofolio banner"></g-image>
          </b-col>
          <b-col sm="12" lg="4" class="pl-lg-5 pt-5 pt-lg-0 pb-5 pb-lg-0">
            <div class="title-container">
              <div class="title">Our Portofolio</div>
              <div class="separator"></div>
              <div
                class="subtitle"
              >With Solar Energy we will create clean, renewable power from the sun and benefits the environment. Using Solar Energy instead of fossil fuels reduces carbon footprint</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section data-aos="slide-up" data-aos-once="true" class="main">
      <b-container>
        <b-row>
          <b-col sm="12" lg="3" class="main__nav">
            <div id="portofolioNavigation" class="navigation pt-lg-5 mt-lg-5">
              <div class="navigation__title">Navigation</div>
              <div class="separator"></div>
              <div class="navigation__items">
                <div
                  class="item"
                  v-scroll-to="{el:'#renewableEnergy', offset: -74}"
                >Renewable Energy</div>
                <div
                  class="item"
                  v-scroll-to="{el:'#energyAutonomous', offset: -74}"
                >Energy Autonomous</div>
                <div class="item" v-scroll-to="{el:'#solarPanel', offset: -74}">Solar Panel</div>
                <div class="item" v-scroll-to="{el:'#energyStorage', offset: -74}">Energy Storage</div>
                <div class="item" v-scroll-to="{el:'#powerStation', offset: -74}">Power Station</div>
                <div class="item" v-scroll-to="{el:'#solarEnergy', offset: -74}">Solar Energy</div>
              </div>
            </div>
          </b-col>
          <b-col sm="12" lg="9" class="main__content">
            <div id="renewableEnergy" class="renewable my-5 py-5">
              <div class="content pr-md-3">
                <div
                  class="title"
                >Huadian Tibet Nima renewable energy LAN project is the largest solar and diesel energy storage micro grid power plant in the world</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">22MWp photovoltaic power station system</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">12MW bi-directional inverter</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">12MWh lithium ion battery pack</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div
                      class="content"
                    >36MWh lead carbon battery pack and 2sets 1500kW diesel generators</div>
                  </div>
                </div>
              </div>
              <div class="image">
                <g-image src="~/assets/img/port-1-1.png" alt="Renewable energy"></g-image>
              </div>
            </div>
            <hr />
            <div id="energyAutonomous" class="autonomous my-5 py-5">
              <div class="image">
                <g-image src="~/assets/img/port-2-1.png" alt="Renewable energy"></g-image>
              </div>
              <div class="content">
                <div
                  class="title"
                >Australia’s first energy autonomous Medical Center, Dorrigo, New South Wales</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">36kW photovoltaic power station system</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">6 x ABB 6kW inverters</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div id="solarPanel" class="panel my-5 py-5">
              <div class="image">
                <g-image src="~/assets/img/port-3-1.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-3-2.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-3-3.png" alt="Renewable energy"></g-image>
              </div>
              <div class="content">
                <div
                  class="title"
                >World Bank’s project to supply 2,600 school with Solar Panel – Lithium Ion Battery in Pakistan</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">4.5MW PV panel6 x ABB 6kW inverters</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div
                      class="content"
                    >12MWH lithium ion battery and 2,600 pcs inverters and other components</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div id="energyStorage" class="storage-1 my-5 py-5">
              <div class="content">
                <div
                  class="title"
                >Zhejiang (Haining) Institute of Electrical Engineering, China. Mark and Spencer Logistic Park Energy Storage</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div
                      class="content"
                    >High-density multi-access point building photovoltaic system grid connected and distribution network coordination key technology power station; 0.5MWh energy storage system</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">1MW PV + 572kWH located in Peterborough, UK</div>
                  </div>
                </div>
              </div>
              <div class="image image--multi">
                <g-image src="~/assets/img/port-4-1.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-4-2.png" alt="Renewable energy"></g-image>
              </div>
              <div class="image">
                <g-image src="~/assets/img/port-4-3.png" alt="Renewable energy"></g-image>
              </div>
            </div>
            <div id="energyStorage" class="storage-2 my-5 py-5">
              <div class="content">
                <div class="title">Raugan Village, Huangyuan County, Qinghai, China</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">PV + energy storage, capacity configuration 500kWH</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div
                      class="content"
                    >The photovoltaic microgrid energy storage system is constructed by utilizing the abundant solar lighting resources in the local area. The distributed photovoltaic power generation is used to generate electricity for 24 new energy residential buildings, which not only reduces the electricity cost of villagers, but also reduces the environmental pollution</div>
                  </div>
                </div>
              </div>
              <div class="image">
                <g-image src="~/assets/img/port-5-1.png" alt="Renewable energy"></g-image>
              </div>
            </div>
            <hr />
            <div id="powerStation" class="station my-5 py-5">
              <div class="image">
                <g-image src="~/assets/img/port-6-1.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-6-2.png" alt="Renewable energy"></g-image>
              </div>
              <div class="content">
                <div class="title">Zhiduo Photovoltaic Power Station, Qinghai, China</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div
                      class="content"
                    >Photovoltaic construction capacity of 60.48kW and the energy storage capacity of 880KWh. Through the implementation of this project, the problem of the local villages and towns without electricity for along time has been solved</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div id="solarEnergy" class="energy my-5 py-5">
              <div class="image">
                <g-image src="~/assets/img/port-7-1.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-7-2.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-7-3.png" alt="Renewable energy"></g-image>
                <g-image src="~/assets/img/port-7-4.png" alt="Renewable energy"></g-image>
              </div>
              <div class="content">
                <div class="title">Indonesia - Seribu Pulau Project Solar Energy</div>
                <div class="list">
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">Semau Island 450kWp/1.4MWh</div>
                  </div>
                  <div class="list-item">
                    <div class="index mr-3">&#9635;</div>
                    <div class="content">Salura Island 150kWp/1MWh</div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Portofolio"
  },
  mounted() {
    const nav = document.getElementById("portofolioNavigation");
    const sticky = nav.getBoundingClientRect().top + window.scrollY - 98;

    function toSticky() {
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }

    window.onscroll = function() {
      if (window.innerWidth > 991) {
        toSticky();
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.layout.portofolio {
  & section.banner {
    .row {
      background-color: var(--sky);
      border-bottom: 2px solid var(--secondary);
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }

    .title-container {
      .title {
        font-size: 2.4rem;
        color: var(--primary);
      }

      .subtitle {
        font-size: 1.8rem;
      }
    }
  }

  & section.main {
    .main__nav {
      background-color: var(--secondary);

      .navigation {
        transition: all 0.2s;

        &.sticky {
          position: fixed;
          top: 7.4rem;
        }

        .separator {
          background-color: #555;
        }

        &__title {
          color: #fff;
          font-size: 2rem;
        }

        &__items {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;

          @media (max-width: 992px) {
            flex-direction: row;
            justify-content: space-between;

            & > * {
              width: 50%;
              text-align: center;
              color: var(--secondary);
            }
          }

          .item {
            color: #eee;
            transition: all 0.2s;

            &:not(:last-child) {
              margin-bottom: 1rem;
            }

            &:hover {
              cursor: pointer;
              color: #fff;
            }
          }
        }
      }
    }
    .main__content {
      background-color: var(--sky);
      .content {
        color: #333;
        .title {
          margin-bottom: 2rem;
          font-weight: 700;
        }
      }

      .image {
        width: 100%;

        img {
          width: 100%;
        }
      }

      .renewable {
        display: flex;

        @media (max-width: 768px) {
          flex-direction: column;

          .content {
            margin-bottom: 2rem;
          }
        }
      }

      .autonomous {
        .image {
          margin-bottom: 3rem;
        }
      }

      .panel {
        .image {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;

          img {
            width: 30%;
            object-fit: contain;
          }
        }
      }

      .storage-1 {
        & > .content {
          margin-bottom: 3rem;
        }

        .image {
          &--multi {
            display: flex;

            img {
              max-height: 17rem;
              width: 50%;
              object-fit: cover;
            }
          }
        }
      }

      .storage-2 {
        & > .content {
          margin-bottom: 3rem;
        }
      }

      .station {
        .image {
          margin-bottom: 3rem;
        }
      }

      .energy {
        .image {
          margin-bottom: 3rem;
          display: flex;
          flex-wrap: wrap;

          img {
            width: 50%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>