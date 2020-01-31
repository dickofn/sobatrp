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

    <section class="panel">
      <b-container>
        <h4 class="title text-title">Solar Panel</h4>
        <div class="cards font-weight-light">
          <b-row class="justify-space-between">
            <b-col class="card-container" sm="12" md="6" lg="3">
              <div class="card">High conversion efficiency and more power output per square meter</div>
            </b-col>
            <b-col class="card-container" sm="12" md="6" lg="3">
              <div
                class="card"
              >High Transmission glass feature a unique anti-reflective coating that directs more light on the solar cells, resulting in higher energy yield.</div>
            </b-col>
            <b-col class="card-container" sm="12" md="6" lg="3">
              <div
                class="card"
              >Tested in accordance to the standard IEC 62804, our PV modules have demonstrated resistance against PID (Potential Induced Degradation)</div>
            </b-col>
            <b-col class="card-container" sm="12" md="6" lg="3">
              <div
                class="card"
              >Durable PV modules, independently tested for harsh inviromental conditions such as exposure to salt mist, ammonia and known PID risk factors</div>
            </b-col>
          </b-row>
        </div>
        <div class="info">
          <div
            class="info-item"
          >&#9635; &nbsp; Applying the latest technology and well proven of P-type</div>
          <div class="info-item">&#9635; &nbsp; 20.6% Cell Efficiency</div>
          <div class="info-item">&#9635; &nbsp; 0-5 W Power Tolerance</div>
        </div>
      </b-container>
    </section>

    <section class="battery">
      <b-container>
        <h4 class="title text-title">Lithium Ion Battery</h4>
        <b-row align-v="center">
          <b-col class="text-container" sm="12" lg="8" offset-lg="2">
            <div class="flips">
              <div class="flip-item flip-item--1">
                <div class="flip flip--front">The Safest Lithium Battery</div>
                <div
                  class="flip flip--back"
                >Chemically stable, Resist in High Temp without decomposing and not flammable</div>
              </div>
              <div class="flip-item flip-item--2">
                <div class="flip flip--front">Optimal Energy</div>
                <div class="flip flip--back">Density in volume and weight</div>
              </div>
              <div class="flip-item flip-item--3">
                <div class="flip flip--front">High Efficiency</div>
                <div class="flip flip--back">High charging rate reach 98%</div>
              </div>
              <div class="flip-item flip-item--4">
                <div class="flip flip--front">Rechargeable and long life cycle</div>
                <div class="flip flip--back">Over 4000 cycles</div>
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
    title: "Home"
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.layout.home {
  .text-title {
    text-align: center;
    color: var(--primary);
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  .text-subtitle {
    color: var(--secondary);
    font-weight: 300;
  }

  & section.top {
    padding-top: 10rem;
    padding-bottom: 10rem;
    background: linear-gradient(
        to right,
        rgba(#000, 0.9),
        rgba(#1b3003, 0.9),
        rgba(#326305, 0.6)
      ),
      url("~@/assets/img/forest.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
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

  & section.panel {
    position: relative;
    padding-top: 25rem;
    padding-bottom: 25rem;
    margin-bottom: 8rem;
    transform: skewY(-3deg);

    @media (max-width: 992px) {
      padding-top: 15rem;
      padding-bottom: 15rem;
    }
    @media (max-width: 768px) {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    &::before {
      position: absolute;
      z-index: -2;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("~@/assets/img/panel.jpg");
      background-size: cover;
      background-attachment: fixed;
      background-position: bottom;
      background-repeat: no-repeat;
    }

    &::after {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(#000, 0.9),
        rgba(#1b3003, 0.9),
        rgba(#326305, 0.6)
      );
    }

    & > * {
      transform: skewY(3deg);
    }

    .cards {
      margin-bottom: 5rem;

      .card-container {
        .card {
          background-color: rgba(#fff, 0.3);
          color: #ddd;
          padding: 2rem;
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          text-align: center;
          font-size: 1.3rem;
          letter-spacing: 3px;
          transition: all 0.2s;

          &:hover {
            transform: scale(1.1) translateY(-1rem);
            box-shadow: 0 1rem 2rem #000;

            @media (max-width: 992px) {
              transform: scale(1.1);
              box-shadow: 0 0 3srem #000;
            }
          }
        }

        @media (max-width: 992px) {
          min-height: 10rem;
          margin-bottom: 2rem;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;

      .info-item {
        color: #bbb;

        &:not(:last-child) {
          margin-right: 5rem;
        }
      }
    }
  }

  & section.battery {
    padding-top: 10rem;
    padding-bottom: 12rem;

    .text-container {
      .flips {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .flip-item {
          margin: 1rem;
          width: 20%;
          perspective: 150rem;
          position: relative;
          height: 30rem;

          @media (max-width: 768px) {
            height: auto;
            width: 100%;
          }

          .flip {
            height: 100%;
            transition: all 0.8s ease;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            backface-visibility: hidden;
            border-radius: 3px;
            overflow: hidden;
            box-shadow: 0 1rem 2rem rgba(#000, 0.15);

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media (max-width: 768px) {
              position: relative;
              height: auto;
              border-radius: 0;
            }

            &--front {
              padding: 2rem;
              color: #eee;
            }

            &--back {
              padding: 1rem;
              transform: rotateY(180deg);
              background-color: var(--secondary);
              color: #fff;

              @media (max-width: 768px) {
                transform: rotateY(0);
                min-height: 7rem;
              }
            }
          }

          &--1 .flip--front {
            background: linear-gradient(
                to right,
                rgba(#000, 0.5),
                rgba(#000, 0.5)
              ),
              url(~@/assets/img/shield.jpg);
            background-size: cover;
            background-position: center;
          }
          &--2 .flip--front {
            background: linear-gradient(
                to right,
                rgba(#000, 0.5),
                rgba(#000, 0.5)
              ),
              url(~@/assets/img/flow.jpg);
            background-size: cover;
            background-position: center;
          }
          &--3 .flip--front {
            background: linear-gradient(
                to right,
                rgba(#000, 0.5),
                rgba(#000, 0.5)
              ),
              url(~@/assets/img/chart.jpg);
            background-size: cover;
            background-position: center;
          }
          &--4 .flip--front {
            background: linear-gradient(
                to right,
                rgba(#000, 0.5),
                rgba(#000, 0.5)
              ),
              url(~@/assets/img/circular.jpg);
            background-size: cover;
            background-position: center;
          }

          &:hover .flip--front {
            transform: rotateY(-180deg);

            @media (max-width: 768px) {
              transform: none;
            }
          }

          &:hover .flip--back {
            transform: rotateY(0);
          }
        }
      }
    }

    .img-container {
      img {
        width: 100%;
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
