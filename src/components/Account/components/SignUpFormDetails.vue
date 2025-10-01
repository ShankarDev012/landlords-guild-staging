<template>
    <div>
        <div class="row justify-content-center mt-5">
            <div class="col-md-12">
                <Form @submit="onSubmit" :validation-schema="schema">
                    <div class="row gy-4">
                        <div class="col-12">
                            <!-- Subscription components -->
                            <div class="subscription-compo mb-5">
                                <div class="row align-items-start justify-content-between">
                                    <div class="col-md-6">
                                        <div class="border p-3 rounded-4">
                                            <h3 class="fs-5">Subscription</h3>
                                            <div v-for="subscriptionItem in subscriptionOption"
                                                class="bg-light-grey my-4 rounded-2 p-3 " :key="subscriptionItem.value">
                                                <Field :name="subscriptionSelect" type="radio"
                                                    :value="subscriptionItem.value" v-slot="{ field }">
                                                    <div class="d-flex align-items-center">
                                                        <input type="radio" v-bind="field" :id="subscriptionItem.value"
                                                            :value="subscriptionItem.value" class="me-3"
                                                            v-model="selectedSubscription" />
                                                        <h6 style="margin-top: 5px;" class="fs-5">{{
                                                            subscriptionItem.title }}</h6>
                                                    </div>
                                                    <label :for="subscriptionItem.value">{{ subscriptionItem.label
                                                    }}</label>
                                                </Field>
                                            </div>
                                            <ErrorMessage :name="subscriptionSelect"
                                                class="error-message text-danger" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <transition name="fade">
                                            <div class="bg-light-grey overflow-hidden border rounded-4 p-4"
                                                v-if="selectedSubscription === 'annual'">
                                                <div class="pricetable w-100 ms-auto">
                                                    <div class="subs-cription-title text-end">
                                                        <h3 class="fs-5 mb-3">1. Annual Subscription</h3>
                                                        <p class="amount-box px-2 py-1 border rounded-4 d-inline">£99.17
                                                        </p>
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
                                            <div class="bg-light-grey overflow-hidden border rounded-4 p-4"
                                                v-if="selectedSubscription === 'quarter'">
                                                <div class="pricetable w-100 ms-auto">
                                                    <div class="subs-cription-title text-end">
                                                        <h3 class="fs-5 mb-3">1. Quarterly subscription</h3>
                                                        <p class="amount-box px-2 py-1 border rounded-4 d-inline">£32.50
                                                        </p>
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
                                            <div class="bg-light-grey overflow-hidden border rounded-4 p-4"
                                                v-if="selectedSubscription === 'annualSubscription'">
                                                <div class="pricetable w-100 ms-auto">
                                                    <div class="subs-cription-title text-end">
                                                        <h3 class="fs-5 mb-3">1. Annual Subscription (3 or more staff)
                                                        </h3>
                                                        <p class="amount-box px-2 py-1 border rounded-4 d-inline">
                                                            £157.50</p>
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
                            <div class="d-flex align-items-start justify-content-between">
                                <div class="input-title-col">
                                    <h4>* Choose a Username</h4>
                                    <p>it must be 4 or more characters in length may only contain letters, numbers, and
                                        underscores</p>
                                </div>
                                <div class="input-col">
                                    <Field name="name" type="text" class="form-control py-2" :rules="['required']"
                                        placeholder="Choose your name" />
                                    <ErrorMessage name="name" class="error-message text-danger" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="input-title-col">
                                        <h4>* Choose a Password</h4>
                                        <p>must be 6 or more characters</p>
                                    </div>
                                    <div class="input-col">
                                        <Field name="password" type="password" class="form-control py-2"
                                            :rules="['required', 'min:6']" placeholder="Enter your password" />
                                        <ErrorMessage name="password" class="error-message text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="input-title-col">
                                        <h4>* Confirm Your Password</h4>
                                    </div>
                                    <div class="input-col">
                                        <Field name="confirmPassword" type="password" class="form-control py-2"
                                            :rules="['required', 'min:6']" placeholder="Confirm your password" />
                                        <ErrorMessage name="confirmPassword" class="error-message text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 my-4">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="input-title-col">
                                        <h4>* First & Last Name</h4>
                                    </div>
                                    <div class="input-col">
                                        <div class="row">
                                            <div class="col">
                                                <Field name="firstName" type="text" class="form-control py-2"
                                                    :rules="['required', 'min:6']" placeholder="First name" />
                                                <ErrorMessage name="firstName" class="error-message text-danger" />
                                            </div>
                                            <div class="col">
                                                <Field name="lastName" type="text" class="form-control py-2"
                                                    :rules="['required', 'min:6']" placeholder="Last name" />
                                                <ErrorMessage name="lastName" class="error-message text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="input-title-col">
                                        <h4>Display name (optional)</h4>
                                        <p>
                                            Optional: enter a name for Guild certificate e.g. company name or Mr & Mrs
                                            Smith. Not applicable to
                                            accreditation certificate
                                        </p>
                                    </div>
                                    <div class="input-col">
                                        <Field name="displayName" type="text" class="form-control py-2"
                                            placeholder="Display name optional" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="input-title-col">
                                        <h4>* Your E-Mail Address</h4>
                                        <p>a confirmation email will be sent to you at this address</p>
                                    </div>
                                    <div class="input-col">
                                        <Field name="email" type="email" class="form-control py-2"
                                            placeholder="Your email address" :rules="['required', 'email']" />
                                        <ErrorMessage name="email" class="error-message text-danger" />
                                    </div>
                                </div>
                            </div>
                            <!-- newsletters components -->
                            <div class="d-flex align-items-start justify-content-between">
                                <div class="input-title-col">
                                    <h4>* Subscribe to our newsletters</h4>
                                </div>
                                <div class="input-col">
                                    <div v-for="option in checkboxOptions" :key="option.value">
                                        <Field :name="checkboxName" type="checkbox" :value="option.value"
                                            v-slot="{ field }">
                                            <input type="checkbox" v-bind="field" :id="option.value"
                                                :value="option.value" class="me-3" />
                                            <label :for="option.value">{{ option.label }}</label>
                                        </Field>
                                    </div>
                                    <ErrorMessage :name="checkboxName" class="error-message text-danger" />
                                    <!-- <input class="form-check-input" type="checkbox"
                                    value="All updates ENGLAND (approx. daily)" id="checkDefault"
                                    v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Weekly Digest of Guild
                                    Articles </label> <br />
                                <input class="form-check-input" type="checkbox"
                                    value="All updates ENGLAND (approx. daily)" id="checkDefault"
                                    v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> All updates ENGLAND
                                    (approx. daily) </label> <br />
                                <input class="form-check-input" type="checkbox"
                                    value="Main updates ENGLAND (approx weekly)" id="checkDefault"
                                    v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Main updates ENGLAND
                                    (approx weekly) </label> <br />
                                <input class="form-check-input" type="checkbox" value="Forms and Templates ENGLAND"
                                    id="checkDefault" v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Forms and Templates ENGLAND
                                </label> <br />
                                <input class="form-check-input" type="checkbox" value="All updates WALES (approx daily)"
                                    id="checkDefault" v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> All updates WALES (approx
                                    daily) </label> <br />
                                <input class="form-check-input" type="checkbox"
                                    value="Main updates WALES (approx weekly)" id="checkDefault"
                                    v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Main updates WALES (approx
                                    weekly) </label> <br />
                                <input class="form-check-input" type="checkbox" value="Forms and Templates WALES"
                                    id="checkDefault" v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Forms and Templates WALES
                                </label> <br />
                                <input class="form-check-input" type="checkbox" value="Sales Emails (Your details 
                                        never passed on)" id="checkDefault" v-model="newsletters" />
                                <label class="form-check-label ms-2" for="checkDefault"> Sales Emails (Your details
                                    never passed on) </label>
                                <br /> -->
                                </div>
                            </div>
                            <!-- Payment components -->
                            <div class="payment-compo w-100 mt-4">
                                <h5>Payment Mode:</h5>
                                <div class="d-md-flex w-50 my-3 gap-3">
                                    <div class="col-md-6 p-0 text-center" v-for="paymentOption in paymentMethod"
                                        :key="paymentOption.value">
                                        <div>
                                            <Field :name="paymentModeSelect" type="radio" :value="paymentOption.value"
                                                v-slot="{ field }">
                                                <div class="d-flex align-items-center justify-content-center mb-2">
                                                    <label
                                                        class="payment-compo-input position-relative text-uppercase rounded-3 bg-light-grey border py-3"
                                                        :for="paymentOption.value">
                                                        <input class="me-2" type="radio" v-bind="field"
                                                            :id="paymentOption.value" :value="paymentOption.value"
                                                            v-model="paymentType" />
                                                        <span
                                                            :class="paymentType === paymentOption.value ? 'check-active' : 'd-none'"
                                                            class="position-absolute"><i
                                                                class="bi bi-check-circle-fill fs-2"></i></span>
                                                        {{ paymentOption.label }}
                                                    </label>
                                                </div>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="payment-box  w-100">
                                        <transition name="fade">
                                            <div v-if="paymentType === 'paypal'">
                                                <button>PayPal</button>
                                            </div>
                                        </transition>
                                        <Transition name="fade">
                                            <div v-if="paymentType === 'cards'">
                                                <div class="row d-flex justify-content-center">
                                                    <div class="">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <form>
                                                                    <div class="mb-3">
                                                                        <div class="form-outline w-100">
                                                                            <label class="form-label"
                                                                                for="typeText">Card
                                                                                Number</label>
                                                                            <input type="text" id="typeText"
                                                                                class="form-control form-control-lg"
                                                                                placeholder="1234 5678 9012 3457"
                                                                                minlength="19" maxlength="19" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="mb-4">
                                                                        <div class="form-outline w-100">
                                                                            <label class="form-label"
                                                                                for="typeName">Cardholder's Name</label>
                                                                            <input type="text" id="typeName"
                                                                                class="form-control form-control-lg"
                                                                                placeholder="Cardholder's Name" />
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="d-flex justify-content-between align-items-end pb-2 gap-2">
                                                                        <div class="form-outline">
                                                                            <input type="text" id="typeExp"
                                                                                class="form-control form-control-lg"
                                                                                placeholder="MM/YYYY" minlength="7"
                                                                                maxlength="7" />
                                                                            <label class="form-label"
                                                                                for="typeExp">Expiration</label>
                                                                        </div>

                                                                        <div class="form-outline">
                                                                            <input type="password" id="typeText2"
                                                                                class="form-control form-control-lg"
                                                                                placeholder="●●●" minlength="3"
                                                                                maxlength="3" />
                                                                            <label class="form-label"
                                                                                for="typeText2">CVV</label>
                                                                        </div>
                                                                    </div>
                                                                    <button type="button"
                                                                        class="btn btn-info btn-lg btn-rounded">
                                                                        Proceed to Payment <i
                                                                            class="bi bi-arrow-right"></i>

                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>

                                <ErrorMessage :name="paymentModeSelect" class="error-message text-danger" />
                            </div>
                            <div class="input-col mt-3">
                                <Field v-slot="{ field }" name="privacyPolicy" type="checkbox" :value="true"
                                    :unchecked-value="false">
                                    <label>
                                        <input type="checkbox" name="privacyPolicy" v-bind="field" :value="true" /> I
                                        have read and agree to the
                                        <router-link to="/">Privacy Policy and Terms</router-link>
                                    </label>
                                    <br />
                                </Field>
                                <ErrorMessage name="privacyPolicy" class="error-message text-danger" />
                            </div>
                            <div class="mt-4">
                                <h4>Captcha</h4>
                                <img src="/images/robot-captcha.png" alt="robot-captcha" width="250" />
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="submit"
                                class="button py-2 px-5 border rounded btn-bg-custom-secondary text-light">Next</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

import { ref } from "vue";
defineOptions({ name: "SubscriptionComp" });

// const contactMethod = ref('annual')

const paymentModeSelect = "Payment Method";
const paymentType = ref("cards");
const paymentMethod = ref([
    { label: "Pay with card", value: "cards", modeImg: "/images/payment-card.png", widthImg: "80" },
    { label: "Pay with paypal", value: "paypal", modeImg: "/images/paypal.png", widthImg: "80" },
]);

const checkboxName = "Newsletters";
const checkboxOptions = ref([
    { label: "Weekly Digest of Guild Articles", value: "Weekly Digest of Guild Articles" },
    { label: "All updates ENGLAND (approx. daily)", value: "All updates ENGLAND (approx. daily)" },
    { label: "Main updates ENGLAND (approx weekly)", value: "Main updates ENGLAND (approx weekly)" },
    { label: "Forms and Templates ENGLAND", value: "Forms and Templates ENGLAND" },
    { label: "All updates WALES (approx daily)", value: "All updates WALES (approx daily)" },
    { label: "Main updates WALES (approx weekly)", value: "Main updates WALES (approx weekly)" },
    { label: "Forms and Templates WALES", value: "Forms and Templates WALES" },
    { label: "Sales Emails (Your details never passed on)", value: "Sales Emails (Your details never passed on)" }
]);

const subscriptionSelect = "subscription"; // Field name for vee-validate
const selectedSubscription = ref("annual"); // Default selected value
const subscriptionOption = ref([
    {
        value: "quarter",
        title: "Quarterly subscription",
        label: "£39.00 Auto-renew quarterly subscription, cancel anytime before next auto-renew. Company or individual."
    },
    {
        value: "annual",
        title: "Annual Subscription",
        label:
            " £119.00 Auto-renewing annual subscription, cancel anytime before next auto-renew. Company or individual. Includes one staff or family sub-user account."
    },
    {
        value: "annualSubscription",
        title: "Annual Subscription (3 or more staff) ",
        label:
            "£189.00 Auto-renew annual subscription. Cancel anytime before next auto-renew. Company or individual. Includes three staff or family sub-user accounts"
    }
]);

const schema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
        .required("Please enter valid Email")
        .email("Email must be a valid email address"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    firstName: Yup.string().required("Please enter your First Name"),
    lastName: Yup.string().required("Please enter your Last Name"),
    privacyPolicy: Yup.string().required("Please agree to Privacy Policy and Terms"),
    [checkboxName]: Yup.array()
        .min(1, "Please select at least one option")
        .required("Selection is required"),
    [paymentModeSelect]: Yup.string().required("Please select a payment method"),
    [subscriptionSelect]: Yup.string().required("Please select a Subscription")
});

function onSubmit(values) {
    alert("Form submitted successfully!\n" + JSON.stringify(values, null, 2));
}
</script>

<style scoped>
.error-message {
    margin-top: 8px;
    display: block;
}

h4 {
    font-size: 18px;
    color: #000;
}

p {
    font-size: 14px;
}

.input-title-col {
    width: 30%;
}

.input-col {
    width: 50%;
}

input {
    background-color: #f7f5f5;
}

label {
    font-size: 18px;
}

.payment-system-box {
    border: 1px solid #d8d8d8;
    padding: 8px 10px;
    border-radius: 10px;
}

.button {
    color: #ecf0f1;
    font-size: 17px;
    background-color: var(--secondary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    box-shadow: 0px 3px 0px #dd6bff;
    transition: all 0.1s;
}

.button:active {
    box-shadow: 0px 1px 0px var(--primary-color);
    position: relative;
    top: 2px;
}

.amount-box {
    font-size: 16px;
    font-weight: 500;
}

label p {
    font-size: 16px;
}

tr {
    border: 0px transparent;
}

.payment-compo-input input {
    display: none;
}

.payment-compo label {
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    height: 100%;
}
.check-active {
    color: #000;
    top: -20px;
    right: -5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
