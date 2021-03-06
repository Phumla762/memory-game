import React  from 'react';

// when the button is clicked (handleClick) will make this specific component ot be visible and go ot the next component of the game.
//at the beginning of the game the begin button to start game. 

 class NewGame extends React.Component {
     state = {};

handleChange = (e) => {
    this.setState({ name: e.target.value});
}

handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
};

render(){
    return (
        <div className="wrapper">
        <div className='login'>
            <form>
            <div className="form-group">
                <label>Name</label>
                <input
                type="name"
                className="form-control"
                onChange ={this.handleChange}
                />
                <small className='form-text text-muted'>
                    This is a memory game
                </small>
            </div>

            <button
            onClick={this.handleClick}
            className="btn btn-primary" >
                Begin
            </button>
            </form>
        </div>
        </div>
        );
        }
        }



export default NewGame;
