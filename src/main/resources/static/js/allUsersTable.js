$(async function() {
    await allUsersTable();
});
const table = $('#tbodyAllUserTable');
async function allUsersTable() {
    table.empty()
    fetch("http://localhost:8080/api/users")
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                let usersTable = `$(
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.surname}</td> 
                            <td>${user.city}</td> 
                            <td>${user.age}</td>                                               
                            <td>${user.username}</td>
                            <td>${user.roleSet.map(role => " " + role.name.substring(5))}</td>
                            <td>
                                <button type="button" class="btn btn-info" data-toggle="modal" id="buttonEdit"
                                data-action="edit" data-id="${user.id}" data-target="#edit">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger" data-toggle="modal" id="buttonDelete"
                                data-action="delete" data-id="${user.id}" data-target="#delete">Delete</button>
                            </td>
                        </tr>)`;
                table.append(usersTable);
            })
        })
}
