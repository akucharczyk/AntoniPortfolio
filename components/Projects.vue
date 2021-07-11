<template>
  <div id="work" class="background pb-5">
    <div class="">
      <h3 class="title text-center pt-5 pb-4">
        My Work
      </h3>
      <div class="overflow-auto">
        <div class="flex w-fit-content pl-6 md:pl-48 lg:pl-96">
          <div
            v-for="(item, index) in projects"
            :key="index"
            class="w-72 sm:w-80 mr-4 justify-content-center"
          >
            <b-card
              :img-src="item.imageSrc"
              img-alt="Image"
              img-top
              tag="article"
              class="shadow-sm"
            >
              <div class="flex flex-wrap">
                <span v-for="technique in item.techniques" :key="technique" class="pill">{{ technique }}</span>
              </div>
              <h4>{{ item.name }}</h4>
              <span class="mt-4" v-for="link in item.links" :key="link">
                <span v-if="isGithubLink(link)">
                  <b-icon-github />
                </span>
                <span v-else>
                  <b-icon-globe2 />
                </span>
                <a class="link" :href="link" target="blank">{{ getLink(link) }}</a>
              </span>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconGithub, BIconGlobe2 } from 'bootstrap-vue'

export default Vue.extend({
  components: {
    BIconGithub,
    BIconGlobe2
  },
  data () {
    return {
      projects: [
        {
          name: 'Laura Alicia Kalk Protfolio',
          imageSrc: '/lauraalicakalk.png',
          techniques: ['Vue.js', 'Tailwind', 'Strapi', 'Linux'],
          links: ['https://www.lauraaliciakalk.art']
        },
        {
          name: 'Aromatic 89 - A scent shop for your home',
          imageSrc: '/aromatic.png',
          techniques: ['Symfony', 'Twig', 'Vue.js', 'Shopware 6'],
          links: ['https://www.aromatic89-shop.de']
        },
        {
          name: 'Alphaoptik - The Photographer for you',
          imageSrc: '/alphaoptik.png',
          techniques: ['Strapi', 'Tailwind', 'Vue.js'],
          links: ['https://www.alphaoptik.net']
        },
        {
          name: 'Fitango - A health app for everyone',
          imageSrc: '/fitango.jpg',
          techniques: ['Figma'],
          links: []
        },
        {
          name: 'DEFI Income - Checkout your crypto',
          imageSrc: '/defichain-income.jpg',
          techniques: ['Angular', 'Tailwind', 'Figma'],
          links: ['https://www.defichain-income.com/']
        }
      ]
    }
  },
  methods: {
    getLink (link: string) {
      if (link.includes('github')) {
        return 'View it on Github'
      }

      return 'View Site'
    },
    isGithubLink (link:string) {
      return link.includes('github')
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 880px;
}

.title {
  color: #00acd1;
}

.background {
  background: #f4f4f4;
}

h4 {
  white-space: break-spaces;
}

.link {
  color: black;
  text-decoration: underline;
  transition: .3s color;
  font-size: 18px;

  &:hover {
    color: #00acd1;
  }
}

.pill {
  background-color: #00acd1;
  color: #ffffff;
  padding: 0 10px;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover,
  &:active,
  &:focus {
    background: darken(#00acd1, 5%);
  }
}
</style>
