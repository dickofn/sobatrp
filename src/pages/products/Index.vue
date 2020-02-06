<template>
  <Layout class="products">
    <section class="battery">
      <b-container>
        <b-row align-v="center" class="mb-5 pb-5 flex-lg-row-reverse">
          <b-col sm="12" lg="7" class="mb-5 mb-lg-0">
            <g-image src="~/assets/img/battery-system-1.png" alt="Battery System"></g-image>
          </b-col>
          <b-col sm="12" lg="5">
            <div class="title text-title">
              BATTERY
              SYSTEM ≥ 1MWH
            </div>
            <div class="list">
              <div class="list-item">&#9635; 1 to 4MWh LiFePO4 battery system</div>
              <div class="list-item">&#9635; HVAC(Heating, Ventilation and Air Conditioning)</div>
              <div class="list-item">&#9635; Fire Fighting, Lighting System, Thunder-proof</div>
              <div class="list-item">&#9635; AC &amp; DC distributor</div>
              <div class="list-item">&#9635; Optional parts</div>
              <div
                class="list-item"
              >&#9635;&nbsp;SCADA (Supervisory Control And Data Acquisition) system</div>
            </div>
          </b-col>
        </b-row>
        <b-row align-v="center" class="mb-5 pb-5">
          <b-col sm="12" lg="7" class="mb-5 mb-lg-0">
            <g-image src="~/assets/img/battery-system-2.png" alt="Battery System"></g-image>
          </b-col>
          <b-col sm="12" lg="5">
            <div class="title text-title">BATTERY SYSTEM</div>
            <div class="list">
              <div class="list-item">
                &#9635;
                1MWh(691.2V1440Ah) LFP battery system contains 6 Battery Clusters
              </div>
              <div class="list-item">
                &#9635;
                Each 165KWh(691.2V240Ah) Cluster is composed of 18pcs battery modules, 1pcs control modules
              </div>
              <div class="list-item">
                &#9635;
                Long lifetime (>4000cycles), high efficient (reach 98%), high safety LFP cells
              </div>
              <div class="list-item">
                &#9635;
                Complete fault and operation log recording function system
              </div>
              <div class="list-item">
                &#9635;
                Info storage time last one month
              </div>
              <div class="list-item">
                &#9635;
                Support RS485, Ethernet Communication
              </div>
              <div class="list-item">
                &#9635;
                Battery satisfied UL1973 certification
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
    padding-top: 5rem;
    padding-bottom: 5rem;

    img {
      width: 100%;
      max-height: 100%;
    }

    .title {
      margin-bottom: 3rem;
    }
  }
}
</style>