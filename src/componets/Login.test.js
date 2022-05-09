import { render,screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from 'react-router-dom';

const MockLogin = ()=>{
    return(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    )
};
describe("login tests",()=>{
    test("renders name link",()=>{

        render(<MockLogin/>);
       
        const nameElement = screen.getAllByRole("textbox");
        expect(nameElement.length).toBe(3);
    
    });
})


test("renders name link",()=>{

    render(<MockLogin/>);
   
    const nameElement = screen.getByText(/name/i);
    expect(nameElement).toBeInTheDocument();

});
