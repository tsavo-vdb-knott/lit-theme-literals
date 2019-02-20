import {css} from "lit-element";

export const primaryColor = css`
  color: var(--mdc-theme-primaryColor, inherit);
`;

export const secondaryColor = css`
  color: var(--mdc-theme-secondaryColor, inherit);
`;

export const secondaryColorBackground = css`
  background-color: var(--mdc-theme-secondaryColor, inherit);
`;

export const primaryColorBorder = css`
  border-color: var(--mdc-theme-primaryColorBorder, inherit);
`;

export const primaryColorBackground = css`
  background-color: var(--mdc-theme-primaryColor, inherit);
`;

export const secondaryColorBorder = css`
  border-color: var(--mdc-theme-secondaryColorBorder, inherit);
`;

export const svgPrimaryColor = css`
  fill: var(--mdc-theme-primaryColor, inherit);
`;

export const svgSecondaryColor = css`
  fill: var(--mdc-theme-secondaryColor, inherit);
`;

export const common = css`
  ${primaryColor}
  ${secondaryColorBackground}
`;

export const inverted = css`
  ${secondaryColor}
  ${primaryColorBackground}
`;
