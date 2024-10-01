CREATE TABLE IF NOT EXISTS "Canal" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL
);
--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "Programa" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL,
	"categoria" text NOT NULL,
	"tipo" text NOT NULL
);
--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "Guia" (
	"id" serial PRIMARY KEY NOT NULL,
	"canalId" integer NOT NULL,
	"programaId" integer NOT NULL,
	"fecha" timestamp NOT NULL,
	"hora" timestamp NOT NULL,
	"escalaRating" text
);
--> statement-breakpoint

DO $$ BEGIN
 ALTER TABLE "Guia" ADD CONSTRAINT "Guia_canalId_Canal_id_fk" FOREIGN KEY ("canalId") REFERENCES "public"."Canal"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint

DO $$ BEGIN
 ALTER TABLE "Guia" ADD CONSTRAINT "Guia_programaId_Programa_id_fk" FOREIGN KEY ("programaId") REFERENCES "public"."Programa"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
