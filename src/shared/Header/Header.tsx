import React, { useEffect, useState } from "react";
import s from './Header.module.scss'
import { GlobalSvgSelector } from "../../assets/images/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";
import { connect } from "react-redux";
import { getCurrentData } from "../../redux/thisDay-reducer";

interface Props {}

interface IWeatherState{
  option: {}
} 

const Header = (props: any) => {



    const getWeather = (e:any) => {
      props.getCurrentData(e.value, e.label);
    }

    const themeObj = useTheme();
    const options = [
      { value: "Saint Petersburg", label: "Санкт-Петербург", },
      { value: "Moscow", label: "Москва",},
      { value: "Novgorod", label: "Новгород" },
      { value: "Paris", label: "Париж",},
      { value: "London", label: "Лондон",},
      { value: "New York", label: "Нью-Йорк",},
      { value: "Murmansk", label: "Мурманск",},
      { value: "Miami", label: "Маями",},
      { value: "Dubai", label: "Дубаи",},
      { value: "Tokio", label: "Токио",},
      { value: "Pekin", label: "Пекин",},
    ];

    // const [theme, setTheme] = useState('light');

    // const changeTheme = () => {
    //     setTheme(theme == 'light'? 'dark' : 'light');
    // }

      useEffect (() => {
        props.getCurrentData(options[0].value)
      }, [])


    const changeTheme = () => {
      themeObj.changeTheme(themeObj.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const colourStyles = {
        control: (styles:any) => ({
            ...styles,
            backgroundColor: themeObj.theme == Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '220px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
            fontSize: '20px'
        }),
        singleValue: (styles:any) => ({
            ...styles,
            color: themeObj.theme == Theme.DARK ? '#fff' : '#000'
        }),
        option: (styles:any) => ({
            ...styles,
            fontSize: '20px'
        })
    }
      
    // useEffect(() => {
    //   const root = document.querySelector(':root') as HTMLElement;

    //   const components = [
    //     "body-background",
    //     "components-background",
    //     "card-background",
    //     "card-shadow",
    //     "text-color",
    //   ]; 

    //   components.forEach((component)=>{
    //     root.style.setProperty(
    //         `--${component}-default`,
    //         `var(--${component}-${themeObj.theme})`
    //       );
    //   });
    // }, [themeObj.theme]);

    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSvgSelector id="header-logo"></GlobalSvgSelector>
          </div>
          <div className={s.title}>Weatheria</div>
        </div>
    <div className={s.wrapper}>
          <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme"></GlobalSvgSelector>
          </div>
          <Select defaultValue={options[0]} styles={colourStyles} options={options} onChange={e => getWeather(e)}></Select>

        </div>
      </header>
    );
}

const mapStateToProps = (state: any) => {
  return null;
};

const mapDispatchToProps = (dispatch: any) => {
  return null;
};

export default connect(mapStateToProps, {getCurrentData})(Header);