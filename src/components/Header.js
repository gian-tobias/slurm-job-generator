import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>saliksik slurm job generator</h1>
        <div className="externalSites">
          <ul>
            <li>COARE</li>
            <li>Facebook</li>
            <li>Service Desk</li>
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
