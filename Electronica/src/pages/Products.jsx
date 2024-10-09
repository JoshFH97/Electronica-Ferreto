import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';

const ProductSection = () => {
  const [filter, setFilter] = useState({
    title: '',
    minPrice: '',
    maxPrice: '',
    display: '',
    cameras: '',
    zoom: '',
    capacities: ''
  });

  // Maneja los cambios en los campos de filtro
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  };

  // Maneja la aplicación de los filtros (puedes personalizar esta función según tus necesidades)
  const applyFilters = () => {
    console.log('Filtros aplicados:', filter);
    // Aquí puedes agregar la lógica para filtrar datos según los valores de `filter`
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Navbar />
      <div className="container py-5">
        {/* Sección de Filtros */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filtrar Productos</h5>
                <form className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="filterTitle" className="form-label">Título</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterTitle"
                      name="title"
                      value={filter.title}
                      onChange={handleFilterChange}
                      placeholder="Buscar por título"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="filterMinPrice" className="form-label">Precio Mínimo</label>
                    <input
                      type="number"
                      className="form-control"
                      id="filterMinPrice"
                      name="minPrice"
                      value={filter.minPrice}
                      onChange={handleFilterChange}
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="filterMaxPrice" className="form-label">Precio Máximo</label>
                    <input
                      type="number"
                      className="form-control"
                      id="filterMaxPrice"
                      name="maxPrice"
                      value={filter.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="filterDisplay" className="form-label">Pantalla</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterDisplay"
                      name="display"
                      value={filter.display}
                      onChange={handleFilterChange}
                      placeholder="Tipo de pantalla"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="filterCameras" className="form-label">Cámaras</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterCameras"
                      name="cameras"
                      value={filter.cameras}
                      onChange={handleFilterChange}
                      placeholder="Número de cámaras"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="filterZoom" className="form-label">Zoom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterZoom"
                      name="zoom"
                      value={filter.zoom}
                      onChange={handleFilterChange}
                      placeholder="Nivel de zoom"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="filterCapacities" className="form-label">Capacidades</label>
                    <input
                      type="text"
                      className="form-control"
                      id="filterCapacities"
                      name="capacities"
                      value={filter.capacities}
                      onChange={handleFilterChange}
                      placeholder="Capacidades del dispositivo"
                    />
                  </div>
                </form>
                <div className="text-end mt-3">
                  <button type="button" className="btn btn-primary" onClick={applyFilters}>
                    Aplicar Filtros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de la Sección de Filtros */}
      </div>

      <Cards/>


    </section>
  );
};

export default ProductSection;
