import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      emphasisTitle: string;
      subTitle: string;
      bodyEmphasis: string;
      bodyRegular: string;
      detailEmphasis: string;
      detailRegular: string;
      emphasisTitleMobile: string;
      subTitleMobile: string;
      bodyEmphasisMobile: string;
      bodyRegularMobile: string;
      detailEmphasisMobile: string;
      detailRegularMobile: string;
    };
  }
}
