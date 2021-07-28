function TodoForm({addTodo}){

    //  const {addTodo} = props;
      //.4 Aqui creo una variable que pueda almacenar los valores y que vaya cambiando en base a lo que coloque el usuario
  
      const [value, setValue] = React.useState(''); // la variable value se inicia con un texto vacio
  
      //6. vamos tambien a crear una variable que va a ser el handler del submit
  
      const handleSubmit = e => {
          e.preventDefault(); 
          if(!value) return;
          addTodo(value);
          setValue(''); // una vez inyectada la nueva tarea, el valor del input se vuelve cero
      }
  
  
      return(
  
          <form onSubmit={handleSubmit}> 
              <input
                  type="text"
                  className="input"
                  value={value} 
                  placeholder="Add Todo..."
                  onChange={e => setValue(e.target.value)} 
              />
          </form>
  
  
      );
  }