import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
};

declare module "next-auth" {
	interface session {
		user: ExtendedUser;
	}
	interface User {
		role: "ADMIN" | "USER";
	}
}
