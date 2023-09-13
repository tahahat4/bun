import figlet from "figlet" ;

const server = Bun.serve({
    port: 3030,
    fetch(request) {
      const body = figlet.textSync("Taha # First # Try")
      return new Response(body);
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);







