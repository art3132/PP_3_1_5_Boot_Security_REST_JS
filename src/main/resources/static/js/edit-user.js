$(async function() {
    editUser();
});
function editUser() {
    const editForm = document.forms["editUserForm"];
    editForm.addEventListener("submit", event => {
        event.preventDefault();
        let editUserRoles = [];
        for (let i = 0; i < editForm.roleSet.options.length; i++) {
            if (editForm.roleSet.options[i].selected) editUserRoles.push({
                name :  editForm.roleSet.options[i].text,
                role_Id : editForm.roleSet.options[i].value
            })
        }
        fetch("http://localhost:8080/api/users/" + editForm.id.value, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: editForm.id.value,
                name: editForm.name.value,
                surname: editForm.surname.value,
                city: editForm.city.value,
                age: editForm.age.value,
                username: editForm.username.value,
                password: editForm.password.value,
                roleSet: editUserRoles
            })
        }).then(() => {
            $('#editFormCloseButton').click();
            allUsersTable();
        })
    })
}