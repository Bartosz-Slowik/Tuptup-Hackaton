package today.meetnow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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

}
