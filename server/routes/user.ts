import {
  FastifyInstance,
  RouteOptions,
  RouteShorthandOptionsWithHandler,
} from "fastify";

const getUserOpts: RouteShorthandOptionsWithHandler = {
  schema: {
    params: {
      type: "object",
      properties: {
        userId: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          data: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              age: { type: "integer" },
            },
          },
        },
      },
    },
  },
  async handler(req, reply) {
    const { userId } = req.params;
    if (!userId) {
      return reply.code(400).send({
        message: "error",
      });
    } else {
      return reply.send({
        message: "Success",
        data: { id: userId, name: "Hello", age: 10 },
      });
    }
  },
};
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 */
async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users/:userId", getUserOpts);
  fastify.get("/test", async (request, reply) => {
    return reply.send({ hello: "world" });
  });
}

export default userRoutes;
