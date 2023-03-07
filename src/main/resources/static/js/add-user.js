$(async function() {
    await getNewUser();
});
async function getNewUser() {
    await fetch("http://localhost:8080/api/roles")
        .then(res => res.json())
        .then(roles => {
            roles.forEach(role => {
                let elements = document.createElement("option");
                elements.text = role.name.substring(5);
                elements.value = role.role_Id;
                $('#newUserRoles')[0].appendChild(elements);
            })
        })

    const form = document.forms["newUserForm"];
    form.addEventListener('submit', addNewUser)
    function addNewUser(event) {
        event.preventDefault();
        let newUserRoles = [];
        for (let i = 0; i < form.roleSet.options.length; i++) {
            if (form.roleSet.options[i].selected) newUserRoles.push({
                name : form.roleSet.options[i].name,
                role_Id : form.roleSet.options[i].value,

            })
        }
        fetch("http://localhost:8080/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                surname: form.surname.value,
                city: form.city.value,
                age: form.age.value,
                username: form.username.value,
                password: form.password.value,
                roleSet: newUserRoles
            })
        }).then(() => {
            form.reset();
            allUsersTable();
            $('#allUsersTable').click();
        })
    }

}
