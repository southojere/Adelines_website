import React from "react";

export default ({ close }) => (
            <div className="menu">
            <ul>
              <li onClick={close}>Home</li>
              <li onClick={close}>About me</li>
              <li onClick={close}>Projects</li>
              <li onClick={close}>Twitter</li>
              <li onClick={close}>Instagram</li>
              <li onClick={close}>LinkedIn</li>
            </ul>
          </div>
        );
