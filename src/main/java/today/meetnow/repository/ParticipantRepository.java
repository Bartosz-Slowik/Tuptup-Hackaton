package today.meetnow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.meetnow.model.ParticipantEntity;

import java.util.List;

@Repository
public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
    List<ParticipantEntity> findAllByUserId(Long userId);
    List<ParticipantEntity> findAllByEventId(Long eventId);
}
