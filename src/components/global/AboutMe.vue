<template>
  <div class="service-bottom" id="aboutme">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 left">
            <div class="service-bottom-content wow fadeInUp">
                <img src="../../assets/sofien-chm2.png" alt="">
            </div>
          </div>
        <div class="col-12 col-md-6 right" >
          <div class="process-top-head" >
							<h6 class="webmaster2-heading1">{{list.title.rendered}}</h6>
							<h3 class="webmaster2-heading1-h3"><span>{{list.acf.title}}</span></h3>
          </div>
          <p> {{list.acf.description}}</p>
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

  data(){
    return {list:undefined};
  },
  created(){
    axios.get('http://wp-admin.test/wp-json/wp/v2/pages/35').then(resp=>{
      this.list=resp.data;
      console.log(this.list)
    })
  }
};
</script>
