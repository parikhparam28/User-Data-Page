import react from 'react'
import {Buttons,Card} from './Components/index'


class App extends react.Component
{
  
  state = {
    UserId : null,
  }

  onClickFetchUser = (id) => {
    this.setState({UserId : id});
  }

  render () 
  {
    return (
      <div>
        {this.state.UserId===null ? null : <Card Id={this.state.UserId}/>}
        <Buttons onClickFetchUser={this.onClickFetchUser} />
      </div>
    )
  }
}

export default App;
