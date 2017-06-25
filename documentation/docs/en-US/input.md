<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
<script>
  module.exports = {
    data() {
      return {
       simple: '',
       disabled:'Input value',
       border: '',
       iconRight: '',
       iconLeft: '',
       success: 'Success',
       danger: 'Error input',
       textarea: ''
      };
    },
  };
</script>

## Radio buttons

### Basic

::: demo Simple input with v-model

```html
<n-input v-model="simple" placeholder="Simple"></n-input>
<script>
  export default {
    data() {
      return {
        simple: ''
      }
    }
  }
</script>
```
:::

### Disabled

:::demo Use `disabled` prop to make an input disabled
```html
<n-input v-model="disabled" disabled></n-input>
<script>
  export default {
    data() {
      return {
        disabled: 'Input value',
      }
    }
  }
</script>
```
:::

### Input with border

:::demo Use `has-border` prop 
```html
<n-input v-model="border" placeholder="With Border" has-border></n-input>
<script>
  export default {
    data() {
      return {
        border: '',
      }
    }
  }
</script>
```
:::

### Success and error states

:::demo Add `has-success` or `has-error` class to determine the state of the input
```html
<n-input v-model="success" class="has-success"></n-input>
<n-input v-model="danger"  class="has-danger"></n-input>
<script>
  export default {
    data() {
      return {
        success: '',
        danger: ''
      }
    }
  }
</script>
```
:::

### Input with icons

:::demo Use `has-icon` prop to transform a simple input into an input with an icon. `icon-align` prop will determine whether the icon position should be left or right.
```html
<n-input v-model="iconRight" placeholder="Right Icon" has-icon>
  <i class="fa fa-user-circle"></i>
</n-input>
<n-input v-model="iconLeft" placeholder="Left Icon" has-icon icon-align="left">
  <i class="fa fa-user-circle"></i>
</n-input>
<script>
  export default {
    data() {
      return {
        iconRight: '',
        iconLeft: ''
      }
    }
  }
</script>
```
:::



### Textarea

:::demo No magic here. Simply use the default `textarea` html tag 
```html
<textarea v-model="textarea" class="form-control" placeholder="Here can be your nice text" rows="5"></textarea>
<script>
  export default {
    data() {
      return {
        textarea: '',
      }
    }
  }
</script>
```
:::


Attributes - To be defined
