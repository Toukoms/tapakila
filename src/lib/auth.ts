"use server";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET_KEY as string;
const key = new TextEncoder().encode(secretKey);

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

async function encrypt(payload: UserPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

async function decrypt(token: string) {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ["HS256"],
  });
  return payload as UserPayload;
}

export async function login(user: UserPayload) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt(user);
  const cookieStore = await cookies();
  cookieStore.set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) return null;
  const userSession = await decrypt(session.value);
  const res = await fetch(BASE_URL + "/users/" + userSession.id);
  if (res.status == 200) {
    return (await res.json()) as UserProps;
  }
  return null;
}
