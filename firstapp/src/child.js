import './child.css';
import img from './logo.svg'

function Child() {
    console.log("Hello from component page");
    return (
        <div className='child'>
            This is Fatima Alaa from the child page
            <center>
                <img src={img} className='imgC' alt='img'></img>
            </center>
        </div>
    );
}

export default Child;
