<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative">
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full py-[20vh] lg:py-[35vh]">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            class="text-5xl lg:text-7xl font-bold mx-auto mb-8 bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text py-2"
            style="-webkit-text-fill-color: transparent"
          >Antoni Kucharczyk</h1>
          <p class="uppercase mb-2 text-gray-400">// about me</p>
          <p class="text-gray-200 text-xl mb-5">I am a Software Developer and passionate about UI/UX Designer.</p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <a
              href="mailto:hello@antoni.work"
              class="block text-center w-full lg:w-auto lg:inline-block px-4 py-3 font-semibold text-md text-white rounded-md shadow-md shadow-blue-500/70 hover:shadow-blue-500/40 ease-in-out duration-150 bg-gradient-to-br from-green-500 to-blue-600 hover:bg-gradient-to-br transition-all"
            >Contact Me</a>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-[50vh] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full bg-gradient-to-br from-green-500 to-blue-600 animate-tilt overflow-hidden"
      >
        <BackgroundMoving
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible"
        />
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="../assets/me-clean.png"
          alt="Antoni Kucharczyk"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BackgroundMoving from './BackgroundMoving.vue'
</script>

