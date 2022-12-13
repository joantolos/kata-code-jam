package com.joantolos.meetup;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MeetUpParser {

    public String parseToJson(String inputJson) throws IOException {
        return new ObjectMapper().writeValueAsString(new Contract.Output(
            new ObjectMapper().readValue(inputJson, Contract.Input.class).input()
                .stream()
                .map(meetUp -> {
                    List<Contract.Location> locations = meetUp.location();
                    List<String> parsedLocations = new ArrayList<>();
                    for (int i = 0; i < locations.size(); i++) {
                        Contract.Location location = locations.get(i);
                        boolean isNextCountryTheSame = i + 1 < locations.size() && locations.get(i + 1) != null && locations.get(i + 1).country().equals(location.country());
                        parsedLocations.add(
                            (location.city() != null ? location.city() : "") + (location.state() == null && location.city() != null ? (!isNextCountryTheSame ? ", " : "") : "") +
                            ((location.state() != null && location.city() != null ? ", " : "") + (location.state() != null ? location.state() + (location.city() != null ? ". " : ", ") : "")) +
                            (!isNextCountryTheSame ? location.country() : "")
                        );
                    }
                    return (meetUp.edition() != null ? meetUp.edition() + " " : "") +
                        meetUp.name() + " · " +
                        meetUp.startDate() +
                        (meetUp.endDate() != null ? " / " + meetUp.endDate() + " · " : " · ") +
                        String.join(" | ", parsedLocations);
                }).collect(Collectors.toList())
        ));
    }
}

interface Contract {
    record Input(List<MeetUp> input) { }
    record MeetUp(String edition, String name, String startDate, String endDate, List<Location> location) { }
    record Location(String city, String state, String country) { }
    @JsonInclude(JsonInclude.Include.NON_NULL)
    record Output(List<String> meetUps) { }
}

