<template>
    <section class="py-5">
        <div class="container">
            <p class="text-center fs-2 m-0">OUR SERVICES</p>
            <span class="hr-line mx-auto d-block mt-3 mb-4"></span>
            <h3 class="text-center">Comprehensive Support for Landlords</h3>
            <div class="row mt-5 p-0 gy-4">
                <div v-for="value in servicesData" :key="value.id" class="col-md-4 col-12">
                    <div class="w-full h-full">
                        <div class="card text-center p-4">
                            <div class="icon">
                                <i :class="value.icon"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{{ value.title }}</h5>
                                <p class="service-description card__body card-text">{{ value.description }}</p>
                            </div>
                            <span><a :href="value.link" class="btn bg-white rounded-pill">Read More</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const servicesData = inject('servicesData');

</script>

<style scoped>
.card {
    --bg: #f7f7f8;
    --hover-bg: #f1b4ddb0;
    --hover-text: #e50087;
    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1),
        transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: black;
}

.card__body {
    color: #bb9db1;
    line-height: 1.5em;
    font-size: 1em;
}

.card> :not(span) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card>strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
}

.card span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hover-text);
    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card:hover span {
    top: 0;
    font-size: 1.2em;
}

.card:hover {
    background: var(--hover-bg);
}

.card:hover>div,
.card:hover>strong {
    opacity: 0;
}
</style>