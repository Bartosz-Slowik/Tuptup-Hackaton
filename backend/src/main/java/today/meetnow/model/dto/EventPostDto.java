package today.meetnow.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Builder
public class EventPostDto {

    private Long id;
    private Long userId;
    private String image;
    private String title;
}
