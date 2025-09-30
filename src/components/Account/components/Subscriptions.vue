<template>
    <div>
        <div class="row gy-4 mt-4">
            <div class="col-12">
                <div>
                    <div class="row align-items-start justify-content-between">
                        <div class="col-md-6">
                                <div class="border p-3 rounded-4">
                                    <h3 class="fs-5">Subscription</h3>
                                    <label for="email" class="bg-light-grey px-3 py-2 rounded-4 mb-3">
                                        <input type="radio" id="quarter" value="quarter" v-model="contactMethod">
                                        <strong class="fs-5 ms-2">Quarterly subscription</strong>
                                        <p>£39.00 Auto-renew quarterly subscription, cancel anytime before next
                                            auto-renew. <i>Company or individual.</i></p>

                                    </label>
                                    <label for="email" class="bg-light-grey px-3 py-2 rounded-4 mb-3">
                                        <input type="radio" id="annual" value="annual" v-model="contactMethod">
                                        <strong class="fs-5 ms-2">Annual Subscription</strong>
                                        <p>£119.00 Auto-renewing annual subscription, cancel anytime before next
                                            auto-renew. <i>Company or individual. Includes one staff or family sub-user
                                                account.</i></p>
                                    </label>
                                    <label for="email" class="bg-light-grey px-3 py-2 rounded-4">
                                        <input type="radio" id="annualSubscription" value="annualSubscription"
                                            v-model="contactMethod">
                                        <strong class="fs-5 ms-2">Annual Subscription (3 or more staff)</strong>
                                        <p>£189.00 Auto-renew annual subscription. Cancel anytime before next
                                            auto-renew. <i>Company or individual. Includes three staff or family
                                                sub-user accounts.</i></p>
                                    </label>
                                </div>
                        </div>
                        <div class="col-md-6">
                            <transition name="fade">
                                <div class="bg-light-grey overflow-hidden border rounded-4 p-4" v-if="contactMethod === 'annual'">
                                    <div class="pricetable w-100 ms-auto">
                                        <div class="subs-cription-title text-end">
                                            <h3 class="fs-5 mb-3">1. Annual Subscription</h3>
                                            <p class="amount-box px-2 py-1 border rounded-4 d-inline">£99.17</p>
                                        </div>
                                        <table class="table text-end mt-3 bg-white">
                                            <tbody class="fs-5">
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>£99.17</td>
                                                </tr>
                                                <tr>
                                                    <td>Tax Amount (20)</td>
                                                    <td>£19.83</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-bold">Total</td>
                                                    <td class="fw-bold">£119.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div class="bg-light-grey overflow-hidden border rounded-4 p-4" v-if="contactMethod === 'quarter'">
                                    <div class="pricetable w-100 ms-auto">
                                        <div class="subs-cription-title text-end">
                                            <h3 class="fs-5 mb-3">1. Quarterly subscription </h3>
                                            <p class="amount-box px-2 py-1 border rounded-4 d-inline">£32.50</p>
                                        </div>
                                        <table class="table text-end mt-3">
                                            <tbody class="fs-5">
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>£99.17</td>
                                                </tr>
                                                <tr>
                                                    <td>Tax Amount (20)</td>
                                                    <td>£19.83</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-bold">Total</td>
                                                    <td class="fw-bold">£119.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div class="bg-light-grey overflow-hidden border rounded-4 p-4" v-if="contactMethod === 'annualSubscription'">
                                    <div class="pricetable w-100 ms-auto">
                                        <div class="subs-cription-title text-end">
                                            <h3 class="fs-5 mb-3">1. Annual Subscription (3 or more staff) </h3>
                                            <p class="amount-box px-2 py-1 border rounded-4 d-inline">£157.50</p>
                                        </div>
                                        <table class="table text-end mt-3">
                                            <tbody class="fs-5">
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>£99.17</td>
                                                </tr>
                                                <tr>
                                                    <td>Tax Amount (20)</td>
                                                    <td>£19.83</td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-bold">Total</td>
                                                    <td class="fw-bold">£119.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({ name: "SubscriptionComp" })

const contactMethod = ref('annual')

</script>

<style scoped>
.amount-box {
    font-size: 16px;
    font-weight: 500;
}

label p {
    font-size: 16px;
}
tr{
    border: 0px transparent;
}

</style>