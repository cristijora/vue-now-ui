<script>
  export default {
    data() {
      return{}
    }
  }
</script>

### Tabs
::: demo Simple tabs with content

```html
<n-tabs>
  <n-tab-item label="Config">
    Config
  </n-tab-item>
  <n-tab-item label="Role">
    Role
  </n-tab-item>
</n-tabs>
```
:::

### With descprtion

::: demo Tabs with background on card

```html
<n-tabs background="#e95e38">
  <n-tab-item label="Config">
    Config
  </n-tab-item>
  <n-tab-item label="Role">
    Role
  </n-tab-item>
</n-tabs>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| label     | tab label   | string required |        —       |    —     |
| background     | tabs background color   | string (hex o rgb color)    |  #fff |    
