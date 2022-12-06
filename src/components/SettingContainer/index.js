import Component from "../../core/Component";

export default class SettingContainer extends Component {
  template() {
    return `
        <select>
          <option>2글자</option>
          <option>3글자</option>
          <option>4글자</option>
        </select>
        `;
  }
}
