import React from "react";
import s from "./Hero.module.scss";
import logo from "../../assets/lo.png";
import telega from "../../assets/loggo.png";
import geo from "../../assets/geo.png";
import f from "../../assets/f.png";
import ContactBlock from "../Contact/Contact";
const Hero = () => {
  return (
    <div className={s.background}>
      <div className={s.hero}>
        <div className={s.hero_dev}>
          <div className={s.hero_dev_logo}>
            <img src={logo} alt="logo" />
            <p>Производитель одежды ОПТом</p>
          </div>
          <div className={s.hero_dev_head}>
            <div className={s.hero_dev_head_one}>
              <h1>БЛУЗКИ И РУБАШКИ</h1>
              <div className={s.hero_dev_head_one_btn}>
                <button>Женские</button>
                <button>Мужские</button>
                <button>Подростковые</button>
              </div>
            </div>
            <div className={s.hero_dev_head_two}>
              <h1>ЮБКИ БРЮКИ ПИДЖАКИ</h1>
              <div className={s.hero_dev_head_two_btn}>
                <button>и другие изделия из костюмной ткани</button>
              </div>
            </div>
          </div>
          <div className={s.hero_dev_desc}>
            <div className={s.hero_dev_desc_head}>
              <h2>Качество за счет узкой специализации:</h2>
            </div>
            <div className={s.hero_dev_desc_section}>
              <p>Отработанные лекала = правильная посадка изделий</p>
              <p>Аккуратный крой лазерным аппаратом</p>
              <p>В наличии все спецмашинки для производства рубашек</p>
              <p>Идеально ровные воротники, манжеты и карманы</p>
              <p>На каждую партию - ТЗ, спецификации, акты</p>
            </div>
          </div>
          {/* <div className={s.hero_dev_button}>
          <button>
            <img src={telega} alt="telega" />
            <p>ПОДПИСАТЬСЯ</p>
          </button>
        </div> */}
        </div>
        <div className={s.hero_right}>
          <div className={s.hero_right_deo}>
            <div className={s.hero_right_geo}>
              <img src={geo} alt="geo" />
              <p>КЫРГЫЗСТАН</p>
            </div>
            <div className={s.hero_right_name}>
              <h1>ЗАМИРБЕК ШАМШИЕВ</h1>
            </div>
            <div className={s.hero_right_exp}>
              <p>
                Владелец швейного <br /> цеха в Бишкеке с 2015г
              </p>
              <p>
                Со-владелица ФФ <br />
                и консалтинга по МП в <br />
                Москве
              </p>
              <p>
                Образование и опыт: <br />
                Американский Университет в ЦА <br />
                Университет Гронинген, Нидерланды <br />
                АНО «НИИДПО», Москва
                <br />
                10л работы в ООН и иных МО
              </p>
            </div>
            <div className={s.hero_right_deo_quote}>
              {/* <img src={f} alt="quote" /> */}
              {/* <p>
                "Независимо от сложности изделия, мы гарантируем соблюдение
                высоких стандартов качества и сроков, указанных в договоре. Наше
                производство всегда обеспечивает надежность и точность в
                выполнении ваших заказов."
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className={s.contact_block}>
        <ContactBlock />
      </div>
    </div>
  );
};

export default Hero;
