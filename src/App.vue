<script setup lang="ts">
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import DesignCards from './components/DesignCards.vue'
import States from './components/States.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <div class="w-screen overflow-hidden bg-slate-900">
    <Navigation />
    <Header />
    <CookieBanner />
    <div id="clients" class="py-5 w-screen overflow-hidden">
      <h3
        class="text-3xl font-extrabold text-center my-4 bg-gradient-to-br from-blue-500 via-fuchsia-400 to-fuchsia-600 bg-clip-text px-10"
        style="-webkit-text-fill-color: transparent"
      >Companies I already worked with:</h3>
      <div
        class="mx-auto md:max-w-3xl lg:max-w-5xl grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 md:gap-20"
      >
        <div class="px-20 md:p-4 flex items-center justify-center">
          <img
            src="./assets/SMSGroup.svg"
            title="SMS Group"
            alt="SMS Group Logo"
            class="h-20 grayscale invert hover:invert-0 hover:grayscale-0 transition-all duration-150 w-1/2 md:w-full"
          />
        </div>
        <div class="px-20 md:p-4 flex items-center justify-center">
          <img
            src="./assets/Deutsche_Bahn_AG-Logo.svg"
            title="Deutsche Bahn AG"
            alt="Deutsche Bahn AG Logo"
            class="h-10 grayscale hover:invert-0 hover:grayscale-0 transition-all duration-150"
          />
        </div>
        <div class="px-20 md:p-4 flex items-center justify-center">
          <img
            src="./assets/LanXess-Logo.svg"
            title="LanXess"
            alt="LanXess Logo"
            class="h-10 grayscale invert hover:invert-0 hover:grayscale-0 transition-all duration-150"
          />
        </div>
      </div>
    </div>
    <States id="about" />
    <div id="designs" class="justify-center items-center pt-10 -m-1 w-screen overflow-hidden">
      <h3
        class="text-3xl font-extrabold text-center my-4 bg-gradient-to-br from-blue-500 via-fuchsia-400 to-fuchsia-600 bg-clip-text"
        style="-webkit-text-fill-color: transparent"
      >Recent Designs</h3>
      <DesignCards />
    </div>
    <Contact id="contact" />
    <Footer />
  </div>
</template>

