<template>
  <Layout class="contact">
    <section class="map">
      <iframe
        width="100%"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=senayan%20sentral%202&t=&z=14&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        zoom="2"
      ></iframe>
    </section>
    <section class="info">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" class="top__col">
            <div class="text">
              <b>Untuk informasi lebih lanjut hubungi kami.</b>
            </div>
            <div class="socials text"></div>
            <div class="text">
              PT. Lentera Adhya Investama
              <br />Sentral Senayan 2, 20th Floor
              <br />Jl. Asia Afrika No. 8 Jakarta 10270
              <br />+62 21 5795 4022 ext. 105
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
    title: "Contact"
  }
};
</script>

<style lang="scss" scoped>
.layout.contact {
  & section.info {
    margin-top: -7px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: var(--primary);
    color: #f7f7f7;

    .top__col {
      height: auto;
    }
  }
}
</style>
