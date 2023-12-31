// import { rest } from "msw";
import { http, HttpResponse } from "msw";
const todos = ["먹기", "자기", "놀기"];

// export const handlers = [
//   // 할일 목록
//   rest.get("/todos", (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(todos));
//   }),

//   // 할일 추가
//   rest.post("/todos", (req, res, ctx) => {
//     todos.push(req.body);
//     return res(ctx.status(201));
//   }),
// ];

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get("/todos", () => {
    return HttpResponse.json(todos);
  }),

  http.post("/todos", async ({ request }) => {
    // Read the request body as JSON.
    const user = await request.text();
    console.log(user);
    todos.push(user);
    return HttpResponse.json(todos);
  }),

  // http.post("/todos", (req) => {
  //   const data = req.body;
  //   console.log(data);
  //   // const email = data.get('email')
  //   // if (email !== 'test@example.com') {
  //   //   return HttpResponse.json({ success: false }, { status: 401 })
  //   // }
  //   return HttpResponse.json({ success: true });
  // }),
];
