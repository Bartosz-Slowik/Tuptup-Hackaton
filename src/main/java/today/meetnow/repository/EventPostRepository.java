package today.meetnow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.meetnow.model.EventPostEntity;

import java.util.List;

@Repository
public interface EventPostRepository extends JpaRepository<EventPostEntity, Long> {
    List<EventPostEntity> findAllByEventId(Long eventId);
}
