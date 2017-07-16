<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
        toggle: false,
        toggleText: true,
        toggleTextSlots: true
      };
    },
  };
</script>
## Toggle Buttons

### Basic

::: demo Basic toggle button

```html
<n-toggle v-model="toggle"></n-toggle>
<script>
  export default {
    data() {
      return {
        toggle: false
      };
    }
  };
</script>
```
:::


### With text or icons

::: demo You can customize on/off text both with props and slots

```html
<n-toggle v-model="toggleText" on-text="ON" off-text="OFF"></n-toggle>
<n-toggle v-model="toggleTextSlots">
  <span slot="on"><i class="now-ui-icons ui-2_favourite-28"></i></span>
  <span slot="off"><i class="now-ui-icons ui-1_simple-remove"></i></span>
</n-toggle>
<script>
  export default {
    data() {
      return {
        toggleText: true,
        toggleTextSlots: true
      };
    }
  };
</script>
```
:::
