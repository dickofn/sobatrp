<template>
  <Layout class="products">
    <section class="battery">
      <b-container>
        <b-row class="bat-1 mb-5 pb-5 flex-lg-row-reverse">
          <b-col sm="12" lg="7" class="align-self-center mb-5 mb-lg-0">
            <g-image src="~/assets/img/battery-system-1.png" alt="Battery System"></g-image>
          </b-col>
          <b-col
            class="content py-5 d-flex align-items-center flex-column justify-content-center"
            sm="12"
            lg="5"
          >
            <div class="title text-title">BATTERY SYSTEM ≥ 1MWH</div>
            <div class="list">
              <div class="list-item">
                <div class="mr-3">&#9635;</div>1 to 4MWh LiFePO4 battery system
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>HVAC(Heating, Ventilation and Air Conditioning)
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Fire Fighting, Lighting System, Thunder-proof
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>AC &amp; DC distributor
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Optional parts
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>SCADA (Supervisory Control And Data Acquisition) system
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="bat-2 mb-5 pb-5">
          <b-col sm="12" lg="7" class="align-self-center mb-5 mb-lg-0">
            <g-image src="~/assets/img/battery-system-2.png" alt="Battery System"></g-image>
          </b-col>
          <b-col
            class="content py-5 d-flex align-items-center flex-column justify-content-center"
            sm="12"
            lg="5"
          >
            <div class="title text-title">BATTERY SYSTEM</div>
            <div class="list">
              <div class="list-item">
                <div class="mr-3">&#9635;</div>1MWh(691.2V1440Ah) LFP battery system contains 6 Battery Clusters
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Each 165KWh(691.2V240Ah) Cluster is composed of 18pcs battery modules, 1pcs control modules
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Long lifetime (>4000cycles), high efficient (reach 98%), high safety LFP cells
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Complete fault and operation log recording function system
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Info storage time last one month
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Support RS485, Ethernet Communication
              </div>
              <div class="list-item">
                <div class="mr-3">&#9635;</div>Battery satisfied UL1973 certification
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="bat-3 mb-5 pb-5 flex-lg-row-reverse">
          <b-col sm="12" lg="7" class="align-self-center mb-5 mb-lg-0">
            <g-image src="~/assets/img/container.png" alt="Battery System"></g-image>
          </b-col>
          <b-col
            class="content py-5 d-flex align-items-center flex-column justify-content-center"
            sm="12"
            lg="5"
          >
            <div class="title text-title">40 FT CONTAINER</div>
            <div class="list">
              <div class="list-item">
                <div class="mr-3">01</div>Air Conditioning Outdoor Unit
              </div>
              <div class="list-item">
                <div class="mr-3">02</div>Air Conditioning Indoor Unit
              </div>
              <div class="list-item">
                <div class="mr-3">03</div>Monitoring System Cabinet
              </div>
              <div class="list-item">
                <div class="mr-3">04</div>Stepped Air Duct
              </div>
              <div class="list-item">
                <div class="mr-3">05</div>Fire Protection System
              </div>
              <div class="list-item">
                <div class="mr-3">06</div>Bidirectional Converter
              </div>
              <div class="list-item">
                <div class="mr-3">07</div>Sub-Mother Door
              </div>
              <div class="list-item">
                <div class="mr-3">08</div>Battery Rack
              </div>
              <div class="list-item">
                <div class="mr-3">09</div>Main Control Frame
              </div>
              <div class="list-item">
                <div class="mr-3">10</div>Power Distribution Cabinet
              </div>
              <div class="list-item">
                <div class="mr-3">11</div>Battery Rack Air Duct
              </div>
              <div class="list-item">
                <div class="mr-3">12</div>Double Door
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
    title: "Products"
  }
};
</script>

<style lang="scss" scoped>
.layout.products {
  & section.battery {
    overflow: hidden;
    padding-top: 5rem;
    padding-bottom: 5rem;

    img {
      width: 100%;
      max-height: 100%;
    }

    .title {
      margin-bottom: 3rem;
    }

    .content {
      color: #eee;
    }

    .bat {
      &-1 {
        .content {
          position: relative;

          &::before {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            top: 0;
            left: -50vw;
            background: linear-gradient(
                to right,
                rgba(#000, 0.8),
                rgba(#1b3003, 0.7),
                rgba(#326305, 0.6)
              ),
              url("~@/assets/img/panel-3.jpg");
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;

            @media (max-width: 768px) {
              right: -50vw;
            }
          }
        }
      }
      &-2 {
        .content {
          position: relative;

          &::before {
            position: absolute;
            overflow: hidden;
            content: "";
            right: -50vw;
            bottom: 0;
            top: 0;
            left: 0;
            background: linear-gradient(
                to left,
                rgba(#000, 0.8),
                rgba(#1b3003, 0.7),
                rgba(#326305, 0.6)
              ),
              url("~@/assets/img/battery-room.jpg");
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;

            @media (max-width: 768px) {
              left: -50vw;
            }
          }
        }
      }
      &-3 {
        .content {
          position: relative;

          &::before {
            position: absolute;
            overflow: hidden;
            content: "";
            right: 0;
            bottom: 0;
            top: 0;
            left: -50vw;
            background: linear-gradient(
                to right,
                rgba(#000, 0.8),
                rgba(#1b3003, 0.7),
                rgba(#326305, 0.6)
              ),
              url("~@/assets/img/container-2.jpg");
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;

            @media (max-width: 768px) {
              right: -50vw;
            }
          }
        }
      }
    }
  }
}
</style>