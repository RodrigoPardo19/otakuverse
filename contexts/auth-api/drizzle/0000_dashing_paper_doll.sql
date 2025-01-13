CREATE SCHEMA "auth";
--> statement-breakpoint
CREATE TABLE "auth"."accounts_roles" (
	"account_id" uuid,
	"role_id" uuid
);
--> statement-breakpoint
CREATE TABLE "auth"."account_status" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "auth"."accounts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(255),
	"password" text,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"nick_name" varchar(255),
	"thumbnail" varchar(255),
	"about_me" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"status_id" uuid,
	"context_id" uuid,
	CONSTRAINT "email_context_unique" UNIQUE("email","context_id")
);
--> statement-breakpoint
CREATE TABLE "auth"."contexts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "auth"."permissions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "auth"."roles_permissions" (
	"role_id" uuid,
	"permission_id" uuid
);
--> statement-breakpoint
CREATE TABLE "auth"."roles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "auth"."accounts_roles" ADD CONSTRAINT "accounts_roles_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "auth"."accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth"."accounts_roles" ADD CONSTRAINT "accounts_roles_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "auth"."roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth"."accounts" ADD CONSTRAINT "accounts_status_id_account_status_id_fk" FOREIGN KEY ("status_id") REFERENCES "auth"."account_status"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth"."accounts" ADD CONSTRAINT "accounts_context_id_contexts_id_fk" FOREIGN KEY ("context_id") REFERENCES "auth"."contexts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth"."roles_permissions" ADD CONSTRAINT "roles_permissions_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "auth"."roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth"."roles_permissions" ADD CONSTRAINT "roles_permissions_permission_id_permissions_id_fk" FOREIGN KEY ("permission_id") REFERENCES "auth"."permissions"("id") ON DELETE no action ON UPDATE no action;