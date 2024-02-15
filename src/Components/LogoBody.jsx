import LogoMarco4 from '../img-fondo/LogoMarco4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar la hoja de estilos de Bootstrap

function LogoBody() {
  return (
    <div className="body">
      <div className="row">
        <div className="content fluid d-flex align-items-center justify-content-center">
          <div className="logo" style={{ 
            marginTop: '15%', // 100% del viewport height
            marginBottom: '5%' 
        }}>
            <img src={LogoMarco4} alt="logo dj"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoBody;
