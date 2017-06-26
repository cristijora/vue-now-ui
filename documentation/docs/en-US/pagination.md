<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
        simple: 1
      };
    },
  };
</script>

## Radio buttons

### Basic

::: demo Initialize the pagination component with a `total` prop which determines how many pages there are in total and with a `v-model` which will bind the selected page automatically

```html
<n-pagination :total="10" v-model="simple"></n-pagination>
<script>
export default{
    data() {
       simple:1 
    }
}
</script>
```
:::


### Navbar attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| type     | navbar type (colors)   | string  |   white/primary/info/success/ warning/danger           |    white     |
| color-on-scroll     | colors the navbar at the specified pixel value   | number  |   number > 0     |    0     |

### MenuItem attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| active     | determines whether the menu-item is active   | boolean  |   true/false           |    false     |
| disabled     | determines whether the menu-item is disabled   | boolean  |   true/false           |    false     |

