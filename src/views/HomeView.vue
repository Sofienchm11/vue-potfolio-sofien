<template>
  <div class="home">
    <about-me />
    <portfolio />
    <experience />
    <contact />
  </div>
</template>

<script>
import AboutMe from "@/components/global/AboutMe.vue";
import Portfolio from "@/components/global/Portfolio.vue";
import Experience from "@/components/global/Experience.vue";
import Contact from "@/components/global/Contact.vue";
export default {
  components: { AboutMe, Portfolio, Experience, Contact },
  name: "HomeView",
};
</script>
