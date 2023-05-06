package today.meetnow.exception;

public class ObjectWithImdbIdNotFound extends RuntimeException {
    public ObjectWithImdbIdNotFound(String message) {
        super(message);
    }
    public String getMessage() {
        return super.getMessage();
    }
}
