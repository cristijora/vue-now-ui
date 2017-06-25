<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checked3: false,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: true,
      };
    },
  };
</script>

## Checkboxes

### Basic

::: demo Easy to use checkbox components with v-model. Bind the checkbox state together with `v-model` which should be a Boolean variable

```html
<n-checkbox v-model="checked">Checkbox</n-checkbox>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### Disabled

Checkboxes can be disabled

:::demo Use `disabled` prop to make a checkbox disabled
```html
<n-checkbox v-model="checked2" :disabled="true">Checkbox 1</n-checkbox>
<n-checkbox v-model="checked3" :disabled="true">Checkbox 2</n-checkbox>
<script>
  export default {
    data() {
      return {
        checked2: true,
        checked3: false
      };
    }
  };
</script>
```
:::

### Colors

Same as buttons, checkboxes can have different colors depending on their `type` prop

:::demo Use `round` and `simple` props to configure the shape of your buttons or `icon` and `icon-mini` to specify whether your button is an icon button.All the props used here are Boolean props
```html
<n-checkbox v-model="checked4" type="primary">Primary</n-checkbox>
<n-checkbox v-model="checked5" type="info">Info</n-checkbox>
<n-checkbox v-model="checked6" type="warning">Warning</n-checkbox>
<n-checkbox v-model="checked7" type="success">Success</n-checkbox>
<n-checkbox v-model="checked8" type="danger">Danger</n-checkbox>
<script>
  export default {
    data() {
      return {
        checked4: true,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false
      };
    }
  };
</script>
```
:::



### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| type     | checkbox type (colors)   | string  |   neutral/primary/info/success/warning/danger           |    neutral     |
| disabled  | disable the checkbox    | boolean   | —   | false   |
| checked |  | determines the state of the checkbox (part of v-model) | boolean | false |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | checked value of checkbox |
