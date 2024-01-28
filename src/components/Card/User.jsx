import { Component } from "react";


export default class User extends Component{
    constructor(props){
        super(props)
        this.state = {eded: 1, users: [], userID: null, cards: []}
        this.handleClick = this.handleClick.bind(this)
        this.removeElement = this.removeElement.bind(this)
    }

    handleClick(){
        this.setState((prev) => ({...prev, eded: prev.eded + 1}))
        console.log(this.state.eded)
    }

    removeElement(id){
      this.setState((prev) => ({...prev, userID: id}), () =>{
        this.fetchCard()
      })
    }

    async downloadData(){
      const data = await fetch("https://fakestoreapi.com/users")
      const response = await data.json()
      this.setState((prev) => ({...prev, users: response}))

    }
    async fetchCard(){
     if(this.state.userID){
      const data = await fetch("https://fakestoreapi.com/carts")
      const response = await data.json()
      const filtered = response.filter((el) => el.userId == this.state.userID).map(el => el.products).flat()
      this.setState((prev) => ({...prev, cards: filtered}))
     }

    }

    componentDidMount(){
      this.downloadData()
      console.log("DOM-a yerlesdi")
    }
    componentDidUpdate(){
      // this.fetchCard()
      console.log("komponent yenilendi")
    }

    // componentWillUnmount(){
    //   alert("Komponent Dom dan silindi")
    // }

    render(){
        return (
          <>
            {this.state.users.map((el) => {
              return (
                <div style={{border: "1px solid green"}} key={el.id} onClick={() => this.removeElement(el.id)}>
                  <p>{el.id}</p>
                  <p>{el.email}</p>
                  {el.id == this.state.userID ? <p> Card length {this.state.cards.length}</p> : null}
                </div>
              )
            })}
          </>
        )
    }
}