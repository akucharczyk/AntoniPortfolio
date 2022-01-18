<template>
  <div
    class="mx-auto w-full flex flex-nowrap gap-10 snap-x snap-mandatory overflow-x-auto pb-4 z-20"
  >
    <div
      v-for="card in cardItems"
      class="group first:snap-always snap-center snap-always shrink-0 first:pl-2 lg:first:pl-20 last:pr-0 lg:last:pr-20 self-center w-full md:w-1/2 xl:w-1/3"
      :class="card.url ? 'cursor-pointer' : 'cursor-default'"
      @click="openLink(card.url)"
    >
      <img
        class="p-1 mx-auto shrink-0 w-full h-auto md:max-w-xl lg:max-w-xl xl:max-w-2xl md:w-full md:h-auto object-contain md:object-cover rounded-lg border border-transparent md:group-hover:border-blue-500 transition-all"
        :src="card.src"
        :title="card.title"
      />
      <div
        class="text-gray-100 group-hover:text-blue-500 text-lg lg:text-xl text-center md:text-right md:pr-2 lf:pr-0 lg:text-center transition-colors"
      >{{ card.title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cardItems = [
  {
    src: '/designs/newsletter.jpeg',
    title: 'Newsletter Classic',
  },
  {
    src: '/designs/DEFI-History.jpg',
    title: 'DEFI-History',
  },
  {
    src: '/designs/golf-io.jpg',
    title: 'Minigolf.io',
  },
  {
    src: '/designs/Papers.jpg',
    title: 'Laura Alicia Kalk',
    url: 'https://lauraaliciakalk.art/'
  },
  {
    src: '/designs/alphaoptik.png',
    title: 'Alphaoptik',
    url: 'https://alphaoptik.net/'
  },
  {
    src: '/designs/aromatic89.jpeg',
    title: 'Aromatic 89',
    url: 'https://aromatic89-shop.de/'
  },
  {
    src: '/designs/defichain-income.jpeg',
    title: 'DEFI-Income',
    url: 'https://defichain-income.de/'
  },
  {
    src: '/designs/Dribbble1.jpg',
    title: 'Newsletter Minimalistic',
  },
]

const openLink = (url?: string) => {
  if (!url) {
    return
  }

  window.open(url, '_blank')?.focus()
}
</script>

