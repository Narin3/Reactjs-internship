const initialState = {
  Name: '',
  Surname: '',
  Email: '',
  Address: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_FORM_UPDATE':
     return [
       ...state,
       {
         [action.key]: action.value
       }
     ]

    default:
      return state;

  }
}

export default registerReducer
