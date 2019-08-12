import React, { useRef, useEffect, useState } from 'react';
import { func, number as num } from 'prop-types';
import { MDCTabBar } from '@material/tab-bar';

const TabBar = ({
  activeIndex = 0,
  onChange = () => {},
  ...props
}) => {
  const ref = useRef();
  const [tabBar, setTabBar] = useState();

  useEffect(() => {
    const mdcTabBar = new MDCTabBar(ref.current);
    mdcTabBar.listen('MDCTabBar:activated', ({ detail }) => onChange(detail));
    if (activeIndex !== null) {
      mdcTabBar.activateTab(activeIndex);
    }

    setTabBar(mdcTabBar);
  }, []);

  useEffect(() => {
    if (tabBar && activeIndex !== null) {
      tabBar.activateTab(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="mdc-tab-bar" role="tablist" ref={ref}>
      <div className="mdc-tab-scroller">
        <div className="mdc-tab-scroller__scroll-area">
          <div className="mdc-tab-scroller__scroll-content" {...props} />
        </div>
      </div>
    </div>
  );
};

TabBar.propTypes = {
  activeIndex: num,
  onChange: func,
};

export default TabBar;
