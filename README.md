# PostCSS Hover 

[PostCSS](https://github.com/postcss/postcss) plugin that adds an alternative hover for accessibility and mobile usability. \
It removes hover on touch devices and simultaniously adds :focus-visible for accessibility.

## Example
```css
.button {
  /* ...your css */

  &:active {
    transform: scale(0.95);
  }

  @hover {
    color: var(--button-background);
    border-color: var(--button-background);

    &::after {
      transform: scaleX(1);
    }
  }
}
```