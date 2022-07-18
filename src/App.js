import React from 'react';
class Bookings extends React.Component {
  state = {
    list: [],
    pax: '',
    price: '',
    tot: ''
  };

  // Función que captura el valor de los inputs
  // para setearlo en su respectivo estado
  // Para este caso: tour, pax y price
  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  // Esta función se ejecutará al momento de darle click al botón de "Agregar"
  handleSubmit = event => {
    const { pax, price, list } = this.state;

    // Simple validación para que tour, pax y price sean campos requeridos
    if ( pax && price) {
      const id = list.length + 1;
      var arreglo = this.state.data;
      const tot =  pax/price;
      // En los states se agrega un nuevo objeto a "list"
      // y se reinicia el estado de tour, pax y price
      this.setState({
        list: [...list, { id, pax, price, tot }],
        
        pax: '',
        price: ''

      });
    } else {
      // Si alguno de los inputs se encuentra vacio
      // se mostrará el siguiente mensaje en la consola del navegador
      console.log('Please complete all fields');
    }

    // Para que no se refresque la página por el onSubmit del formulario
    event.preventDefault();
  };
  eliminar = () => {
    var opcion = true;
    //var opcion = window.confirm("Estás seguro que deseas eliminar los elementos de la lista ");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state;
          arreglo.splice(contador, 1);
        
        contador++;
      
      this.setState({ state: false });
    }
  };
  render() {
    const { pax, price, list, tot } = this.state;
    return (
      <>
        <div className="inputs_tours">
          <form onSubmit={this.handleSubmit} className="form_tours">
            <div className="form-group">
              <label htmlFor="pax">
                <h5>Ingrese el valor de la distancia:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="pax"
                  placeholder="Ingrese la distancia"
                  name="pax"
                  value={pax}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="form-group room">
              <label htmlFor="price">
              <h5>Ingrese el valor del tiempo:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="Ingrese el tiempo"
                  name="price"
                  value={price}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="pax_btn">
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
              
            </div>
          </form>
        </div>
        <br></br>
        <div className="table_tours">
          <table className="table table-dark">
            <thead>
              <tr>
                
                <th scope="col">Distancia</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr key={item.id}>
                  <td>{item.pax}</td>
                  <td>{item.price}</td>
                  <td>{item.tot}</td>
                  
                </tr>
              ))}
              
            </tbody>
            
          </table>
          
        </div>
        
              <button className='btn btn-danger' onClick={()=> this.eliminar()}>Eliminar</button>
              
      </>
    );
  }
}

export default Bookings;