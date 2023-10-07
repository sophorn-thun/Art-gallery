import Tabs from '../../components/Tab/Tabs';
import Tab from '../../components/Tab/Tab';
import Footer from '../../components/Footer/Footer';

import styles from './About.module.css';

function About() {
  return (
    <div className={styles['about-page']}>
      <h2 className={styles['about-title']}>Virtual Art Gallery Project</h2>
      <div className={styles['about-tab']}>
        <Tabs>
          <Tab title="About">
            This art gallery web application is a front-end project using a third-party API from the
            Chicago Art Institute. With this application, you can search various types of artwork,
            including painting, sculpture, and print. Moreover, you can even save artwork of your
            favorite after successfully logging in.
          </Tab>
          <Tab title="Features">
            Key features consist of searching, sorting, filtering and for logged in users, saving OR
            removing artwork. Responsiveness for mobile phone, tablet and laptop as well as
            user-friendly and modern interface are taken into careful consideration when building
            this web application.
          </Tab>
          <Tab title="Tech-stack">
            One of the requirements of the project is to build the application without using any
            external libraries except react-router-dom. Therefore, tech stack include React.js,
            Typescript.js and CSS. The application makes use of module CSS to avoid naming-styling
            conflict.
          </Tab>
        </Tabs>
        <div className={styles['about']}>
          <img
            className={styles['about-img']}
            src={
              'https://media2.giphy.com/media/YP8cMb7FQLpTPa4xbE/giphy.gif?cid=ecf05e47h2zc3fe5w9s1zxl0ya49a2fprt3tehrt6r9yer19&ep=v1_gifs_related&rid=giphy.gif&ct=g'
            }
          />
        </div>
      </div>
      <div className={styles['footer']}>
        <Footer>React and Typescript project by Sophorn THUN.</Footer>
      </div>
    </div>
  );
}

export default About;
