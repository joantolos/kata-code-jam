package com.joantolos.meetup;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

public class MeetUpParserTest {

    public final String MEETUP_JSON_FILE = "/meetUps.json";
    public final String EXPECTED_OUTPUT_JSON = "/expectedMeetUps.json";

    @Test
    public void shouldParseToJson() throws IOException {
        String inputJSON = new String(Objects.requireNonNull(MeetUpParserTest.class.getResourceAsStream(MEETUP_JSON_FILE)).readAllBytes(), StandardCharsets.UTF_8);
        String expectedOutputJSON = new String(Objects.requireNonNull(MeetUpParserTest.class.getResourceAsStream(EXPECTED_OUTPUT_JSON)).readAllBytes(), StandardCharsets.UTF_8).replace("\n", "");
        Assertions.assertEquals(expectedOutputJSON, new MeetUpParser().parseToJson(inputJSON));
    }
}
