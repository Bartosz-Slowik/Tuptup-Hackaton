package today.meetnow.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import today.meetnow.model.EventEntity;
import today.meetnow.model.EventPostEntity;
import today.meetnow.model.HostEntity;
import today.meetnow.model.ParticipantEntity;
import today.meetnow.model.dto.EventDto;
import today.meetnow.model.dto.EventPostDto;
import today.meetnow.model.dto.HostDto;
import today.meetnow.model.dto.ParticipantDto;
import today.meetnow.repository.*;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventService {

    private final ParticipantRepository participantRepository;
    private final EventRepository eventRepository;
    private final HostRepository hostRepository;
    private final EventPostRepository eventPostRepository;
    private final UserService userService;
    public List<EventDto> getParticipatedEvents() {
        var currentUserId = userService.getCurrentUserId();

        return eventRepository.findAllByUserId(currentUserId)
                .stream()
                .map(this::convertToEventDto)
                .collect(Collectors.toList());
    }
    public EventDto convertToEventDto(EventEntity eventEntity) {
        var hostDto = convertToHostDto(hostRepository.findByEventId(eventEntity.getId()).get());

        List<ParticipantDto> participantDtoList = participantRepository.findAllByEventId(eventEntity.getId())
                .stream()
                .map(this::convertToParticipantDto)
                .collect(Collectors.toList());

        List<EventPostDto> eventPostDtoList = eventPostRepository.findAllByEventId(eventEntity.getId())
                .stream()
                .map(this::convertToEventPostDto)
                .collect(Collectors.toList());

        return EventDto.builder()
                .id(eventEntity.getId())
                .startDate(eventEntity.getStartDate())
                .endDate(eventEntity.getEndDate())
                .title(eventEntity.getTitle())
                .description(eventEntity.getDescription())
                .type(eventEntity.getType())
                .image(eventEntity.getImage())
                .coordinates(eventEntity.getCoordinates().getCoordinates())
                .host(hostDto)
                .participants(participantDtoList)
                .posts(eventPostDtoList)
                .build();
    }
    public HostDto convertToHostDto(HostEntity hostEntity) {
        var hostPersonalData = userService.getUserPersonalData(hostEntity.getUser().getId());

        return HostDto.builder()
                .id(hostEntity.getId())
                .firstName(hostPersonalData.getFirstName())
                .lastName(hostPersonalData.getLastName())
                .image(hostPersonalData.getImage())
                .build();
    }
    private ParticipantDto convertToParticipantDto(ParticipantEntity participantEntity) {
        var personalData = userService.getUserPersonalData(participantEntity.getUser().getId());

        return ParticipantDto.builder()
                .id(participantEntity.getId())
                .firstName(personalData.getFirstName())
                .lastName(personalData.getLastName())
                .image(personalData.getImage())
                .build();
    }
    private EventPostDto convertToEventPostDto(EventPostEntity ent) {
        return EventPostDto.builder()
                .id(ent.getId())
                .userId(ent.getUserId())
                .image(ent.getImage())
                .title(ent.getTitle())
                .build();
    }
//    private PointDto convertToPointDto(Point point) {
//        return new PointDto(point.getCoordinates());
//        var x = point.getCoordinates()
//    }

}
