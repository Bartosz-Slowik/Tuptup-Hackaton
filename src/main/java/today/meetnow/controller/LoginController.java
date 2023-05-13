package today.meetnow.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import today.meetnow.config.auth.AuthenticationRequest;

@RestController
public class LoginController {
    @ApiOperation("Log in and gain access to all your ratings")
    @PostMapping("/login")
    public void login (@RequestBody AuthenticationRequest credentials) {}
}