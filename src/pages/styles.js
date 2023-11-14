import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;

  .players-content-carousel {
    margin-top: -26px;
    padding: 41px 18px 60px 18px;

    .title {
      padding: 0 0 8px 0;
    }
  }
  .athlets-content-1,
  .athlets-content-3,
  .players-content-1,
  .players-content-3 {
    display: none;
  }

  .athlets-content-carousel,
  .athlets-content-2 {
    margin-top: -68px;
    padding: 82px 20px 62px 20px;

    .title {
      padding: 0 0 5px 0;
    }
  }

  .players-content-2 {
    margin-top: -26px;
    padding: 41px 18px 0 18px;

    .title {
      padding: 0 0 8px 0;
    }
  }

  picture {
    display: flex;
    z-index: 1;
    justify-content: center;
  }

  @media (min-width: 768px) {
    picture {
      position: absolute;
    }

    .img-football {
      top: 27px;
      left: 0px;
    }

    .img-basketball {
      top: -12px;
      right: 0px;
    }

    .athlets-content-1,
    .athlets-content-3 {
      display: flex;
      padding: 30px 0 30px 292px;
    }

    .athlets-content-2 {
      margin-top: 0px;
      padding: 30px 0 30px 292px;

      .title {
        padding: 0 0 10px 0;
      }
    }

    .players-content-1 {
      display: flex;
      margin-top: 45px;
      padding: 0 260px 22px 30px;

      .title {
        padding: 0 0 9px 0;
      }
    }

    .players-content-2 {
      display: flex;
      padding: 30px 260px 0 30px;

      .title {
        padding: 0 0 7.5px 0;
      }
    }

    .players-content-3 {
      display: flex;
      padding: 30px 260px 0 30px;

      .title {
        padding: 0 0 7.5px 0;
      }
    }
  }

  @media (min-width: 1920px) {
    picture {
      position: absolute;
    }

    .img-football {
      top: -42px;
      left: 175px;
    }

    .img-basketball {
      top: -80px;
      right: 125px;
    }

    .athlets-content-1 {
      display: flex;
      padding: 55px 0 30px 995px;
    }

    .athlets-content-2 {
      display: flex;
      margin-top: 0px;
      padding: 65px 180px 30px 995px;

      .title {
        padding: 0 0 10px 0;
      }
    }

    .athlets-content-3 {
      display: flex;
      padding: 60px 250px 60px 995px;
    }

    .players-content-1 {
      display: flex;
      margin-top: 45px;
      padding: 35px 870px 22px 330px;

      .title {
        padding: 0 0 9px 0;
      }
    }

    .players-content-2 {
      display: flex;
      padding: 55px 250px 0 330px;

      .title {
        padding: 0 0 7.5px 0;
      }
    }

    .players-content-3 {
      display: flex;
      padding: 60px 250px 20px 330px;

      .title {
        padding: 0 0 7.5px 0;
      }
    }
  }
`;
