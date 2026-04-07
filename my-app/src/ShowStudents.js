function Show(){
    const names = ['Olha', 'Bohdan', 'Kateryna', 'Oksana'];
    return (<ul className="list">{names.length === 0 ? "There aren't students" : names.map(name => <li key={name}>{name}</li>)}</ul>);
}

export default Show;
