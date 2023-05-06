package today.meetnow.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import today.meetnow.config.registration.RegistrationFacade;
import today.meetnow.config.registration.dto.RegistrationRequest;
import today.meetnow.config.registration.dto.RegistrationResponse;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class RegistrationController {
    private final RegistrationFacade registrationFacade;

    @ApiOperation("Register to the movie-hub")
    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> registerUser (
            @RequestBody @Valid final RegistrationRequest registrationRequest) {

        RegistrationResponse response = registrationFacade.registerNewUser(registrationRequest);
        return ResponseEntity.ok(response);
    }
}