import { render,screen } from "@testing-library/react";
import Logout from './Logout';

import {BrowserRouter} from 'react-router-dom';

const MockLogout = ()=>{
    return(
        <BrowserRouter>
            <Logout/>
        </BrowserRouter>
    )
}

test("",()=>{
    render(<MockLogout/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})