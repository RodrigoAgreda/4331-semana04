import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header>
        </Header>
        <body>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Main></Main>
                        <h1>Misión:</h1>
                        <p>¡Nos enfocamos en conseguirles hogar a estos malditos rebeldes! <br/> ¡Nos ayudarias mucho con tu apoyo!</p>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </div>
            </div>
            
        </body>

        <Footer>

        </Footer>
    </StrictMode>
);