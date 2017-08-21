## Alert

### Type

::: demo Alert provides 4 themes defined by the `type` attribute.

```html
<n-alert type="success" title="success"></n-alert>
<n-alert type="danger" title="danger"></n-alert>
<n-alert type="warning" title="warning"></n-alert>
<n-alert type="info" title="info"></n-alert>
```
:::

### With descprtion

::: demo Alert provides 4 themes defined by the `type` attribute.

```html
<n-alert type="success" title="success" description="Lorem ipsum dolor sit amet, consectetur."></n-alert>
<n-alert type="danger" title="danger" description="Lorem ipsum dolor sit amet, consectetur."></n-alert>
<n-alert type="warning" title="warning" description="Lorem ipsum dolor sit amet, consectetur."></n-alert>
<n-alert type="info" title="info" description="Lorem ipsum dolor sit amet, consectetur."></n-alert>
```
:::

### Hide icon

:::demo Use `show-icon` prop to configure the visibility of the icon

```html
<n-alert type="success" title="success" description="alert without icon" :show-icon="false"> </n-alert>
```
:::

### Unclosable

:::demo Use `closable` props to configure the visibility of close button, the default value is `true`
```html
<n-alert :closable="false" type="info" title="Alert unclosable"></n-alert>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |--------------------  |----- |
| title     | alert title   | string  |        —       |    —     |
| type     | alert type   | string    | success/warning/danger/info |     info    |
| description     | alert description  | string    | — | —   |
| closable     | show close button | boolean    | true/false | true   |
| show-icon  | show alert icon    | boolean   | true/false  | true   |
