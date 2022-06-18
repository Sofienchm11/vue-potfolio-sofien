<template>
  <div class="service-bottom" id="aboutme">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 left">
            <div class="service-bottom-content wow fadeInUp">
                <img src="../../assets/sofien-chm2.png" alt="">
            </div>
          </div>
        <div class="col-12 col-md-6 right">
          <div class="process-top-head">
							<h6 class="webmaster2-heading1">// About me</h6>
							<h3 class="webmaster2-heading1-h3"><span>I'm happy when I'm <span style="color:#f47aa0;"> creating, learning, exploring and thinking</span> about how to make things <span style="color:#423cc1;">better.</span></span> </h3>
          </div>
          <p>We specialise in WordPress development and custom WordPress Design. We have over ten years experience working with WordPress &amp; have watched it evolve over the years into a powerful CMS. </p>
          <br>
          <p>We create bespoke WordPress themes for your business website, which means they look great, run fast are designed for user experience and coded for search engine friendliness! Our sites are..</p>
          <div class="aboutme_section">
            <div><i class="fa fa-search" aria-hidden="true"></i>Lightning Fast Speed</div>
            <div><i class="fa fa-search" aria-hidden="true"></i>Easy To Navigate</div>
            <div><i class="fa fa-search" aria-hidden="true"></i>SEO Friendly</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/about-me.scss';
@import '@/scss/global.scss';
  
  
</style>

<script>
import axios from 'axios';

export default {
  name: "about-me",

  created(){
    this.getUserList();
  },
  methods : {


  getUserList(){
  axios.get('http://wp-admin.test/wp-json/wp/v2/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }




  }
};
</script>
