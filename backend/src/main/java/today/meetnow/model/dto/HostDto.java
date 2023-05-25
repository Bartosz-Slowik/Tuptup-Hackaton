package today.meetnow.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class HostDto {
    private Long id;         // id ale jako encji host
    private String firstName;
    private String lastName;
    private String image;    // avatar
}

