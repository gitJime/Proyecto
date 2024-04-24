import '../Estilos/PerfilUsuario.css'
import '../Estilos/PerfilUsuario-svc.css'
import image from '../img/testimonial-1.jpg'

function PerfilUsuario() {
  return (
    <div className="container-fluid px-2 px-md-4">
      <div className="page-header min-height-300 border-radius-xl mt-4" >
        <span className="mask bg-gradient-primary opacity-6"></span>
      </div>
      <div className="card card-body mx-3 mx-md-4 mt-n6">
        <div className="row gx-4 mb-2">
          <div className="col-auto">
            <div className="avatar avatar-xl position-relative">
              <img src={image} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
            </div>
          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">
                Richard Davis
              </h5>
              <p className="mb-0 font-weight-normal text-sm">
                CEO / Co-Founder
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
            <div className="nav-wrapper position-relative end-0">
              <ul className="nav nav-pills nav-fill p-1" role="tablist">
                <li className="nav-item">
                  <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="true">
                    <i className="material-icons text-lg position-relative">home</i>
                    <span className="ms-1">App</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                    <i className="material-icons text-lg position-relative">email</i>
                    <span className="ms-1">Messages</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                    <i className="material-icons text-lg position-relative">settings</i>
                    <span className="ms-1">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Additional Content Here */}
        </div>
      </div>
      <footer className="footer py-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                made with <i className="fa fa-heart"></i> by
                <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="material-icons py-2">settings</i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Material UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="material-icons">clear</i>
              </button>
            </div>
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            <div className="row">
              <div className="col-md-6 mb-3">
                <small>Filter colors</small>
                <div className="d-flex justify-content-start mt-1">
                  <button className="btn bg-gradient-primary" data-color="primary" title="primary"></button>
                  <button className="btn bg-gradient-info" data-color="info" title="info"></button>
                  <button className="btn bg-gradient-success" data-color="success" title="success"></button>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <small>Filter variants</small>
                <div className="d-flex justify-content-start mt-1">
                  <button className="btn bg-gradient-primary" data-color="primary" title="primary"></button>
                  <button className="btn bg-gradient-info" data-color="info" title="info"></button>
                  <button className="btn bg-gradient-success" data-color="success" title="success"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
