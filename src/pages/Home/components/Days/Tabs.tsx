import React from "react";
import s from './Days.module.scss';
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { connect } from "react-redux";
import { getTabsData } from "../../../../redux/tabs-reduer";
interface Props {

}

const Tabs = (props: any) => {
    const tabs = [
        {
            value: 'Почасовой', key: 'hours',
        },
        {
            value: 'На неделю', key: 'week',
        },
    ]
    return (
      <div className={s.tabs}>
        <div className={s.tabs_wrapper}>
          {tabs.map((tab) => {
            return (
              <div className={s.tab} key={tab.key} onClick={() => props.getTabsData(tab.key)}>
                {tab.value}
              </div>
            );
          })}
        </div>
        <div className={s.cancel}>Отменить</div>
      </div>
    );
}

export default connect(null, {getTabsData})(Tabs)