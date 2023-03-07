$('#edit').on('show.bs.modal', event => {
    let button = $(event.relatedTarget);
    let id = button.data('id');
    showEditPage(id);
})
async function showEditPage(id) {
    $('#editUserRoles').empty();
    let user = await getUser(id);
    let form = document.forms["editUserForm"];
    form.id.value = user.id;
    form.name.value = user.name;
    form.surname.value = user.surname;
    form.city.value = user.city;
    form.age.value = user.age;
    form.username.value = user.username;
    form.password.value = user.password;

    await fetch("http://localhost:8080/api/roles")
        .then(res => res.json())
        .then(roles => {
            roles.forEach(role => {
                let selectedRole = false;
                for (let i = 0; i < user.roleSet.length; i++) {
                    if (user.roleSet[i].name === role.name) {
                        selectedRole = true;
                        break;
                    }
                }
                let element = document.createElement("option");
                element.text = role.name.substring(5);
                element.value = role.role_Id;
                if (selectedRole) element.selected = true;
                $('#editUserRoles')[0].appendChild(element);
            })
        })
}

