# Theming and Color Helper Literals for LitElements

## Usage With Literals

```js
import {LitElement, html, css} from "lit-element";

import {primaryColor, secondaryColorBackground, inverted} from "lit-theme-literals";

class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        ${primaryColor}
        ${secondaryColorBackground}
      }

      div {
        ${inverted}
      }
    `;
  }

  render() {
    return html`
      <div></div>
    `;
  }
}
```
