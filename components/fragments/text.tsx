import { TextColors } from "../../constants/colors";
import styled from "styled-components";

export interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  primaryFont?: boolean;
  secondaryFont?: boolean;
  opacity?: number;
  margintop?: string;
  theme: {
    font: {
      weight: typeof FontWeight;
      size: typeof FontSize;
    };
    colors: typeof TextColors;
  };
}

// Define the Title enum
export enum Title {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export enum FontFamily {
  primary = "var(--font-primary)",
  secondary = "var(--font-secondary)",
}

export enum FontSize {
  small = "12px",
  medium = "calc(.2vw + 12px)",
  normal = "18px",
  large = "calc(.4vw + 14px)",
  xl = "clamp(20px, 4vw, 50px);",
  xxl = "clamp(40px, 7vw, 100px);",
}

export enum FontWeight {
  thin = 200,
  light = 300,
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
}


const Text = styled.p<TextProps>`
  z-index: 10;
  font-smooth: auto;
  -webkit-font-smoothing: auto;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-family: ${(props) => props.primaryFont && FontFamily.primary};
  font-family: ${(props) => props.secondaryFont && FontFamily.secondary};
  margin-top: ${(props) => props.margintop};
`;

Text.defaultProps = {
  theme: {
    font: {
      weight: FontWeight,
      size: FontSize,
    },
    colors: TextColors,
  },
};


export default Text;