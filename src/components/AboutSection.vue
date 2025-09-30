<template>
    <section class="pb-5">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-5 col-12 p-0">
                    <div class="d-flex justify-content-center align-item-start flex-column h-100">
                        <h2>About the Guild</h2>
                        <span class="hr-line"></span>
                        <p>The Guild of Residential Landlords is run by landlords for landlords and provides the tools you need to manage your residential rented property successfully. Available in England and Wales.</p>
                        <p>We only provide services to subscribers that we use on our property portfolio. We use the Tenancy Builder, online application form, buildings insurance and the other forms available for subscribers.</p>
                        <div class="d-flex gap-2 justify-content-start align-items-start">
                            <PrimaryButton :dynamic-btn = "englandData.england" />
                            <PrimaryButton :dynamic-btn = "englandData.wales" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 mt-md-0 mt-4 p-0">
                    <img class="w-100 rounded" src="/images/about-us-dummy.jpeg" alt="">
                </div>
            </div>
            <div class="row mt-5 d-flex flex-wrap justify-content-between flex-md-row flex-row-reverse">
                <div class="col-md-5 col-12 p-0">
                    <img class="w-100 rounded " src="/images/about-us-dummy.jpeg" alt="">
                </div>
                <div class="col-md-6 col-12 mt-md-0 mt-4 p-0">
                    <div class="d-flex justify-content-center align-item-start flex-column h-100">
                        <h2>Contact Us</h2>
                        <span class="hr-line"></span>
                        <p>The Guild of Residential Landlords is run by landlords for landlords and provides the tools you need to manage your residential rented property successfully. Available in England and Wales.</p>
                        <p>We only provide services to subscribers that we use on our property portfolio. We use the Tenancy Builder, online application form, buildings insurance and the other forms available for subscribers.</p>
                        <PrimaryButton :dynamic-btn = "englandData.residential" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from './PrimaryButton.vue';

const englandData = ref({
  england: "England",
  wales: "Wales",
  residential: "Contact the Guild of Residential Landlords"
});


</script>

<style lang="scss" scoped>

</style>