<template>
    <section class="whatido" id="whatido">
        <div class="process-bottom" >
			<div class="container">
                <h6 class="webmaster2-heading1">// WHAT I DO?</h6>
                <h3 class="webmaster2-heading1-h3"><span style="color:#f47aa0;">Websites</span> just from scratch. We can make your online shop or just <span style="color:#423cc1;">business card webpage.</span></h3>
                <div class="row">
                    <div class="col-md-6" v-for="item in list" :key="item.id">
                        <div class="process-bottom-content wow zoomIn ">
                            <div class="wrap mcb-wrap mcb-wrap-zr0i5hehk one-second  valign-top clearfix " style="">
                                <div class="mcb-wrap-inner">
                                    <div class="column mcb-column mcb-item-uriefrd5j one column_divider">
                                        <hr class="no_line" style="margin: 0 auto 70px auto ;     height: 0;">
                                    </div>
                                        <div class="column mcb-column mcb-item-0qfc3fve2 four-fifth column_image service-1">
                                            <div class="image_frame image_item no_link scale-with-grid no_border">
                                                <div class="image_wrapper">
                                                    <img class="scale-with-grid" :src="item.acf.icon.url" alt="webmaster2-works-icon1" title="" width="109" height="109">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column mcb-column mcb-item-oznlxr4j7 four-fifth column_column"><div class="column_attr clearfix" style="">
                                            <h4>{{item.title.rendered}}</h4>
                                            <hr class="no_line" style="margin: 0 auto 10px auto;     height: 0;">
                                            {{item.content.rendered}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    </section>
</template>

<style lang="scss">
@import '@/scss/whatido.scss';
@import '@/scss/global.scss';
</style>

<script>
import axios from 'axios';


export default {
  name: "what-ido",

  data(){
    return {list:undefined};
    
  },
  created(){
    axios.get('http://wp-admin.test/wp-json/wp/v2/what_i_do').then(resp=>{
      console.log(resp);

      this.list=resp.data;
    })
  }

};

</script>