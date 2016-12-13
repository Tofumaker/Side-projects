class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      arr: [],
      sorted: false
    }
  }

  componentDidMount(){
    this.setState({
      arr: this.props.arr
    })
  }

  bubbleSort(){
    $.ajax({
      url: '/searches/sort',
      method: "get",
      data: {arr: this.state.arr}
    }).done((response) => {
      this.setState({
        arr: response.arr,
        sorted: response.sorted
      })
    })
  }

  render(){
    return(
      <div>
        <div className = "row" onClick={(event) => this.bubbleSort(event)}>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[0]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[1]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[2]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[3]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[4]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[5]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[6]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[7]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[8]} </div>
          <div className = "col s1 m1 l1 search-array-block z-depth-1"> {this.state.arr[9]} </div>
        </div>
        <div className = "row">
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img className = "crossed-arrows" src = "crossed_arrows.png"/></div>
        </div>
      </div>
    )
  }


}
