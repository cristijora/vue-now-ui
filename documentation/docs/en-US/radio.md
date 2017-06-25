<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
        radio: '1',
        disabledRadio: '2',
        coloredRadio: '1',
      };
    },
  };
</script>

## Radio buttons

### Basic

::: demo Pretty, easy to use radio buttons

```html
<n-radio v-model="radio" label="1">Option 1</n-radio>
<n-radio v-model="radio" label="2">Option 2</n-radio>
<script>
  export default {
    data() {
      return {
        radio: '1'
      };
    }
  };
</script>
```
:::

### Disabled

Radio buttons can be disabled

:::demo Use `disabled` prop to make a radio button disabled
```html
<n-radio v-model="disabledRadio" label="1" :disabled="true"> Disabled radio is off</n-radio>
<n-radio v-model="disabledRadio" label="2" :disabled="true"> Disabled radio is on</n-radio>
<script>
  export default {
    data() {
      return {
        disabledRadio: '2',
      };
    }
  };
</script>
```
:::

### Colors

Check each radio to see how the color of the radio button change when it's active

:::demo Use `type` prop to change the color of an active radio button
```html
<n-radio v-model="coloredRadio" label="1" type="primary">Primary</n-radio>
<n-radio v-model="coloredRadio" label="2" type="info">Info</n-radio>
<n-radio v-model="coloredRadio" label="3" type="success">Success</n-radio>
<n-radio v-model="coloredRadio" label="4" type="warning">Warning</n-radio>
<n-radio v-model="coloredRadio" label="5" type="danger">Danger</n-radio>
<script>
  export default {
    data() {
      return {
        coloredRadio: '1'
      };
    }
  };
</script>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| type     | radio type (colors)   | string  |   neutral/primary/info/success/warning/danger           |    neutral     |
| disabled  | disable the radio    | boolean/string   | —   |  —  |
| label | Value of each radio button |  | string/number | — |

### Radio Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | current value of radio v-model |
