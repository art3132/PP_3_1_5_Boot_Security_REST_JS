package com.savenkov.pp_3_1_5_boot_security_rest_js.repositories;

import com.savenkov.pp_3_1_5_boot_security_rest_js.entities.Role;

import java.util.List;

public interface RoleRepository{
    Role getRole(String name);

    Role getRoleById(Long id);

    Role getRoleByName(String name);

    List<Role> listAllRoles();

    void addRole(Role role);
}
