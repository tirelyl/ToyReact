import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return <div>
      <span>hello</span>
      <span>world</span>
      <span>~</span>
      <div>
        { this.children }
      </div>
    </div>;
  }
}

let a = <div>
  <MyComponent name="a" id="ida">123</MyComponent>
</div>
console.log(a);

ToyReact.render(a, document.body);
