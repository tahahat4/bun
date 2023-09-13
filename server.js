import figlet from "figlet" ;
import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'Hello world' as message;");

let res = query.get()












const server = Bun.serve({
    port: 3030,
    fetch(request) {
      const body = figlet.textSync(JSON.stringify(res))
      return new Response(body);
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);







