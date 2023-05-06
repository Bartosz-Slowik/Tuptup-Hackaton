package today.meetnow.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
import today.meetnow.model.dto.HostDto;

@Entity
@Table(name = "host")
@Getter
@Setter
public class HostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private EventEntity event;
}
