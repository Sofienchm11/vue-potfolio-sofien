<template>
  <div class="Experience">
    <section class="experience" data-parallax="scroll" id="experience">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="experience-top-head">
							<h2 class="head-two">Experience</h2>
							<div class="top-head-before">
								<i class="fa fa-dot-circle-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="carousel slide" data-ride="carousel" id="quote">
							<!-- Bottom Carousel Indicators -->
							<ol class="carousel-indicators">
								<li data-target="#quote" data-slide-to="0" class="">
									<h4>2016</h4>
									<i class="fa fa-bullseye" aria-hidden="true"></i>
								</li>
								<li data-target="#quote" data-slide-to="1" class="active">
									<h4>2019</h4>
									<i class="fa fa-bullseye" aria-hidden="true"></i>
								</li>
								<li data-target="#quote" data-slide-to="2" class="">
									<h4>Freelancer</h4>
									<i class="fa fa-bullseye" aria-hidden="true"></i>
								</li>
							
							</ol>
							<!-- Carousel Slides / Quotes -->
							<div class="carousel-inner">
								<!-- Quote 1 -->
								<div class="item">
									<div class="experience-slide-one">
										<div class="col-md-5">
											<div class="experience-slide-img">
												<img src="images/carthage_solutions.png" alt="">
											</div>
										</div>
										<div class="col-md-7">
											<div class="experience-slide-text">
												<h3>December, 2016</h3>
												<p>Configuration and customization of themes, plugins and builders according to customer needs 
													(BeThemes, Divi, wooCommerce, Elementor, DiviBuilder, Visualcomposer…) Creation of Widgets for 
													plugins (elementor and VisualComposer).
                        </p>
												<p>Integrate the design proposed via interface software ( figma, invision, adobe xd)</p>
											</div>
										</div>
									</div>
								</div>
								<div class="item active">
									<div class="experience-slide-one">
										<div class="col-md-5">
											<div class="experience-slide-img">
												<img src="images/enanotech.png" alt="">
											</div>
										</div>
										<div class="col-md-7">
											<div class="experience-slide-text">
												<h3>August , 2019</h3>
												<p>Create cutom widget for plugin builder (elementor and VisualComposer), Creation of custom WordPress themes using JavaScript, Html and CSS respecting user experience, crossdevice compatibility and SEO search engine optimizati </p>
												<p>Creation of custom WordPress themes using JavaScript, Html and CSS respecting user experience, crossdevice compatibility and SEO search engine optimizati</p>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="experience-slide-one">
										<div class="col-md-5">
											<div class="experience-slide-img">
												<img src="images/freelancer.png" alt="">
											</div>
										</div>
										<div class="col-md-7">
											<div class="experience-slide-text">
												<h3>February, 2016</h3>
												<p>Collection and specifications of client's needs and estimate the duration of design and dev </p>
												<p>Create visual mockup to integrate it on wordpress, prestashop cms and Angular and React js frameworks</p>
											</div>
										</div>
									</div>
								</div>
							
							</div>
							<!-- Carousel Buttons Next/Prev -->
							<a data-slide="prev" href="#quote" class="left carousel-control"><i class="fa fa-angle-left"></i></a>
							<a data-slide="next" href="#quote" class="right carousel-control"><i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>


<style lang="scss">
@import '@/scss/experience.scss';
@import '@/scss/global.scss';
</style>

<script>
export default {
  name: "Experience-home",
};
</script>
