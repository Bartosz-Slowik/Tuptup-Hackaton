package today.meetnow.model.enums;

public enum Type {
    PARTY("Party"),
    SPORT("Sport"),
    EVENT("Event");

    private String type;
    Type(String type) {
        this.type = type;
    }
}
