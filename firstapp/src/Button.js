// export function

// import { navitem } from

import './Button.css'
function ButtonClick() {
    let count = 0;
    function counter() {
        count++;
        console.log(`Button clicked ${count} times.`);
    }
    return (
        <center>
            <button onClick={counter}>
                Click Me
            </button>
        </center>

    )
}
export default ButtonClick;
