class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>Budgetify</h1>
          <h2>Put your money in the hands of a computer</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button>How should I spend?</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      return (
        <div>
          Options component here
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    render() {
      return (
        <div>
          AddOption component here
        </div>
      );
    }
  }
  
  const jsx = (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  );
  
  ReactDOM.render(jsx, document.getElementById('app'));
  