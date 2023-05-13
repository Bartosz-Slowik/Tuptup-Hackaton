package today.meetnow.config.registration;


import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import today.meetnow.config.registration.dto.RegistrationRequest;
import today.meetnow.config.registration.dto.RegistrationResponse;
import today.meetnow.exception.UserAlreadyExistsException;
import today.meetnow.model.UserEntity;
import today.meetnow.model.UserPersonalDataEntity;
import today.meetnow.repository.UserPersonalDataRepository;
import today.meetnow.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class RegistrationFacade {

    private final UserRepository userRepository;
    private final UserPersonalDataRepository userPersonalDataRepository;
    private final PasswordEncoder passwordEncoder;


    public RegistrationResponse registerNewUser(RegistrationRequest registrationRequest) {

        if (userRepository.existsByUsername(registrationRequest.getUsername())) {
            throw new UserAlreadyExistsException(String.format("User of username %s already exists",
                    registrationRequest.getUsername()));
        }
        UserEntity user = new UserEntity();
        user.setUsername(registrationRequest.getUsername());
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        UserEntity savedUser = userRepository.save(user);

        UserPersonalDataEntity userPersonalData = new UserPersonalDataEntity();
        userPersonalData.setUser(savedUser);
        userPersonalData.setFirstName(registrationRequest.getFirstName());
        userPersonalData.setLastName(registrationRequest.getLastName());
        userPersonalData.setImage(registrationRequest.getImage());
        userPersonalData.setDateOfBirth(registrationRequest.getDateOfBirth());
        userPersonalData.setPhoneNr(userPersonalData.getPhoneNr());

        userPersonalDataRepository.save(userPersonalData);

        //TODO: input data validation
        return RegistrationResponse.ofUserEntity(savedUser);

    }

}
