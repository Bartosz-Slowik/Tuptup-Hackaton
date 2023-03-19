FROM openjdk:11-jdk-slim AS build
WORKDIR /workspace
COPY . /workspace/
RUN ./mvnw package -DskipTests

FROM openjdk:11-jdk-slim
COPY --from=build /workspace/target/MeetNow-0.0.1-SNAPSHOT.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]