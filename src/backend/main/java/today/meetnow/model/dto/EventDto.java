package today.meetnow.model.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;

import java.util.Date;
import java.util.List;


@Getter
@Setter
public class EventDto {
    private Long id;
    private Date startDate;
    private Date endDate;
    private String title;
    private String description;
    private String type;
    private String image;
    private Point coordinates;
    private HostDto host;
    private List<ParticipantDto> participants;
    private List<EventPostDto> posts;
}