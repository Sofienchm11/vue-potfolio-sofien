<template>
  <section class="portfolio" id="portfolio">
			<div class="container">
				<div class="protfolio__upper">
          <div class="section-title">
              <h2>About Me</h2>
          </div>
        </div>
        <div class="portfolio__bottom">
          <div class="portfolio__bottom__filter">
            <div class="filter__heading">
              <ul>
                <li><a href="#" class="btn btn1" data-filter="Wordpress, Front, Design">All</a></li>
                <li><a href="#" class="btn btn1" data-filter="Wordpress">Wordpress</a></li>
                <li><a href="#" class="btn btn1" data-filter="Front">Front end</a></li>
                <li><a href="#" class="btn btn1" data-filter="Design">Design</a></li>
              </ul>
            </div>
          </div>
          <div class="portfolio__bottom__content">
            <ul class="content__items row">
              <li class="content__items__list col-4">
                <div class="list__img"><img src="../../assets/capi.jpg" alt=""></div>
                <div class="list__overlay">
                  <div class="overlay__content">
                    <h1>title</h1>
                    <p>description</p>
                  </div>
                </div>
              </li>
              <li class="content__items__list col-4">
                <div class="list__img"><img src="../../assets/capi.jpg" alt=""></div>
                <div class="list__overlay">
                  <div class="overlay__content">
                    <h1>title</h1>
                    <p>description</p>
                  </div>
                </div>
              </li>
              <li class="content__items__list col-4">
                <div class="list__img"><img src="../../assets/capi.jpg" alt=""></div>
                <div class="list__links"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
		</section>
</template>

<style lang="scss">
@import '@/scss/portfolio.scss';
@import '@/scss/global.scss';
</style>

<script>
import axios from 'axios';


export default {
  name: "portfolio-home",

  data(){
    return {list:[]};
    
  },
  created(){
    axios.get('http://wp-admin.test/wp-json/wp/v2/portfolio').then(resp=>{
      console.log(resp);

      this.list=resp.data;
      console.log(this.list)
    })
  }

};

</script>
