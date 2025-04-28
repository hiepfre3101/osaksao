import Fastify from "fastify"
import fastifyIO from 'fastify-socket.io';
import userRoutes from "./routes/user";
const app = Fastify({logger:true})
app.get('/ping', async (request, reply)=>{
    return 'pong\n'
})
app.ready().then(()=>{
    
})
app.register(fastifyIO);
app.register(userRoutes,{
    logSerializers:{
        userRoutes:(value) => `My user - ${value.name}`
    },
    logLevel:'warn'
});
app.listen({port:8080},(err, addr)=>{
    if(err){
        console.error(err)
        process.exit(1)
    }
  console.log('Server listening!')
})