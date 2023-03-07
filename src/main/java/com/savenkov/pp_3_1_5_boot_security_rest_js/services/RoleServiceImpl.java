package com.savenkov.pp_3_1_5_boot_security_rest_js.services;

import com.savenkov.pp_3_1_5_boot_security_rest_js.entities.Role;
import com.savenkov.pp_3_1_5_boot_security_rest_js.repositories.RoleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.listAllRoles();
    }


    @Override
    public Role getRole(String name) {
        return roleRepository.getRole(name);
    }

    @Override
    @Transactional
    public void addRole(Role role) {
        roleRepository.addRole(role);
    }

    @Override
    public Role getRoleById(Long id) {
        return roleRepository.getRoleById(id);
    }
}
