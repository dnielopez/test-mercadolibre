class model_class {

  /*
  * Set / get dispatch needs init in app root 
  */
  dispatch = null
  get_dispatch = () => this.dispatch == null ? false : this.dispatch
  set_dispatch = (n_dispatch) => { this.dispatch = n_dispatch }    
  /* End dispatch set */

  setData = (label, payload) => {
    this.dispatch({type: 'SET_STORE', label, payload})
  }

  resetData = () => {
    this.dispatch({type: 'RESET_DATA'})
  }

  updateAlerts = (payload) => {
    this.dispatch({type: 'UPDATE_ALERT', payload})
  }

}

export default new model_class();