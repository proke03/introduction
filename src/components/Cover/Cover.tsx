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
            <h4>FRONT-END DEVELOPER</h4>
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
  margin-bottom: 72px;
  height: 785px;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;

  div.section__content{
    margin: 0 auto;
    width: 1140px;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    div.section__container{
      div.section__container-name{
        padding: 30px 40px 30px 0;

        div.section__container-name-bar{
          display: block;
          width: 456px;
          height: 20px;
          background-color: #f1c50e;
        }

        h2{
          margin: 18px 0;
          font-size: 3.75rem;
        }
      }

      .section__container-name-bar:nth-child(1){
        margin-top: 150px;
      }

      .section__container-name-bar:nth-child(3){
        margin-bottom: 201px;
      }

      div.section__container-info{
        padding: 30px 40px 30px 0;

        h4{
          margin: 18px 0 0;
          font-size: 1.25rem;
          letter-spacing: 2px;
          font-weight: 700;
        }

        hr{
          margin: 23px auto 0 0;
          width: 489px;
          border: 1px solid black;
        }

        p{
          margin: 20px 0 0;
          font-size: 1rem;
          line-height: 1.6;
        }
      }
    }

    div#profile_image{
      min-height: 785px;
      background-image: url("/profile.jpg");
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`;
