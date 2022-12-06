import Component from "./core/Component";
import SettingContainer from "./components/SettingContainer";

export default class App extends Component {
  componentDidMount() {
    const settingContainer = document.querySelector(".setting-container");

    new SettingContainer(settingContainer);
  }
  template() {
    return `<main>
        <section class="logo"></section>
        <section class="setting-container"></section>
        <section class="time-out-container"></section>
        <section class="input-container"></section>
        <section class="score-container""></section>
        </main>`;
  }
}
