package today.meetnow.model;


import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Table(name = "event")
@Entity
@Getter
@Setter
public class EventEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "image")
    private String image;

    @Column(name = "coordinates", columnDefinition = "Point")
    private Point coordinates;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;
}
