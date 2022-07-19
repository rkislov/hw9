export default function composeClassName(state) {
    return "Menu__item-link" + (state.isActive ? " Menu__item-link-active" : "");
  }