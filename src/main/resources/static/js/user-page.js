$(async function() {
    await getUserInformationPage();
});
async function getUserInformationPage() {
    fetch("http://localhost:8080/api/user-page")
        .then(res => res.json())
        .then(data => {
            $('#usernameHeader').append(data.username);
            let role = data.roleSet.map(role => " " + role.name.substring(5));
            $('#roleHeader').append(role);

            let user = `$( 
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.city}</td>
                <td>${data.age}</td>
                <td>${data.username}</td>
                <td>${role}</td>)`;
            $('#userPageBody').append(user);
        })
}



