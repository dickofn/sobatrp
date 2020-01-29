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
            <b-table fixed :items="items" :fields="fields"></b-table>
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
    return {
      fields: [
        {
          key: "row_1",
          label: "P type monocrystalline Silicon Photovoltaics Solar Panel"
        },
        {
          key: "row_2",
          label: "Power Conversion System (PCS)"
        }
      ],
      items: [
        { row_1: "Lithium Ion Battery", row_2: "LED Lighting System" },
        { row_1: "", row_2: "Smart Application" }
      ]
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
    .table thead th {
      vertical-align: middle;
    }
  }
}
</style>
