class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      arr: [],
      sorted: false
    }
  }


  componentDidMount(){
    $.ajax({
      url: '/searches/sort',
      method: "get"
    }).done((response) => {
      alert("hi")
      debugger
    })
  }

  render(){
    return(
      <div>
        <h1>THIS IS A TEST</h1>
      </div>
    )
  }
}
