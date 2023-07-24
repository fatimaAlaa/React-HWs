function Students() {
    let names = ['Yamama ', 'Fatima ', 'Amina ', 'Ahesheh '];

    return (
        <div>
            <ul>
                {
                    names.map((name) => (
                        <li>
                            {name}
                            <button onClick={() => { alert(`Hi ${name}`); }}>
                                Say Hi to {name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Students;