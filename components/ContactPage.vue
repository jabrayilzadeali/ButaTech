<template>
  <section class="contact-section">
    <div class="auto-container">
      <div class="form-box">
        <div class="sec-title">
          <h2>Bizə mesaj yazın<span class="dot">.</span></h2>
        </div>
        <div class="default-form">
          <form method="post" action="https://formsubmit.co/jabrayilzadeali@protonmail.com" id="contact-form">
            <div class="row clearfix">
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" name="username" value="" placeholder="Ad" required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="email" name="email" value="" placeholder="Email "
                         required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" name="phone" value="" placeholder="Telefon nömrəsi" required="">
                </div>
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <div class="field-inner">
                  <input type="text" name="subject" value="" placeholder="Mövzu" required="">
                </div>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="field-inner">
                  <textarea name="message" placeholder="Mesajınızı yazın" required=""></textarea>
                </div>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <button class="theme-btn btn-style-one">
                  <i class="btn-curve"></i>
                  <span class="btn-title">Mesajı göndər</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "ContactPage"
    }
</script>

<style scoped>

</style>
