/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


class Component<T> {
  constructor(public props: T) { 
this.props = props
  }

}

interface IPage {
  pageInfo: () => void 
}

class Page extends Component<{title:string}> implements IPage {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};