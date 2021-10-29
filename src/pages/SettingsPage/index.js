import React, { useEffect, useState } from 'react'
import { useFetch } from '../../helpers/useFetch';

const SettingsPage = () => {
  const [valueUsername, setValueUsername] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valuePhoneNumber, setValuePhoneNumber] = useState("");
  const [valueEmail, setValueEmail] = useState("");

  const { response } = useFetch({
    url: "/api/admin/get_user_details?user_id=f54acce4-c1be-11eb-9be1-0242ac110002",
    method: "GET",
    body: {}
  });

  useEffect(() => {
    if (response) {
      setValueUsername(response.user_name);
      setValuePassword(response.password);
      setValueFirstName(response.first_name);
      setValueLastName(response.last_name);
      setValuePhoneNumber(response.phone_number);
      setValueEmail(response.email);
    }
  }, [response])
  console.log("response settings", response)
  return (
    <div>
      <div className="settings">
        <h3 className="text-center">My Information</h3>
        <nav className="nav nav-tabs" role="tablist">
          <a id="uncontrolled-tab-example-tab-user" href="#" role="tab" data-rb-event-key="user" aria-controls="uncontrolled-tab-example-tabpane-user" aria-selected="true" className="nav-item nav-link active">My Information</a>
        </nav>
        <div className="tab-content">
          <div id="uncontrolled-tab-example-tabpane-user" aria-labelledby="uncontrolled-tab-example-tab-user" role="tabpanel" aria-hidden="false" className="fade tab-pane active show">
            <form className="mt-5">
              <div className="form-group">
                <label className="form-label" for="username">Username</label>
                <input
                  name="user_name"
                  type="username"
                  readonly=""
                  id="username"
                  className="form-control"
                  value={valueUsername}
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="password">Password</label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="form-control"
                  value={valuePassword}
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="first_name">First Name</label>
                <input
                  name="first_name"
                  type="first_name"
                  id="first_name"
                  className="form-control"
                  value={valueFirstName}
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="last_name">Last Name</label>
                <input
                  name="last_name"
                  type="last_name"
                  id="last_name"
                  className="form-control"
                  value={valueLastName}
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="phone_number">Phone Number</label>
                <input
                  name="phone_number"
                  type="phone_number"
                  id="phone_number"
                  className="form-control"
                  value={valuePhoneNumber}
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="email">Email</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="form-control"
                  value={valueEmail}
                />
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;
