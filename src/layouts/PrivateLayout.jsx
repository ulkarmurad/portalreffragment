import { Fragment } from "react";

export default function PrivateLayout({children}){
    return(
      <Fragment>
          <p style={{marginBottom: "50px"}}>Rendering On Private</p>
        <br/>
        <br/>
        {children}
      </Fragment>
    )
}