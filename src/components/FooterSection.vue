<template>
  <footer class="text-md-center text-lg-start text-white">
    <div class="container p-4 pb-md-0">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img src="/images/logo.png" alt="footer logo" width="200">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio obcaecati aliquid eos incidunt officia unde delectus, veniam atque quod asperiores.
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#" class="text-white">Products1</a>
            </p>
            <p>
              <a href="#" class="text-white">Products2</a>
            </p>
            <p>
              <a href="#" class="text-white">Products3</a>
            </p>
            <p>
              <a href="#" class="text-white">Products4</a>
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="#" class="text-white">Privacy Policy</a>
            </p>
            <p>
              <a href="#" class="text-white">Subscription Terms</a>
            </p>
            <p>
              <a href="#" class="text-white">Website Terms</a>
            </p>
            <p>
              <a href="#" class="text-white">Unsubscribe from receiveing these emails.</a>
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto d-flex flex-column mt-3 text-md-end">
            <h6 class="text-uppercase mb-4 font-weight-bold   ">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> Address Details</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>
      <hr class="my-3">
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-md-3">
              © 2025 Copyright:
              <a class="text-white" href="https://landlordsguild  .com/"
                 >landlordsguild.com</a
                >
            </div>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center mt-md-0 mt-3 text-md-end">
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="bi bi-facebook"></i></a>
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="bi bi-twitter-x"></i
              ></a>
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="bi bi-google"></i></a>
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
defineOptions({ name: 'FooterSection' });

</script>

<style scoped>
p
{
    font-size: 14px;
}

</style>