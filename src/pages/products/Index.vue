<template>
  <Layout class="products">
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

    <section class="inverter">
      <b-container>
        <div class="card">
          <h4 class="card-title text-title">Inverter System</h4>
          <div class="card-content">
            <div class="list">
              <div class="list-item">
                <div class="index mr-3">&#9635;</div>
                <div
                  class="content"
                >Automatic switch for efficiency between solar energy, battery and connect to grid</div>
              </div>
              <div class="list-item">
                <div class="index mr-3">&#9635;</div>
                <div
                  class="content"
                >Suitable for any electrical equipment and include voltage stabilizer</div>
              </div>
              <div class="list-item">
                <div class="index mr-3">&#9635;</div>
                <div class="content">Adjustable working mode based on requirements</div>
              </div>
              <div class="list-item">
                <div class="index mr-3">&#9635;</div>
                <div
                  class="content"
                >All around protection (overheat, short-current, overload) and self recovery</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="text-center pt-5 mt-5">
          <g-image class="nav__logo-img" src="~/assets/img/inverter.png" alt="Inverter System" />
        </!--> -->
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Products"
  }
};
</script>

<style lang="scss" scoped>
.layout.products {
  & section.panel {
    position: relative;
    padding-top: 16rem;
    padding-bottom: 16rem;

    @media (max-width: 992px) {
      padding-top: 13rem;
      padding-bottom: 13rem;
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
              box-shadow: 0 0 3rem #000;
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
    padding-bottom: 10rem;

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
              color: #fff;
              text-shadow: 0px 0px 1rem #000;
            }

            &--back {
              padding: 1rem;
              transform: rotateY(180deg);
              background-color: var(--secondary);
              color: #fff;
              text-shadow: 0px 0px 2rem #000;

              @media (max-width: 768px) {
                transform: rotateY(0);
                min-height: 7rem;
              }
            }
          }

          &--1 {
            .flip {
              &--front {
                background: linear-gradient(
                    to right,
                    rgba(#889873, 0.6),
                    rgba(#889873, 0.6)
                  ),
                  url(~@/assets/img/shield.jpg);
                background-size: cover;
                background-position: center;
              }
              &--back {
                background-color: #889873;
              }
            }
            &:hover .flip {
              box-shadow: 0 1rem 2rem rgba(#889873, 1);
            }
          }
          &--2 {
            .flip {
              &--front {
                background: linear-gradient(
                    to right,
                    rgba(#889873, 0.6),
                    rgba(#ffa500, 0.6)
                  ),
                  url(~@/assets/img/flow.jpg);
                background-size: cover;
                background-position: center;
              }
              &--back {
                background-color: #ffa500;
              }
            }
            &:hover .flip {
              box-shadow: 0 1rem 2rem rgba(#ffa500, 1);
            }
          }
          &--3 {
            .flip {
              &--front {
                background: linear-gradient(
                    to right,
                    rgba(#ffa500, 0.6),
                    rgba(#bb5500, 0.6)
                  ),
                  url(~@/assets/img/chart.jpg);
                background-size: cover;
                background-position: center;
              }
              &--back {
                background-color: #bb5500;
              }
            }
            &:hover .flip {
              box-shadow: 0 1rem 2rem rgba(#bb5500, 1);
            }
          }
          &--4 {
            .flip {
              &--front {
                background: linear-gradient(
                    to right,
                    rgba(#bb5500, 0.6),
                    rgba(#8a0303, 0.6)
                  ),
                  url(~@/assets/img/circular.jpg);
                background-size: cover;
                background-position: center;
              }
              &--back {
                background-color: #8a0303;
              }
            }
            &:hover .flip {
              box-shadow: 0 1rem 2rem rgba(#8a0303, 1);
            }
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

  & section.inverter {
    padding-top: 10rem;
    padding-bottom: 10rem;
    background: linear-gradient(to right, rgba(#000, 0.3), rgba(#000, 0.3)),
      url("~@/assets/img/panel-2.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 992px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }

    .card {
      display: flex;
      flex-direction: row;
      border: none;
      background: linear-gradient(
        to right,
        rgba(#000, 0.8),
        rgba(#1b3003, 0.7),
        rgba(#326305, 0.6)
      );

      @media (max-width: 992px) {
        background: linear-gradient(
          to bottom,
          rgba(#000, 0.9),
          rgba(#326305, 0.7),
          rgba(#326305, 0.6)
        );
        flex-direction: column;
      }

      .card-title {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        padding: 10rem 5rem;
        white-space: pre-wrap;

        @media (max-width: 992px) {
          justify-content: center;
          padding: 5rem;
        }
      }

      .card-content {
        display: flex;
        align-items: center;
        padding: 10rem 5rem;
        padding-left: 12.5rem;
        background-color: rgba(#fff, 0.5);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 7.5rem 100%);

        @media (max-width: 992px) {
          padding: 5rem;
          clip-path: none;
        }

        .list {
          color: #333;
        }
      }
    }

    img {
      max-width: 100%;
      box-shadow: 0 1rem 2rem 5px rgba(#000, 0.9);
    }
  }
}
</style>