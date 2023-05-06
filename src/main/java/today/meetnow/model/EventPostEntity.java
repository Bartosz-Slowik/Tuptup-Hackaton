package today.meetnow.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "EventPost")
public class EventPostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id")
    private Long userId;

    @JoinColumn(name = "event_id")
    private Long eventId;

    @Column(name = "image")
    private String image;

    @Column(name = "title")
    private String title;

    @Column(name = "created")
    private LocalDateTime created;
}
