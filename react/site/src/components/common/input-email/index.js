import { Div } from "./styled";

export default function login() {
    return (
        <Div>
            <div className="email">
                <input type="text" placeholder="Email"></input>
            </div>
        </Div>
    );
}