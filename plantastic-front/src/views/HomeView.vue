<template>
  <HeroSection />
  <OffersSection />
  <FeaturedProducts />
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import OffersSection from '../components/OffersSection.vue'
import FeaturedProducts from '../components/FeaturedProducts.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    OffersSection,
    FeaturedProducts
  }
}
</script>
