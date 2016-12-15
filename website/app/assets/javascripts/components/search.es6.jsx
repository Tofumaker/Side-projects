class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      arr: [],
      sorted: false,
      swapPosition: "",
      arrowArray: ["none","none", "none", "none", "none", "none", "none", "none", "none", "none"]
    }
  }

  componentDidMount(){
    this.setState({
      arr: this.props.arr
    })
  }

  bubbleSort(){
    if (this.state.sorted == true){
      alert("Array Sorted!")
    }
    else {
      $.ajax({
        url: '/searches/sort',
        method: "get",
        data: {
                arr: this.state.arr,
                swapPosition: this.state.swapPosition
              }
      }).done((response) => {
        this.setState({
          arr: response.arr,
          sorted: response.sorted,
          swapPosition: response.swapPosition,
          arrowArray: response.arrow_array
        })
      })
    }

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
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[0]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[1]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[2]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[3]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[4]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[5]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[6]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[7]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
          <div className = "col s1 m1 l1 arrows-container"><img style = {{"display" : this.state.arrowArray[8]}} className = "crossed-arrows" src = "crossed_arrows.png"/></div>
        </div>
      </div>
    )
  }

}
