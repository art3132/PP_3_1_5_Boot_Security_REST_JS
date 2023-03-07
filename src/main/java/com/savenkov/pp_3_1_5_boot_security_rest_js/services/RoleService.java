package com.savenkov.pp_3_1_5_boot_security_rest_js.services;

import com.savenkov.pp_3_1_5_boot_security_rest_js.entities.Role;

import java.util.List;

public interface RoleService {

    List<Role> getAllRoles();

    Role getRole(String name);

    Role getRoleById(Long id);

    void addRole(Role role);

}
