$(async function() {
    deleteUser();
});
function deleteUser(){
    const deleteForm = document.forms["deleteUserForm"];
    deleteForm.addEventListener("submit", event => {
        event.preventDefault();
        fetch("http://localhost:8080/api/users/" + deleteForm.id.value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
                $('#deleteFormCloseButton').click();
                allUsersTable();
            })
    })
}
