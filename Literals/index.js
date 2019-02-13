import {css} from "lit-element";

export const primaryColor = css`
  color: var(--mdc-theme-primaryColor, inherit);
`;

export const secondaryColor = css`
  color: var(--mdc-theme-secondaryColor, inherit);
`;

export const primaryColorBackground = css`
  background-color: var(--mdc-theme-primaryColor, inherit);
`;

export const secondaryColorBackground = css`
  background-color: var(--mdc-theme-secondaryColor, inherit);
`;

export const common = css`
  ${primaryColor}
  ${secondaryColorBackground}
`;

export const inverted = css`
  ${secondaryColor}
  ${primaryColorBackground}
`;
