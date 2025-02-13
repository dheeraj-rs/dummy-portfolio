import React, { useEffect } from "react";
import { FontSize, FontWeight,FontHeight } from "../constants/typography";
import { TextColors } from "../constants/colors";
import Container from "./fragments/container";
import Section from "./fragments/section";
import Text from "./fragments/text";
import { AlignItem, JustifyContent } from "../constants/flexbox";
import { smoothDropAnimate } from "../utils/animations";
import { YAnimAxis } from "../enums/anims";

const Hero: React.FC = () => {
  useEffect(() => {
    smoothDropAnimate(".hero-animated-text", 2200, YAnimAxis.top);
  }, []);

  return (
    <Section className="hero">
      <Container flex="4" fullHeight fullWidth>
        <img className="hero__gradient-background" src="/Glow.png" />
        <Container align={AlignItem.flexStart} column>
          <Text
            className="hero-animated-text"
            color={TextColors.color2}
            fontSize={FontSize.large}
            fontWeight={FontWeight.light}
          >
            Hi there, I'm
          </Text>
          <Text
            className="hero-animated-text"
            color={TextColors.white}
            fontSize={FontSize.xxl}
          >
            DHEERAJ R S
          </Text>
          <Text
            className="hero-animated-text"
            color={TextColors.color1}
            fontSize={FontSize.xl}
          >
            Developer + Designer
          </Text>
          <Container className="hero-animated-text" margin="30px 0px 0px 0px">
            <Text
              color={TextColors.color3}
              fontSize={FontSize.large}
              fontWeight={FontWeight.light}
              margintop={FontHeight.large}
            >
              I'm a Full-Stack Engineer with 3 years of experience in software
              development, specializing in the MERN stack (MongoDB, Express.js,
              React.js, Node.js) and Next.js. My expertise lies in building
              modern web applications and software solutions. Currently, I'm
              working on website building and software creation.{" "}
              <a
                className="hero__company-link"
                href="https://dheerajrs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                software
              </a>
            </Text>
          </Container>
        </Container>
      </Container>
      <Container justify={JustifyContent.flexEnd} flex="3" fullHeight fullWidth>
        <img
          className="hero__keyboard-image"
          src="/Keys.png"
          width={839}
          height={653}
        />
      </Container>
    </Section>
  );
};

export default Hero;
