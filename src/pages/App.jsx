import { Container, Athlets, Players } from "./styles";
import { Content, Carousel } from "../component";
import FootballerMobile from "../assets/footballer/footballer-mobile.png";
import FootballerTablet from "../assets/footballer/footballer-tablet.png";
import FootballerDesktop from "../assets/footballer/footballer-desktop.png";
import BasketballMobile from "../assets/basketball/basketball-mobile.png";
import BasketballTablet from "../assets/basketball/basketball-tablet.png";
import BasketballDesktop from "../assets/basketball/basketball-desktop.png";
import { colors } from "../constants/color";

function App() {
  return (
    <Container>
      <Athlets>
        <h1>ATHLETS</h1>
        <picture className="img-football">
          <source media="(min-width:1920px)" srcSet={FootballerDesktop} />
          <source media="(min-width:768px)" srcSet={FootballerTablet} />
          <img src={FootballerMobile} alt="Football" loading="lazy" />
        </picture>
        <Carousel className="athlets-content-carousel">
          <Content
            className="athlets-content-1"
            title="CONNECTION"
            number="01"
            underline="line-1"
            description="Connect with coaches directly, you can ping coaches to view profile."
            style={{
              backgroundColor: colors.white,
              height: 119,
            }}
          />
          <Content
            className="athlets-content-2"
            title="COLLABORATION"
            number="02"
            description="Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
            style={{
              backgroundColor: colors.gray,
              height: 175,
            }}
          />
          <Content
            className="athlets-content-3"
            title="GROWTH"
            number="03"
            fontColor={colors.white}
            description="Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc "
            style={{
              backgroundColor: colors.violet_200,
              height: 120,
            }}
          />
        </Carousel>
      </Athlets>

      <Players>
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
            numberColor={colors.violet_300}
            description="Save your time, recruit proper athlets for your team."
            style={{
              backgroundColor: colors.navy,
              height: 122,
            }}
          />
        </Carousel>
      </Players>
    </Container>
  );
}

export default App;
