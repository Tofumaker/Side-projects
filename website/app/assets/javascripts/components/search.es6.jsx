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
      <div onClick={(event) => this.bubbleSort(event)}>
        <span className = "search-array-block z-depth-1"> {this.state.arr[0]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[1]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[2]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[3]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[4]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[5]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[6]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[7]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[8]} </span>
        <span className = "search-array-block z-depth-1"> {this.state.arr[9]} </span>
      </div>
    )
  }


}
