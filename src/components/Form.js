import React from 'react'

const Form = () => {
    return (
        <div>
            <h6>Please fill your details</h6>
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate"/>
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
      <div className="row">
          <button className="btn waves-effect waves-teal">Submit</button>
      </div>
    </form>
  </div>
        </div>
    )
}

export default Form