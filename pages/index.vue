<template>
  <div>
    <b-row class="vh-100 no-gutters">
      <b-col lg="6">
        <logo class="application-logo" />
        <img class="d-none d-lg-block cover-image" src="~/assets/app_development_SVG.svg">
      </b-col>
      <b-col lg="6" order="0" order-md="1">
        <div class="header-navigation">
          <a href="https://github.com/akucharczyk" target="blank">
            <b-icon-github class="social-media" />
          </a>
          <a href="https://instagram.com/madebyantoni" target="blank">
            <b-icon-instagram class="social-media" />
          </a>
          <b-icon-list class="menu" @click="handleNavigation" />
        </div>
        <div class="welcome">
          <div>
            <h1>I am Antoni Kucharczyk</h1>
            <div class="no-wrap">
              <h2 class="h1 d-inline pr-2">
                I'm a
              </h2>
              <div class="d-inline job" />
            </div>

            <div class="mt-3">
              <a
                role="button"
                aria-pressed="true"
                class="btn btn-light text-center"
                href="mailto:hello@antoni.work"
              >Contact Me</a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <timeline />
    <projects />
  </div>
</template>

<script>
import { BIconGithub, BIconInstagram, BIconList } from 'bootstrap-vue'
import Logo from '~/components/Logo.vue'
import Timeline from '~/components/Timeline.vue'
import Projects from '~/components/Projects.vue'

export default {
  components: {
    Logo,
    Timeline,
    Projects,
    BIconGithub,
    BIconInstagram,
    BIconList
  },
  methods: {
    handleNavigation () {
      this.$store.commit('handleNavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  scroll-behavior: smooth;
}

.no-wrap {
  white-space: nowrap;
}

.btn {
  color: #00ACD1;
  font-weight: 600;
  border-radius: 0;
}

.welcome {
  white-space: break-spaces;
  height: 100vh;
  background: #00ACD1;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
}

.job::before {
  content: '';
  display: inline-block;
  font-weight: 700!important;
  padding: 0 25px 0 5px;
  font-size: 32px;
  border-bottom: 1px solid #ffffff;
  background: #fff;
  color: #00ACD1;
  animation: profile 9s linear infinite;

  @keyframes profile {
    0% { content: 'Developer'}
    50% { content: 'Webdesigner'}
    100% { content: 'Designer'}
  }
}

.navigation.open ~ .content .header-navigation {
  display: none;
}

.header-navigation {
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 5;
  @media (min-width: 991.98px) {
    right: 40px;
  }

  .menu, a {
    cursor: pointer;
    transition: .3 color;
  }

  .menu:hover,
  a:hover svg,
  a:active svg,
  a:focus svg {
    color: darken(#00ACD1, 10);
  }

  .social-media {
    color: #ffffff;
    height: 20px;
    width: 20px;
    margin-bottom: 5px;
    margin-right: 10px;
  }

  .menu {
    color: #ffffff;
    width: 30px;
    height: 30px;
  }
}

.cover-image {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.application-logo {
  position: absolute;
  z-index: 55;
  left: 20px;
  top: 20px;
  color: #ffffff;
}
</style>
