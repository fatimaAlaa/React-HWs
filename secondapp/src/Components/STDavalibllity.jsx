import '../CompomentsStyle/StdAvaliblity.css';

function STDavalibllity() {
    const names = [
        {
            name: 'Yamama',
            status: 'Here'
        },
        {
            name: 'Fatima',
            status: 'Not here'
        },
        {
            name: 'Amina',
            status: 'Not here'
        },
        {
            name: 'Aheshah',
            status: 'Here'
        }
    ]
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {
                    names.map((name) => (
                        <li>
                            <h4 style={{ color: name.status === 'Here' ? 'green' : 'red' }}>
                                {name.name}
                            </h4>
                            <p>
                                {name.status}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default STDavalibllity;