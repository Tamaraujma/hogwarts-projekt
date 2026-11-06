# Hogwarts API

# Endpoints

# Houses

- GET `/houses` – get all houses
- GET `/houses/:id` – get single house
- POST `/houses` – create new house
- PUT `/houses/:id` – update existing house
- DELETE `/houses/:id` – delete house

# Teachers

- GET `/teachers` – get all teachers
- GET `/teachers/:id` – get single teacher
- POST `/teachers` – create new teacher
- PUT `/teachers/:id` – update existing teacher
- DELETE `/teachers/:id` – delete teacher

# Students

- GET `/students` – get all students
- GET `/students/:id` – get single student
- POST `/students` – create new student
- PUT `/students/:id` – update existing student
- DELETE `/students/:id` – delete student

# Courses

- GET `/courses` – get all courses
- GET `/courses/:id` – get single course
- POST `/courses` – create new course
- PUT `/courses/:id` – update existing course
- DELETE `/courses/:id` – delete course
- GET `/courses/:courseId/students` – get students in a course
- POST `/courses/:courseId/students/:studentId` – add student to course
- DELETE `/courses/:courseId/students/:studentId` – remove student from course

# Sådan bruges endpoint-testene

1. Start serveren med: `npm run dev`
2. Åbn Bruno eller et andet API-test-værktøj.
3. Opret en request med den ønskede metode og route.
4. Sæt eventuelt JSON-data i body ved POST/PUT.
5. Tryk send og tjek statuskode og svar.

Eksempel:

- `GET http://localhost:3000/houses`
- `POST http://localhost:3000/students`

Body eksempel for student:

```json
{
  "name": "Harry Potter",
  "year": 1,
  "house": 1
}
```

Body eksempel for teacher:

```json
{
  "name": "Minerva McGonagall",
  "house": 1
}
```

Body eksempel for course:

```json
{
  "name": "Transfiguration",
  "teacher": 1
}
```
