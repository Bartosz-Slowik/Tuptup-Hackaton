package today.meetnow.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ParticipantDto {
    private Long id;         // id ale jako encji participant
    private String firstName;
    private String lastName;
    private String image;    // avatar
}
