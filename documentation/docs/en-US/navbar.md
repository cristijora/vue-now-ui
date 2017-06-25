<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
        radio: '1'
      };
    },
  };
</script>

## Radio buttons

### Basic

::: demo Simple white navbar

```html
<n-navbar>
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
```
:::

### Colors

::: demo Handle navbar color throw `type` prop

```html
<n-navbar type="default">
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
<n-navbar type="info">
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
<n-navbar type="success">
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
<n-navbar type="warning">
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
<n-navbar type="danger">
    <div slot="title">Navbar</div>
    <n-menu-item active>Home</n-menu-item>
    <n-menu-item>Link</n-menu-item>
    <n-menu-item disabled>Disabled</n-menu-item>
</n-navbar>
```
:::


### Navbar attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| type     | navbar type (colors)   | string  |   white/primary/info/success/warning/danger           |    white     |

### MenuItem attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| active     | determines whether the menu-item is active   | boolean  |   true/false           |    false     |
| disabled     | determines whether the menu-item is disabled   | boolean  |   true/false           |    false     |

