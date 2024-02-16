import MarcoLogo3 from '../img-fondo/MarcoLogo3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar la hoja de estilos de Bootstrap

function LogoBodyUno() {
  return (
    <div className="body">
      <div className="row">
        <div className="content fluid d-flex align-items-center justify-content-center">
          <div className="logo" style={{ 
            marginTop: '55%', // 100% del viewport height
            marginBottom: '5%' 
        }}>
            <img src={MarcoLogo3} alt="logo dj"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoBodyUno;
