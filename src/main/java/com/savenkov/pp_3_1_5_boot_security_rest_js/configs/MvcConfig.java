package com.savenkov.pp_3_1_5_boot_security_rest_js.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/login").setViewName("/index");
        registry.addViewController("/user-page").setViewName("user-page");
        registry.addViewController("/admin-panel").setViewName("admin-panel");

    }
}
