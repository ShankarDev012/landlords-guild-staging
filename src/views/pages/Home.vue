<template>
   <div class="main-wrapper">
    <div class="container">
    <HeroSection />
    <AboutSection />
    </div>
    <SubscribeBanner />
    <ServicesSection />  
    <div class="container">
      <AccordionSection />   
    </div>
    <SubscribeBanner />
    <LetContactSection />
   </div>
</template>

<script setup>
defineOptions({ name: 'HomePage' });
import { ref } from 'vue';
import { provide } from 'vue';
import AccordionSection from '@/components/AccordionSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import SubscribeBanner from '@/components/SubscribeBanner.vue';
import LetContactSection from '@/components/LetContactSection.vue';

const servicesData = ref([
    {
        icon: 'bi bi-camera text-secondary fs-2',
        title: 'Help and Guide',
        description: 'The Landlord’s PRS Handbook is a constantly updated online guide for landlords in England and Wales. Covering everything from tenancy agreements to safety rules. Also access our telephone help-line.',
        link: 'https://england.landlordsguild.com/service/landlord-prs-handbook-england/'
    },
    {
        icon: 'bi bi-pencil-square text-secondary fs-2',
        title: 'Tenancy Builder',
        description: 'Tenancy Builder simplifies creating tenancy agreements. Enter details, generate PDFs, and send for digital signing in clicks. It auto-includes key documents and supports renewals.',
        link: 'https://england.landlordsguild.com/service/tenancy-agreements/'
    },
    {
        icon: 'bi bi-camera text-secondary fs-2',
        title: 'Help and Guide',
        description: 'The Landlord’s PRS Handbook is a constantly updated online guide for landlords in England and Wales. Covering everything from tenancy agreements to safety rules. Also access our telephone help-line.',
        link: 'https://england.landlordsguild.com/service/landlord-prs-handbook-england/'
    },
    {
        icon: 'bi bi-camera text-secondary fs-2',
        title: 'Help and Guide',
        description: 'The Landlord’s PRS Handbook is a constantly updated online guide for landlords in England and Wales. Covering everything from tenancy agreements to safety rules. Also access our telephone help-line.',
        link: 'https://england.landlordsguild.com/service/landlord-prs-handbook-england/'
    },
    {
        icon: 'bi bi-camera text-secondary fs-2',
        title: 'Help and Guide',
        description: 'The Landlord’s PRS Handbook is a constantly updated online guide for landlords in England and Wales. Covering everything from tenancy agreements to safety rules. Also access our telephone help-line.',
        link: 'https://england.landlordsguild.com/service/landlord-prs-handbook-england/'
    },
    {
        icon: 'bi bi-camera text-secondary fs-2',
        title: 'Help and Guide',
        description: 'The Landlord’s PRS Handbook is a constantly updated online guide for landlords in England and Wales. Covering everything from tenancy agreements to safety rules. Also access our telephone help-line.',
        link: 'https://england.landlordsguild.com/service/landlord-prs-handbook-england/'
    }
])

provide('servicesData', servicesData);

</script>

<style lang="scss" scoped>

</style>