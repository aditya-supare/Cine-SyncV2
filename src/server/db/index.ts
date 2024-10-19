import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts } from "./schema";
import * as schema from "./schema";


const sql = postgres({
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,    
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,    
    ssl: 'require'
  });
  

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  const selectResult = await db.select().from(posts);
  console.log("Results", selectResult);
  return selectResult;
};

export type NewUser = typeof posts.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return db.insert(posts).values(user).returning();
};

export const getUsers2 = async () => {
  const result = await db.query.posts.findMany();
  return result;
};

