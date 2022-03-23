import { Component } from 'react';
import './App.css';
import TranslationsOptions from './components/translation-option';
import Translations from './components/translation-tool';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
import Main from './components/main-trans';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Home'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }
  render() {
    return (
    <div className="App">
       <p className='title'>Home / Translations</p>
       <div className='cont'>
        <Translations/>
        <TranslationsOptions isMulti={true}/>
        <hr/>
        <TabNav tabs={['Add Translation', 'Approved', 'Non-Approved', 'Search']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Add Translation' }>
           <Main/>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Approved' }>
            <p>Some test text</p>
            
          </Tab>
          <Tab isSelected={ this.state.selected === 'Non-Approved' }>
            <ul>
              <li>List test 1</li>
              <li>List test 2</li>
              <li>List test 3</li>
            </ul>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Search' }>
            <h3>Search</h3>
          </Tab>
        </TabNav>
       </div>

    </div>
    );
  }
}

export default App;
