function List() {
    const books = ['book 1', 'book 2', 'book 3']
    const users = [
      {id:1, name:'M'},
      {id:2, name:'H'},
      {id:3, name:'A'},
    ]
    return (
      <div>
            <ul>
                {books.map(item => <li key={item}>{item}</li>)}
                {users.map((user, index) => <li key={user.id}>{index + " - " + user.name}</li>)}
            </ul>
      </div>
    );
  }
  
export default List;