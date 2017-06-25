export default {
  functional: true,
  name: 'n-menu-item',
  props: {
    active: Boolean,
    disabled: Boolean
  },
  render(h, {props, children}) {
    return (<li class={['nav-item', {'active': props.active}]}>
      <a class={['nav-link', {'disabled': props.disabled}]} href="javascript:void(0)">
        {children}
      </a>
    </li>)
  }
}
