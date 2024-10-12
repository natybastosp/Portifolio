import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Italy" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "RB", base: "Faenza, Italy" },
  { id: 8, name: "Kick Sauber", base: "Hinwil, Switzerland" },
  { id: 9, name: "Haas", base: "Kannapolis, United States" },
  { id: 10, name: "Williams", base: "Grove, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Charles Leclerc", team: "Ferrari" },
  { id: 2, name: "Carlos Sainz", team: "Ferrari" },
  { id: 3, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 4, name: "George Russel", team: "Mercedes" },
  { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 6, name: "Sergio Perez", team: "Red Bull Racing" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Sebastian Vettel", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Esteban Ocon", team: "Alpine" },
  { id: 12, name: "Pierre Gasly", team: "Alpine" },
  { id: 13, name: "Yuki Tsunoda", team: "RB" },
  { id: 14, name: "Liam Lawson", team: "RB" },
  { id: 15, name: "Valtteri Bottas", team: "Kick Sauber" },
  { id: 16, name: "Zhou Guanyu", team: "Kick Sauber" },
  { id: 17, name: "Nico Hulkenberg", team: "Haas" },
  { id: 18, name: "Kevin Magnussen", team: "Haas" },
  { id: 19, name: "Nicholas Latifi", team: "Williams" },
  { id: 20, name: "Alex Albon", team: "Williams" },
  { id: 21, name: "Franco Colapinto", team: "Williams" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return teams;
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);

  return drivers;
});

interface driverParams {
  id: string;
}

server.get<{ Params: driverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);

    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server is running on port 3333");
});
