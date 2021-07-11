export const state = () => ({
  navigationIsOpen: false,
})

export const mutations = {
  handleNavigation (state) {
    state.navigationIsOpen = !state.navigationIsOpen
  },
}
