import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>saliksik slurm job generator</h1>
        <div className="externalSites">
          <ul>
            <li>
              <a href="https://asti.dost.gov.ph/coare/servicedesk/pages/UI.php">
                User Portal
              </a>
            </li>
            |
            <li>
              <a href="https://www.facebook.com/coare.project">Facebook</a>
            </li>
            |
            <li>
              <a href="https://slurm.schedmd.com/documentation.html">Slurm</a>
            </li>
          </ul>
        </div>
      </header>
      <hr />
      <p>
        A Slurm job script generator configured for the COARE facility's compute
        cluster, saliksik
      </p>
    </React.Fragment>
  );
};
