import React from 'react'
import logo from "../../assets/icons/logo_full.png"

const Reports = () => {
  return (
    <div>
      <nav className="mb-3 navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="active navbar-brand">
          <img alt="" src={logo} width="100" height="60" className="d-inline-block align-top" />
        </a>
        <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end navbar-collapse collapse">
          <div className="navbar-nav">
            <a href="/view_reports" data-rb-event-key="/view_reports" className="active nav-link">Reports</a>
            <a href="/offers" data-rb-event-key="/offers" className="nav-link">Offers</a>
            <a href="/payment" data-rb-event-key="/payment" className="nav-link">Payments</a>
            <a href="/settings" data-rb-event-key="/settings" className="nav-link">Settings</a>
            <a href="?#" className="nav-link" role="button">Logout</a>
          </div>
        </div>
      </nav>
      <div>
        <br />
        <br />
        <br />
        <div>
          <div>
            <div className="text-center card">
              <div className="card-header">
                <small className="text-muted">Session 5 -- 30/07/2021</small>
              </div><div className="card-body">
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img className="card-img" alt="" src="http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=e9db6a2e-0883-11ec-91ae-0242ac110002" style={{ width: "20rem" }} />
                </div>
                <div className="card-title h5" style={{ fontWeight: "bold" }}>-</div>
                <p className="card-text">-</p>
                <footer className="blockquote-footer">
                  Co-Teaching partner <cite title="Source Title"> Putri Rahmawati</cite>
                </footer>
                <button type="button" className="btn btn-info">Download Report</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Next Activity/Improvement Plan: -</small>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div className="text-center card">
              <div className="card-header">
                <small className="text-muted">Session 4 -- 30/07/2021</small>
              </div>
              <div className="card-body">
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img className="card-img" src="http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=68b87756-f687-11eb-b4f4-0242ac110002" alt="" style={{ width: "20rem" }} />
                </div>
                <div className="card-title h5" style={{ fontWeight: "bold" }}>-</div>
                <p className="card-text">-</p>
                <footer className="blockquote-footer">
                  Co-Teaching partner <cite title="Source Title"> Putri Rahmawati</cite>
                </footer>
                <button type="button" className="btn btn-info">
                  Download Report
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Next Activity/Improvement Plan: -</small>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div className="text-center card">
              <div className="card-header">
                <small className="text-muted">Session 3 -- 23/07/2021</small>
              </div>
              <div className="card-body">
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img
                    className="card-img"
                    src="http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=9a04b24c-ecec-11eb-8708-0242ac110002"
                    alt=""
                    style={{ width: "20rem" }}
                  />
                </div>
                <div className="card-title h5" style={{ fontWeight: "bold" }}>Wind Chimes</div>
                <p className="card-text">
                  Arumi mengeksplorasi berbagai jenis benda seperti sendok dan peralatan lain yang ditali menggunakan pita.
                </p>
                <footer className="blockquote-footer">
                  Co-Teaching partner <cite title="Source Title"> Putri Rahmawati</cite>
                </footer>
                <button type="button" className="btn btn-info">Download Report</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Next Activity/Improvement Plan: Arumi tampaknya dengan menyukai bermain connetix, maka pada pertemuan selanjutnya bisa disediakan untuk bermain ball drop.
                </small>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div className="text-center card">
              <div className="card-header">
                <small className="text-muted">Session 2 -- 16/07/2021</small>
              </div>
              <div className="card-body">
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img
                    className="card-img"
                    alt=""
                    src="http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=e5654fbc-e904-11eb-94fa-0242ac110002"
                    style={{ width: "20rem" }}
                  />
                </div>
                <div className="card-title h5" style={{ fontWeight: "bold" }}>
                  Tidak Hadir
                </div>
                <p className="card-text">-</p>
                <footer className="blockquote-footer">
                  Co-Teaching partner <cite title="Source Title"> Putri Rahmawati</cite>
                </footer>
                <button type="button" className="btn btn-info">Download Report</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Next Activity/Improvement Plan: -</small>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div className="text-center card">
              <div className="card-header">
                <small className="text-muted">Session 1 -- 09/07/2021</small>
              </div>
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <img
                    className="card-img"
                    alt=""
                    src="http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=1f3f6fb6-e8f0-11eb-8ce7-0242ac110002"
                    style={{ width: "20rem" }}
                  />
                </div>
                <div className="card-title h5" style={{ fontWeight: "bold" }}>Cooking Play</div>
                <p className="card-text">
                  Arumi mengeksplorasi berbagai jenis sayuran seperti kol, kentang, wortel dan brokoli untuk bermain masak-masakan, dimana dia potong bahan-bahan dan berpura-pura merebusnya di panci.
                </p>
                <footer className="blockquote-footer">
                  Co-Teaching partner <cite title="Source Title"> Putri Rahmawati</cite>
                </footer>
                <button type="button" className="btn btn-info">Download Report</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Next Activity/Improvement Plan:  Karena Arumi sangat menyukai roleplay jualan es krim, kita bisa ajak Arumi membuat es krim untuk pertemuan berikutnya.
                </small>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
