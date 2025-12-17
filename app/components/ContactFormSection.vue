<template>
  <section id="contact" class="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 order-2">
          <div class="contact-bg02">
            <div class="section-title center-align text-center">
              <h5>Contact Form</h5>
              <h2>Get A Quote</h2>
            </div>
            <form action="https://htmldemo.zcubethemes.com/designit/mail.php" method="post" class="contact-form mt-30">
              <div class="row">
                <div class="col-lg-6">
                  <div class="contact-field p-relative c-name mb-30">                                    
                    <input type="text" id="firstn" name="firstn" placeholder="First Name" required>
                  </div>                               
                </div>
                <div class="col-lg-6">                               
                  <div class="contact-field p-relative c-email mb-20">                                    
                    <input type="text" id="lastn" name="lastn" placeholder="Last Name" required>
                  </div>                                
                </div>
                <div class="col-lg-6">                               
                  <div class="contact-field p-relative c-subject mb-30">                                   
                    <input type="text" id="email" name="email" placeholder="Email" required>
                  </div>
                </div>		
                <div class="col-lg-6">                               
                  <div class="contact-field p-relative c-subject mb-30">                                   
                    <input type="text" id="phone" name="phone" placeholder="Phone No." required>
                  </div>
                </div>	
                <div class="col-lg-12">                               
                  <div class="contact-field p-relative c-subject mb-30">                                   
                    <input type="text" id="subject" name="subject" placeholder="Subject" required>
                  </div>
                </div>	
                <div class="col-lg-12">
                  <div class="contact-field p-relative c-message mb-30">                                  
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                  </div>
                  <div class="slider-btn  text-center">                                          
                    <button class="btn ss-btn active" data-animation="fadeInRight" data-delay=".8s">Submit Now</button>				
                  </div>                             
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
