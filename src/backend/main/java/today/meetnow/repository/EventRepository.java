package today.meetnow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.meetnow.model.EventEntity;
import today.meetnow.model.enums.Type;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
    List<EventEntity> findAllByTitle(String title);
    List<EventEntity> findAllByType(Type type);
    List<EventEntity> findAllByTypeAndTitle(Type type, String title);
}
