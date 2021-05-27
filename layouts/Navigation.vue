<template>
  <div class="navigation" :class="navigationState">
    <div class="navigation-logo">
      <logo />
    </div>
    <div class="close-icon" @click="handleNavigation">
      <b-icon-x />
    </div>
    <div class="row vh-100 align-content-center pl-5 pl-lg-0">
      <div class="offset-lg-1 col-lg-4 align-self-center contact order-2 order-lg-1">
        <div>
          <b-icon-envelope/>
          <a href="mailto:hello@antoni.work">hello@antoni.work</a>
        </div>
        <div>
          <b-icon-compass/>
          <span>near Düsseldorf</span>
        </div>
        <div>
          <b-icon-phone/>
          <a href="telto:+4915780413301">01578/0413301</a>
        </div>
      </div>
      <div class="offset-lg-1 col-lg-6 align-self-center mb-4 mb-lg-0 order-1 order-lg-2">
        <a @click="handleNavigation" class="h1 d-block" href="#timeline">Timeline</a>
        <a @click="handleNavigation" class="h1 d-block" href="#work">My Work</a>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconX, BIconEnvelope, BIconGeo, BIconCompass, BIconPhone } from 'bootstrap-vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    BIconX,
    BIconEnvelope,
    BIconGeo,
    BIconCompass,
    BIconPhone,
    Logo,
  },
  computed: {
    navigationState () {
      return this.$store.state.navigationIsOpen ? 'open' : ''
    }
  },
  methods: {
    handleNavigation () {
      this.$store.state.navigationIsOpen = !this.$store.state.navigationIsOpen
    }
  }
}
</script>

<style lang="scss">
.close-icon {
  background: #00ACD1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: .3s background;

  .b-icon {
    color: #fff;
    width: 40px;
    height: 40px;
  }

  &:active,
  &:focus,
  &:hover {
    background: darken(#00ACD1, 10);
  }
}

.navigation {
  float: right;
  display: none;
  height: 100vw;
  width: 0;
  max-width: 0;
  background: #fff;

  a {
    color: black;
    transition: .3s color;

    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
      color: #00ACD1;
    }
  }

  &.open {
    display: inline-block;
    width: 100vw;
    max-width: 100vw;
    
    @media (min-width: 991.98px) {
      width: 50vw;
      max-width: 50vw;
    }
  }
}

.open ~ .content {
  animation: openNavigation 0.5s ease-out;

  @keyframes openNavigation {
    0% {
      transform: translateX(0);
    }
    100% {
      @media (min-width: 991.98px) {
        transform: translateX(calc(-50vw - 15px));
      }
      
      transform: translateX(-100vw);
    }
  }
  transform: translateX(-100vw);

  @media (min-width: 991.98px) {
    transform: translateX(calc(-50vw - 15px));
  }
}

.contact .b-icon {
  width: 40px;
  height: 30px;
  color: #00ACD1;
}

.contact {
  div {
    padding: 5px 0;
  }

  a, span {
    line-height: 30px;
    vertical-align: super;
  }
}

.navigation-logo {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 5;

  svg {
    color: #00ACD1;
    fill: #00ACD1;
    
    @media (min-width: 991.98px) {
      color: white!important;
      fill: white!important;
    }
  }
}
</style>
