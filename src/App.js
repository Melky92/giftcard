import React,{Component} from 'react';
import './App.css';
import BackgroundDecoration from './lib/BackgroundDecoration.js';
import getAmount from './lib/getAmount.js'
import Config from './config.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      closedEnvExistence:false,
      closedEnv:false,
      openedEnvExistence:false,
      openedEnv:false,
      amount:"loading..."
    };
  }

  async componentDidMount(){

    this.setState({ amount: await getAmount() });

    setTimeout(() => {
      this.setState({
        closedEnvExistence:true,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        closedEnv:true,
      });
    }, 2000);
  }

  openEnvelope = () => {

    if(this.closedEnv === false) return;

    this.setState({
      closedEnv:false
    });

    setTimeout(() => {
      this.setState({
        closedEnvExistence:false,
        openedEnvExistence:true,
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        openedEnv:true
      });
    }, 2000);

  } 


  render(){
    return (
      <div className="App" onClick={ this.openEnvelope } >
        <header className="App-header">

            { this.state.closedEnvExistence && <div className={"bgEnvelope " + (this.state.closedEnv ?'fadeIn':'fadeOut') } >
                <br></br>
              <p>
                <br></br>
                {Config.Messages.ClosedEnv}
              </p>
            </div>}

            { this.state.openedEnvExistence && <div className={"bgGift " + (this.state.openedEnv ?'fadeIn':'fadeOut') }>
              <p>
                {Config.Messages.OpenEnv}
                <br></br>
                {this.state.amount}
              </p>
            </div>}

          <BackgroundDecoration/>
        </header>
      </div>
    );
  }

}

export default App;
