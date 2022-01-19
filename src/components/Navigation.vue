<template>
  <nav class="fixed right-0 left-0 z-30 shadow shadow-blue-500/20 backdrop-blur-lg">
    <Popover>
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <a href="#">
                <svg
                  class="h-8 w-8 fill-fuchsia-500"
                  viewBox="0 0 58 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.0407 0.0234375C26.7752 0.0496931 30.4199 1.46948 33.2677 3.93714C38.375 8.36097 40.814 14.9981 42.4354 21.1914L42.4546 21.2661C42.5416 21.2814 42.6273 21.2978 42.7129 21.3145C47.9486 22.3389 52.8612 24.9075 57.3318 27.9502C57.6121 28.1424 57.8041 28.4396 57.8649 28.7755C57.9243 29.1101 57.8484 29.4557 57.6508 29.7336C56.6081 31.2128 54.7146 33.8947 53.6829 35.3546C53.4854 35.6339 53.1857 35.8205 52.8501 35.8758C52.5131 35.9311 52.1692 35.848 51.8944 35.6477C50.0617 34.4546 46.3769 32.2109 44.4696 31.5999C44.4696 31.5999 44.6865 33.4537 44.8481 34.9564C45.3411 39.5517 45.6353 44.1704 45.627 48.8058C45.6256 49.1459 45.4889 49.4707 45.2472 49.7085C45.0055 49.9463 44.6782 50.0776 44.3398 50.0721C42.5403 50.0502 39.2809 50.0071 37.4868 49.9836C36.7881 49.9738 36.2274 49.4016 36.2329 48.7021C36.2635 42.6484 35.7523 36.6942 34.8215 30.7884C28.641 32.7432 25.0419 38.6628 20.6183 44.0571C18.2704 46.9215 15.3715 49.5924 11.6908 49.967C7.63733 50.379 3.60729 47.8298 1.71519 43.9202C-0.472466 39.3969 -0.244583 33.9791 0.624126 28.9401C2.29525 19.2477 6.22447 10.3586 13.4545 4.03114C16.0579 1.75287 19.2965 0.0732055 22.8363 0.0234375C22.904 0.0234375 22.973 0.0234375 23.0407 0.0234375H23.0407ZM22.9523 9.43098C21.4262 9.44352 20.0934 10.6213 18.9623 11.7493C16.1352 14.5737 14.2044 18.2123 12.6562 21.9545C10.7517 26.5608 9.37612 30.6404 9.43551 35.609C9.45469 37.2624 9.40654 39.1162 10.528 40.377C10.6149 40.4752 10.7821 40.5761 10.7821 40.5761C12.3165 39.824 13.3813 38.1029 14.5552 36.5573C18.3394 31.5791 22.0325 27.1733 27.3069 23.9619C29.0112 22.925 30.848 22.1135 32.7843 21.5841C31.7057 17.9952 30.3854 14.3552 27.706 11.6069C26.4769 10.3475 24.8485 9.44481 22.9965 9.43098C22.9828 9.43098 22.9675 9.43098 22.9523 9.43098"
                  />
                </svg>
              </a>
            </div>
            <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <a
                href="#clients"
                class="border-transparent text-gray-200 hover:border-fuchsia-500 hover:text-fuchsia-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
              >Clients</a>
              <a
                href="#designs"
                class="border-transparent text-gray-200 hover:border-fuchsia-500 hover:text-fuchsia-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
              >Designs</a>
              <a
                href="#about"
                class="border-transparent text-gray-200 hover:border-fuchsia-500 hover:text-fuchsia-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
              >About</a>
            </div>
          </div>
          <PopoverButton class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
              -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
              -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </PopoverButton>
          <div class="lg:flex items-center hidden">
            <a
              href="#contact"
              class="px-4 py-3 font-semibold text-sm text-white rounded-md shadow-sm shadow-blue-500/70 hover:shadow-blue-500/10 ease-in-out duration-150 bg-gradient-to-br from-blue-500 via-fuchsia-400 to-fuchsia-600"
            >Contact Me</a>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel v-slot="{ close }">
          <div class="pt-2 pb-3 space-y-1">
            <a
              @click="close()"
              href="#clients"
              class="border-transparent text-gray-100 hover:border-blue-500 hover:text-blue-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Clients</a>
            <a
              @click="close()"
              href="#designs"
              class="border-transparent text-gray-100 hover:border-blue-500 hover:text-blue-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Designs</a>
            <a
              @click="close()"
              href="#about"
              class="border-transparent text-gray-100 hover:border-blue-500 hover:text-blue-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >About</a>
            <hr/>
            <div class="flex px-4 py-2">
              <a
                @click="close()"
                href="#contact"
                class="w-full text-center px-4 py-3 block font-semibold text-sm text-white rounded-md shadow-sm shadow-blue-500/70 hover:shadow-blue-500/10 ease-in-out duration-150 bg-gradient-to-br hover:bg-gradient-to-r from-blue-500 via-fuchsia-400 to-fuchsia-600"
              >Contact Me</a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </nav>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
