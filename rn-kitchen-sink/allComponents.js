// import { StackNavigator } from 'react-navigation';
// import {
//   createStackNavigator,
//   createAppContainer
// } from 'react-navigation';
import { createStackNavigator } from 'react-navigation'

// import Home from './components/Home';
import RnIndex from './components/RnIndex';
// import WebIndex from './components/WebIndex';
import {
  UIVIEWS,
  UICONTROLS,
  OTHERS,
  UIBARS
} from './demoList';

const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});

const scenes = {
  // Home: {
  //   screen: Home,
  //   navigationOptions: getOptions('Ant Design Mobile'),
  // },
  // web: {
  //   screen: WebIndex,
  //   navigationOptions: getOptions('Antm Web Component'),
  // },
  native: {
    screen: RnIndex,
    navigationOptions: getOptions('popui'),
  },
};

[...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default;
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.title),
  };
});

// const MainNavigator = createStackNavigator(scenes);
// const App = createAppContainer(MainNavigator);
const App = createStackNavigator(scenes);

export default App;
