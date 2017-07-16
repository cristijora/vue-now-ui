<style>
.demo-block.demo-dropdown .source{
  height: 250px;
}
</style>
## Dropdowns

We are very proud to present the dropdown which has a subtle animation. We also thought of another use-case: dropdown with flags.

## Basic


::: demo Basic toggle button

```html
<n-dropdown title="5 Notifications">
    <n-button slot="title">
     <img height="20" width="20" src="http://www.clker.com/cliparts/k/G/B/G/C/R/american-flag-hi.png">Regular
    </n-button>

    <n-dropdown-item>Action</n-dropdown-item>
    <n-dropdown-item>Another action</n-dropdown-item>
    <n-dropdown-item>Something else here</n-dropdown-item>
    <n-dropdown-item divider></n-dropdown-item>
</n-dropdown>
<script>
  export default {
    data () {
      return {
        toggle: false
      };
    }
  };
</script>
```
:::
