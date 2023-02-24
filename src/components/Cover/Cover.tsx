import styled from '@emotion/styled';

export default function Cover() {
  return (
    <StyledWrapper>
      <div className="section__content">
        <div className="section__container">
          <div className="section__container-name">
            <div className="section__container-name-bar" />
            <h2>Min Jang</h2>
            <div className="section__container-name-bar" />
          </div>
          <div className="section__container-info">
            <h3>FRONT-END DEVELOPER</h3>
            <hr />
            <p>
              Email: jangmin.dev@gmail.com
              <br />
              Github: https://github.com/proke03
            </p>
          </div>
        </div>
        <div id="profile_image" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 1140px;
  height: 785px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 1199px) {
    width: 940px;
    height: 666.19px;
  }

  @media (max-width: 991px) {
    width: 720px;
    height: 554.19px;
  }

  @media (max-width: 767px) {
    width: 540px;
    height: fit-content;
  }

  @media (max-width: 575px) {
    width: 340px;
  }

  div.section__content{
    margin: 0 auto 72px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      height: fit-content;
      display: flex;
      flex-direction: column;
    }

    div.section__container{
      width: 50%;
      @media (max-width: 767px) {
        width: 100%;
      }
      div.section__container-name{
        height: calc(100% - 290px);
        div.section__container-name-bar{
          display: block;
          width: 456px;
          height: 20px;
          background-color: ${(props) => props.theme.colors.primary};

          @media (max-width: 1199px) {
            width: 430px;
          }

          @media (max-width: 991px) {
            width: 330px;
          }

          @media (max-width: 575px) {
            width: 100%;
          }
        }

        h2{
          margin: 18px 0;
          font-size: 3.75rem;
        }
      }

      .section__container-name-bar:nth-child(1){
        margin-top: 150px;
      }

      div.section__container-info{
        h3{
          margin: 18px 0 0;
          font-size: 1.25rem;
          letter-spacing: 2px;
          font-weight: 700;
        }

        hr{
          margin: 23px auto 0 0;
          width: 489px;
          border: 1px solid ${(props) => props.theme.colors.text};

          @media (max-width: 1199px) {
            width: 430px;
          }

          @media (max-width: 991px) {
            width: 330px;
          }
        }

        p{
          margin: 20px 0 0;
          font-size: 1rem;
          line-height: 1.6;

          @media (max-width: 767px) {
            margin-bottom: 20px;
            width: 330px;
          }
        }
      }
    }

    div#profile_image{
      width: 50%;
      background-image: url("/profile.webp");
      background-size: cover;
      background-position: 50% 50%;

      @media (max-width: 1199px) {
        height: 100%;
      }

      @media (max-width: 767px) {
        width: 100%;
        height: 744px;
      }

      @media (max-width: 575px) {
        height: 468px;
      }
    }
  }
`;
