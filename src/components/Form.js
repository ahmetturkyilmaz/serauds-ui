import React, {useState} from 'react';

export function Form(props) {
  const [text, setText] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    let distance = +text;
    console.log("distance", distance)
    props.onSubmit(distance);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
          <div className="form-control-plaintext">Sera Id</div>
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
          <input type="text" value={text} className="form-control" onChange={event => setText(event.target.value)}
                 placeholder="Password"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Confirm</button>
        </div>
      </div>
    </form>
  )
}
