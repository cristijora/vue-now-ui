<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>

## Label
Colored labels with the html tag you want
 
### Basic

::: demo Colored labels

```html
<n-label type="default">Default</n-label>
<n-label type="primary" tag="div">Orange</n-label>
<n-label type="success">Green</n-label>
<n-label type="info">Blue</n-label>
<n-label type="warning">Yellow</n-label>
<n-label type="danger">Red</n-label>
```
:::

### Render with a custom tag

::: demo Choose a different html tag

```html
<n-label type="default" tag="div">Div</n-label>
<n-label type="danger" tag="input" value="Input">Input</n-label>
```
:::


### Input Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| type     | determines label color   | string  |   default/primary/info/success/ warning/danger           |    default(gray)     |
| tag     | determines the tag of the label   | string  |   any html tag (although not all might look ok)          |    span     |

### Input Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | input value |
