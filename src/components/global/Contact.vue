<template>
  <div class="contact">
    <section class="contact" id="contact">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-left">
						<div class="contact-top">
							<div class="portfolio-top-head">
								<h6 style="color:#848c97" class="webmaster2-heading1">// SAY HELLO</h6>
								<h3 class="webmaster2-heading1-h3"> <span style="color:#aef1ff;">Do you want </span> <span style="color:#f2f5ff;">to talk </span> <span style="color:#aef1ff;">about your </span> <span style="color:#ffd79c;">web project</span><span style="color:#e8a3ec;">?</span> <span style="color:#aef1ff;">Feel free </span> <span style="color:#e8a3ec;">&amp; </span> <span style="color:#aef1ff;">contact me</span><span style="color:#e8a3ec;">!</span></h3>							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 cover-contact">
						<div class="contact-form wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
              <form class="form-inline" id="contact-form">
                  <!-- IF MAIL SENT SUCCESSFULLY -->
                  <div class="success">
                      Your message has been sent successfully.
                  </div>
                  <!-- IF MAIL SENDING UNSUCCESSFULL -->
                  <div class="error">
                      E-mail must be valid and message must be longer than 1 character.
                  </div>
								<!-- Form Fields -->
								<div class="col-md-4">
									<div class="form-group">
										<label class="sr-only" for="first_name">First Name</label>
										<input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label class="sr-only" for="last_name">Last Name</label>
										<input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label class="sr-only" for="phone_number">Phone</label>
										<input type="text" class="form-control" id="phone_number" name="phone_number" placeholder="Phone">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label class="sr-only" for="email_address">Email</label>
										<input type="email" class="form-control" id="email_address" name="email_address" placeholder="Email Address">
                  </div>
								</div>
								<div class="col-md-8">
									<div class="form-group">
										<select id="contact_reason" name="contact_reason">
											<option value="Reason of Contact">Reason of Contact</option>
											<option value="Reason of Contact">Reason of Contact</option>
											<option value="Reason of Contact">Reason of Contact</option>
											<option value="Reason of Contact">Reason of Contact</option>
										</select>
										<i class="fa fa-angle-down" aria-hidden="true"></i>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group-textarea">
										<textarea class="form-control" id="message" name="message" rows="4" placeholder="Message"></textarea>
									</div>
								</div>
								<div class="col-md-12 text-center">
									<button type="submit" name="submit" id="submit">Contact Now</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<style lang="scss">
@import '@/scss/contact.scss';
@import '@/scss/global.scss';
</style>

<script>
export default {
  name: "contanct-home",
};
</script>
