package today.meetnow.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import today.meetnow.model.dto.EventDto;
import today.meetnow.model.dto.SearchFiltersDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/memories/")
@CrossOrigin
public class MemoriesController {
    @GetMapping
    public List<EventDto> getMemories(@RequestBody SearchFiltersDto searchFilters) {
        throw new IllegalStateException("Not implemented yet!");
        //TODO: create and use service for retrieving memories by given search filters
    }
}
