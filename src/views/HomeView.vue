<template>
  <div class="home">
    <MenuH />
    <banner />
    <about-me />
    <portfolio />
    <experience />
    <contact />
  </div>
</template>

<script>

import MenuH from "@/components/global/Menu.vue";
import Banner from "@/components/global/Banner.vue";
import AboutMe from "@/components/global/AboutMe.vue";
import Portfolio from "@/components/global/Portfolio.vue";
import Experience from "@/components/global/Experience.vue";
import Contact from "@/components/global/Contact.vue";
export default {
  components: { MenuH, Banner, AboutMe, Portfolio, Experience, Contact },
  name: "HomeView",
};
</script>
