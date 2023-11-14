import { Content, Carousel } from "..";
import BasketballMobile from "../../assets/basketball/basketball-mobile.png";
import BasketballTablet from "../../assets/basketball/basketball-tablet.png";
import BasketballDesktop from "../../assets/basketball/basketball-desktop.png";
import { colors } from "../../constants/color";
import { PlayersStyle } from "./styles";

export const Players = () => (
  <PlayersStyle>
    <h1>PLAYERS</h1>
    <picture className="img-basketball">
      <source media="(min-width:1920px)" srcSet={BasketballDesktop} />
      <source media="(min-width:768px)" srcSet={BasketballTablet} />
      <img src={BasketballMobile} alt="Football" loading="lazy" />
    </picture>
    <Carousel className="players-content-carousel">
      <Content
        className="players-content-1"
        title="CONNECTION"
        number="01"
        underline="line-2"
        description="Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
        style={{
          backgroundColor: colors.white,
          height: 185,
        }}
      />
      <Content
        className="players-content-2"
        title="COLLABORATION"
        number="02"
        description="Work with recruiter to increase your chances of findingtalented athlete."
        style={{
          backgroundColor: colors.gray,
          height: 148,
        }}
      />
      <Content
        className="players-content-3"
        title="GROWTH"
        number="03"
        fontColor={colors.white}
        numberColor={colors.violet_100}
        description="Save your time, recruit proper athlets for your team."
        style={{
          backgroundColor: colors.navy,
          height: 122,
        }}
      />
    </Carousel>
  </PlayersStyle>
);
