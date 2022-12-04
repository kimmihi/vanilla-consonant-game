import { observe } from "./observer";

export default class Component {
  $state;
  $target;
  $props;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    observe(() => {
      this.render();
      this.componentDidMount();
    });
  }

  componentDidMount() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
