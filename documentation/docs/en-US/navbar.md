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

## Pagination

### Basic
Ever wanted to have pagination with just a v-model ?

::: demo Simple pagination

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

You can specify the color of your navbar through the `type` prop.

You can also color the navbar only after scrolling certain amount of pixels through `color-on-scroll` prop
Specify `color-on-scrol="500"` for example and your navbar will be transparent until you reach 500 pixels from page top.
See 
<template>
 <router-link to="/">main page </router-link>
</template>
as a reference 
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
| type     | navbar type (colors)   | string  |   white/primary/info/success/ warning/danger           |    white     |
| color-on-scroll     | colors the navbar at the specified pixel value   | number  |   number > 0     |    0     |

### MenuItem attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| active     | determines whether the menu-item is active   | boolean  |   true/false           |    false     |
| disabled     | determines whether the menu-item is disabled   | boolean  |   true/false           |    false     |

