import React, {useEffect, useState} from "react";
import {Header,HeaderJp} from "../components/header/Header";
import {Greeting,GreetingJp} from "./greeting/Greeting";
import {Skills,SkillsJp} from "./skills/Skills";
import {StackProgress,StackProgressJp} from "./skillProgress/skillProgress";
import {WorkExperience,WorkExperienceJp} from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import {StartupProject,StartupProjectJp} from "./StartupProjects/StartupProject";
import {Achievement,AchievementJp} from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import {Education,EducationJp} from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'; 


    
// eslint-disable-next-line
import 'swiper/swiper-bundle.min.css'

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };



  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <Router>
            <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Header />
                  <Greeting />
                  <Skills />
                  <StackProgress />
                  <Education />,
                  <WorkExperience />,
                  <Projects />,
                  <StartupProject />,
                  <Achievement />,
                  <Profile />,
                  <Footer />,
                  <ScrollToTopButton />
                </>
              )}
             />
            <Route
              path="/jp"
              element={(
                <>
                <HeaderJp />
                  <GreetingJp />
                  <SkillsJp />
                  <StackProgressJp />
                  <EducationJp />,
                  <WorkExperienceJp />,
                  <Projects />,
                  <StartupProjectJp />,
                  <AchievementJp />,
                  <Profile />,
                  <Footer />,
                  <ScrollToTopButton />
                </>
                )}
            />
            </Routes>
          </Router>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
