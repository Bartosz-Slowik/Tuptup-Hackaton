package today.meetnow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import today.meetnow.model.UserPersonalDataEntity;

import java.util.Optional;

@Repository
public interface UserPersonalDataRepository extends JpaRepository<UserPersonalDataEntity, Long> {
    Optional<UserPersonalDataEntity> findByUserId(Long id);

    @Query("SELECT p FROM UserPersonalDataEntity p JOIN p.user u WHERE u.username = :username")
    Optional<UserPersonalDataEntity> findByUsername(@Param("username") String username);
}
