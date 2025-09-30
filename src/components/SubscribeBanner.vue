<template>
    <section>
        <div style="background-color: #91278f ;" class="subscribe-banner py-md-5 py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12">
                        <div>
                            <div class="d-flex flex-md-row flex-column text-white gap-md-4 gap-2">
                                <div class="setIcon text-md-left text-center"><i class="bi bi-person-fill-gear text-white fs-1"></i></div>
                                <div><h5 class="mt-md-2 text-md-start text-center">Subscribe to the Guild Today</h5>
                                <p class="text-md-start text-center">Become a subscriber to the Guild of Residential Landlords and gain access to exclusive resources, expert advice, and specialist property management tools. Sign up now to enhance your property management skills and stay informed about the latest industry trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                            <PrimaryButton :dynamic-btn = "englandData" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from './PrimaryButton.vue';

const englandData = ref("England")

</script>

<style lang="scss" scoped>

</style>