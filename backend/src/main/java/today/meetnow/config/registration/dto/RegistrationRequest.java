package today.meetnow.config.registration.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class RegistrationRequest {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String image;
    private String phone_nr;
    private LocalDate dateOfBirth;
    private String password;
}
