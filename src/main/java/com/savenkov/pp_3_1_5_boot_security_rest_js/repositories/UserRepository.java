package com.savenkov.pp_3_1_5_boot_security_rest_js.repositories;

import com.savenkov.pp_3_1_5_boot_security_rest_js.entities.User;

import java.util.List;


public interface UserRepository  {
    List<User> getAllUsers();
    void saveUser(User user);
    User getUser(Long id);
    void deleteUser(Long id);
    User findByUsername(String username);
}
