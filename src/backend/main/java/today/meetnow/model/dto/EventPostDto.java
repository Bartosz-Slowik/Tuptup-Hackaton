package today.meetnow.model.dto;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class EventPostDto {

    private Long id;
    private Long userId;
    private String image;
    private String title;
}
