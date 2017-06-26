<style>
.demo-block .n-button{
  margin-bottom:10px;
}
</style>
## Button

We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete.

### Colors

::: demo Button provides 7 themes defined by the `type` attribute.

```html
<n-button type="default">Default</n-button>
<n-button type="primary">Primary</n-button>
<n-button type="info">Info</n-button>
<n-button type="success">Success</n-button>
<n-button type="warning">Warning</n-button>
<n-button type="danger">Danger</n-button>
<n-button type="neutral">Neutral</n-button>
```
:::

### Sizes

Buttons come in all needed sizes:

:::demo Use `size` prop to configure the size of a button

```html
<n-button type="primary" size="lg">Large</n-button>
<n-button type="primary">Normal</n-button>
<n-button type="primary" size="sm">Small</n-button>
```
:::

### Styles

We added extra classes that can help you better customise the look. You can use regular buttons, rounded corners buttons or plain simple buttons. Let's see some examples:

:::demo Use `round` and `simple` props to configure the shape of your buttons or `icon` and `icon-mini` to specify whether your button is an icon button.All the props used here are Boolean props
```html
<n-button type="primary">Default</n-button>
<n-button type="primary" round>Round</n-button>
<n-button type="primary" round>
  <i class="now-ui-icons ui-2_favourite-28"></i> With Icon
</n-button>
<n-button type="primary" round icon icon-mini>
  <i class="now-ui-icons ui-2_favourite-28"></i>
</n-button>
<n-button type="primary" simple>Simple</n-button>
```
:::



### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| size     | button size   | string  |   lg/sm            |    —     |
| type     | button type   | string    | default/primary/success/warning/ danger/info/neutral |     —    |
| simple     | determine whether it's a plain button   | Boolean    | — | false   |
| round     | makes the button round  | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | determine if it's an icon button | boolean   |  —  |  false  |
| iconMini | determine if it's a rounded icon button | boolean | — | false |
| tag | render the button as a custom html tag | string | any valid html tag | button |
