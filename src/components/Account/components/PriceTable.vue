<template>
    <div class="row gy-4">
        <h2 class="text-center m-0">Tenancy Builder Plans for Landlords & Agents</h2>
        <p class="text-center m-0 w-md-75 mt-md-0 mt-3 mx-auto">Choose from three subscription options—Quarterly,
            Annual, or Agent Annual—designed for landlords and letting agents. All plans include tools to create legally
            compliant tenancy agreements.</p>
        <div class="col-md-4 col-12" v-for="priceValue in priceData" :key="priceValue.id">
            <div class="price-box text-left w-full h-full" :class="priceValue.title === 'Annual' ? 'annual' : ''">
                <div class="price-box-card p-4">
                    <h3>{{ priceValue.title }}</h3>
                    <p class="fs-2 fw-bold">{{ priceValue.price }}</p>
                    <p class="p-0 m-0">{{ priceValue.priceDes }}</p>
                    <p class="p-0 m-0">{{ priceValue.indvidual }}</p>
                    <RouterLink to="/signup"><button class="px-2 py-2 w-100 mt-3 text-uppercase"
                            :class="priceValue.title === 'Annual' ? 'bg-custom-secondary text-white' : ''">View Plan Details</button></RouterLink>
                    <ul style="list-style: none;" class="featureList p-0 mt-4">
                        <li v-for="feature in priceValue.feature" :key="feature"><i
                                class="bi bi-check2-square fs-5"></i> {{ feature.feature }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5 align-items-center justify-content-center">
        <div class="col-12">
            <h5>Join now for £39 per quarter or save 24% when you sign up for a year</h5>
            <h6 class="mt-3">* Credits Information:</h6>
            <ul class="list-unstyled">
                <li class="mb-2">Digital signing requires 100 credits.</li>
                <li class="mb-2">AI Inventory uses 12 credits per photo.</li>
                <li class="mb-2">Referencing requires 900 credits.</li>
                <li class="mb-2">Quarterly plans include 300 free credits at signup and each renewal.</li>
                <li class="mb-2">Annual plans include 1,200 free credits at signup and each renewal.</li>
                <li class="mb-2">Agent plans include 1,500 free credits at signup and each renewal.</li>
            </ul>
            <p class="w-md-75 mx-auto">Additional credits can be purchased for <strong>£1 + VAT per 100
                    credits</strong>, with discounts available. <br> The number of credits required, provided free, and the
                cost for purchase may change without notice.</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const priceData = ref([
    {
        id: 1, title: 'Quarterly', price: '£13.00 /mo', priceDes: 'when paying £39 quarterly', indvidual: 'Company or individual landlord',
        feature: [
            { id: 1, feature: 'Tenancy Builder: Automatically create legally binding tenancies with up-to-date forms.' },
            { id: 2, feature: 'Unlimited downloads of tenancy agreements, forms, and templates' },
            { id: 3, feature: 'AI Inventory: Auto-generate descriptions from your uploaded photos.*' },
            { id: 4, feature: 'Integrated digital signing for tenancies and inventories.*' },
            { id: 5, feature: 'Financial Reporting: Generate reports to track income and expenses.' },
            { id: 6, feature: 'Referencing with AI summaries.*' },
            { id: 7, feature: 'Full access to the Landlord Handbook.' },
            { id: 8, feature: 'Dedicated advice phone line.' },
            { id: 9, feature: 'Access to helpful wizards.' },
            { id: 10, feature: 'Exclusive discounts for members.' },
            { id: 11, feature: 'Suitable for companies or individual landlords.' },
            { id: 12, feature: 'No advertisements.' },
        ]
    },
    {
        id: 2, title: 'Annual', price: '£9.92 /mo', priceDes: 'when paying £119 annually', indvidual: 'Company or individual landlord',
        feature: [
            { id: 1, feature: 'Tenancy Builder: Automatically create legally binding tenancies with up-to-date forms.' },
            { id: 2, feature: 'Unlimited downloads of tenancy agreements, forms, and templates.' },
            { id: 3, feature: 'AI Inventory: Auto-generate descriptions from your uploaded photos.*' },
            { id: 4, feature: 'Integrated digital signing for tenancies and inventories.*' },
            { id: 5, feature: 'Referencing with AI summaries.*' },
            { id: 6, feature: 'Full access to the Landlord Handbook.' },
            { id: 7, feature: 'Dedicated advice phone line.' },
            { id: 8, feature: 'Access to helpful wizards.' },
            { id: 9, feature: 'Exclusive discounts for members.' },
            { id: 10, feature: 'Suitable for companies or individual landlords.' },
            { id: 11, feature: 'Discounts for accredited landlords.' },
            { id: 12, feature: 'One extra sub-user account for staff or family.' },
            { id: 13, feature: 'No advertisements.' },

        ]
    },
    {
        id: 3, title: 'Agent Annual', price: '£15.75 /mo', priceDes: 'when paying £189 annually', indvidual: 'Three or more staff',
        feature: [
            { id: 1, feature: 'Tenancy Builder: Automatically create legally binding tenancies with up-to-date forms.' },
            { id: 2, feature: 'Unlimited downloads of tenancy agreements, forms, and templates.' },
            { id: 3, feature: 'AI Inventory: Auto-generate descriptions from your uploaded photos.*' },
            { id: 4, feature: 'Integrated digital signing for tenancies and inventories.*' },
            { id: 5, feature: 'Referencing with AI summaries.*.' },
            { id: 6, feature: 'Full access to the Landlord Handbook.' },
            { id: 7, feature: 'Dedicated advice phone line' },
            { id: 8, feature: 'Access to helpful wizards.' },
            { id: 9, feature: 'Exclusive discounts for members.' },
            { id: 10, feature: 'Suitable for companies or individual landlords.' },
            { id: 11, feature: 'Discounts for accredited landlord' },
            { id: 12, feature: 'Three extra sub-user accounts for staff or family.' },
            { id: 13, feature: 'No advertisements.' },
        ]
    },
]);

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.pricetable {
    width: 500px;
    margin-left: auto;
}

.price-box {
    border-radius: 20px;
    transition: all ease .5s;
    scale: 0.98;
}

.price-box-card {
    border-radius: 20px;
    background-color:rgb(218, 205, 213)2;
    transition: all ease 0.5s;
    border: 1px solid #000;

}

.price-box span {
    background-color: #f0f4f5;
    padding: 10px 24px;
    border-radius: 100px;
}

.annual-box {
    background-color: var(--primary-color);
}

.annual {
    background-color: var(--primary-color) !important;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
        rgba(240, 46, 170, 0.2) 15px 15px;
}

.price-box ul li {
    margin: 12px 0;
    list-style: none;
    font-size: 16px;
}

.credit-info {
    background-color: #f5f5f5;
    margin: 20px 0;
}

.price-box:hover {
    scale: 1;
}
</style>