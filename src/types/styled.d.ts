import theme from "src/theme";
import "styled-components/native";

declare module "styled-components/native" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
