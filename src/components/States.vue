<template>
  <div class="relative bg-slate-900">
    <div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div class="h-full w-full xl:grid xl:grid-cols-2">
        <div class="h-full xl:relative xl:col-start-2">
          <img
            class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            srcset="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80 872w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80 1172w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80 1472w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80 1744w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80 1772w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80 2072w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80 2344w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80 2372w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80 2672w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80 2944w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80 2972w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3272&q=80 3272w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3544&q=80 3544w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3572&q=80 3572w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3872&q=80 3872w, https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3882&q=80 3882w"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
    >
      <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2
          class="text-sm font-semibold tracking-wide uppercase bg-gradient-to-br from-blue-500 via-fuchsia-400 to-fuchsia-600 bg-clip-text"
          style="-webkit-text-fill-color: transparent"
        >Valuable Metrics</h2>
        <p
          class="mt-3 text-3xl font-extrabold text-white"
        >More Information about my experience.</p>
        <p
          class="mt-5 text-lg text-gray-300"
        >
        I have extensive experience working with a variety of clients, developing a wide range of features and designing numerous web pages.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p class="group cursor-pointer">
            <span class="block text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">7+</span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-semibold text-white">Years</span> of professional experience.
            </span>
          </p>

          <p class="group cursor-pointer">
            <span class="block text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">25+</span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-semibold text-white">Successfully</span> launched Projects.
            </span>
          </p>

          <p class="group cursor-pointer">
            <span class="block text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">300+</span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-semibold text-white">New Features</span> planned and developed.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
