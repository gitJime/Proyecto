import '../Estilos/Login.css'
import bgImage from '../Images/fondo2.jpg'; // Importa la imagen de fondo

function PagRegistro() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
            }}
        >
            {/* Lado Izquierdo: Formulario de Inicio de Sesión */}
            <div
                style={{
                    flex: 1, // Ocupa 50% del espacio disponible
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo oscuro para el formulario
                    position: 'relative', // Agrega posición relativa para permitir la posición absoluta del letrero
                }}
            >
                <div className="contenedor">
                    <div className="formulario">
                        <h2>Registrate</h2>
                        <button className="button-google" style={{ width: '80%', marginBottom: '20px' }}>Registrarme con Google</button>
                        <div className="input-contenedor">
                            <input type="text" id="username" style={{ width: '80%', marginBottom: '20px' }} />
                            <label htmlFor="username">Usuario</label>
                        </div>
                        <div className="input-contenedor">
                            <input type="password" id="password" style={{ width: '80%', marginBottom: '20px' }} />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <div className="input-contenedor">
                            <input type="password" id="password" style={{ width: '80%', marginBottom: '20px' }} />
                            <label htmlFor="password">Confirmar Contraseña</label>
                        </div>
                        <div className="olvidar">
                            
                     </div>
                        <div>
                            <button className="button" style={{ width: '80%' }}>Registrarme</button>
                        </div>
                    </div>
                </div>
                {/* Letrero de Marca Registrada */}
                <div style={{ position: 'absolute', bottom: '50px', left: '40%', transform: 'translateX(-50%)', color: '#888', fontSize: '12px' }}>
                    &copy; 2024 Nombre de tu empresa. Todos los derechos reservados.
                </div>
            </div>
            {/* Lado Derecho: Imagen de Fondo */}
            <div
                style={{
                    flex: 1, // Ocupa 50% del espacio disponible
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </div>
    );
}

export default PagRegistro;
