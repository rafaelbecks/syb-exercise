import { css } from 'lit'

export const Styles = css`
  .main-area {
    background-color: #e5e5f7;
    background-color: #e5e5f7;
    background-image: linear-gradient(
        30deg,
        #7ba29e 12%,
        transparent 12.5%,
        transparent 87%,
        #7ba29e 87.5%,
        #7ba29e
      ),
      linear-gradient(
        150deg,
        #7ba29e 12%,
        transparent 12.5%,
        transparent 87%,
        #7ba29e 87.5%,
        #7ba29e
      ),
      linear-gradient(
        30deg,
        #7ba29e 12%,
        transparent 12.5%,
        transparent 87%,
        #7ba29e 87.5%,
        #7ba29e
      ),
      linear-gradient(
        150deg,
        #7ba29e 12%,
        transparent 12.5%,
        transparent 87%,
        #7ba29e 87.5%,
        #7ba29e
      ),
      linear-gradient(
        60deg,
        #7ba29e77 25%,
        transparent 25.5%,
        transparent 75%,
        #7ba29e77 75%,
        #7ba29e77
      ),
      linear-gradient(
        60deg,
        #7ba29e77 25%,
        transparent 25.5%,
        transparent 75%,
        #7ba29e77 75%,
        #7ba29e77
      );
    background-size: 160px 200px;
    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
    width: 100vw;
    height: 100vh;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    justify-content: center;
  }

  .main-area section {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 24px;
    display: flex;
    align-items: center;
    margin: 0 5px;
  }

  .main-area #history {
    width: 733px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 440px;
  }

  .main-area #playing {
    width: 400px;
    height: 440px;
    justify-content: center;
  }

  #playing {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .played__cover {
      border-radius: 16px;
      width: 248px;
      height: 247px;
      border: none;
      background-size: contain;
      -webkit-transition: all .5s ease-in-out;
      -moz-transition: all .5s ease-in-out;
      transition: all .5s ease-in-out;
    }

    header {
      margin: 20px 20px 0px 20px;
      text-align: center;
      width: -webkit-fill-available;
    }

    .song__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h2 {
        font-size: 18px;
        margin: 20px 0 0 0;
        line-height: 24px;
      }

      h3 {
        font-size: 16px;
        color: #99938f;
        margin: 0;
        font-weight: 300;
      }
    }
  }

  .played {
    width: 100%;
  }

  #history header {
    margin: 20px 20px 0px 20px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
  }

  header button {
    width: 45px;
    height: 45px;
    background-color: #f33440;
    border-radius: 100px;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 36px;
  }

  header div {
    display: flex;
  }

  header h2 {
    font-size: 20px;
    font-weight: 500;
  }

  .list {
    width: 100%;
    max-height: 350px;
    overflow-y: auto;
  }

  .played__row-template {
    background: #fff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin: 5px 20px;
  }

  .played__row-template img {
    width: 84px;
    border-radius: 16px;
  }

  .played__title__artists {
    margin: 0px 15px;
  }

  .played__title__artists h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 24px;
  }

  .played__title__artists span {
    font-size: 12px;
    font-weight: 300;
    color: #99938f;
  }

  .played__title__artists h3 {
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    color: #99938f;
    margin: 0;
  }


  @media screen and (max-width: 960px) {

    .main-area {
      flex-direction: column;
      height: auto;
    }

    .main-area #history, .main-area #playing {
      width: 90%;
      margin: 20px;
    }

  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #f33440;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
