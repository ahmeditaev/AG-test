import React, {useState} from 'react';
import CardItem from "./../kit/components/card-item";
import CustomSelect from "./../kit/components/select";
import Checkbox from "./../kit/components/checkbox";
import MultiRangeSlider from "./../kit/components/multi-range-slider";
import './App.scss';
import SidebarSection from '../kit/components/sidebar-section';
import Button from '../kit/components/button';

interface Props {

}

const App: React.FC<Props> = (props: Props) => {
  const [checkboxState, setState] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="sidebar">
            <SidebarSection title="City">
              <CustomSelect/>
            </SidebarSection>
            <SidebarSection title="Categories">
              <ul className="category-list">
                <li className="category-list__item">
                  <Checkbox
                    id="test"
                    isChecked={checkboxState}
                    label="Business"
                    numberValue="11"
                    onClick={() => setState(!checkboxState)}
                  />
                </li>
              </ul>
            </SidebarSection>
            <SidebarSection title="Price">
              <div className="price-wrap">
                <MultiRangeSlider/>
                <Button
                  className="filter-button"
                  title="Filter"
                  onClick={() => console.log('check')}
                />
              </div>
            </SidebarSection>
          </div>
          <div className="main">
            <div className="card-list">
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
