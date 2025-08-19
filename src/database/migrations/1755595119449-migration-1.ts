import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11755595119449 implements MigrationInterface {
    name = 'Migration11755595119449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."ad_sets_status_enum" AS ENUM('draft', 'active', 'paused', 'archived')`);
        await queryRunner.query(`CREATE TABLE "ad_sets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "targetingOptions" jsonb, "budget" numeric(10,2), "bidStrategy" character varying, "status" "public"."ad_sets_status_enum" NOT NULL DEFAULT 'draft', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "metaAdSetId" character varying, "campaignId" uuid NOT NULL, CONSTRAINT "PK_94c878d0598e5927e7043a26569" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."ad_creatives_type_enum" AS ENUM('image', 'video', 'carousel')`);
        await queryRunner.query(`CREATE TABLE "ad_creatives" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."ad_creatives_type_enum" NOT NULL DEFAULT 'image', "imageUrl" text, "videoUrl" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "prompt" text, "aiModel" character varying, "style" character varying, "userId" uuid NOT NULL, CONSTRAINT "PK_c5b210ffdc5003abe06a902a927" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."ads_status_enum" AS ENUM('draft', 'active', 'paused', 'archived')`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "status" "public"."ads_status_enum" NOT NULL DEFAULT 'draft', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "metaAdId" character varying, "adSetId" uuid NOT NULL, "adCopyId" uuid, "adCreativeId" uuid, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ad_copies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "headline" character varying NOT NULL, "primaryText" text NOT NULL, "description" character varying, "callToAction" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "prompt" text, "aiModel" character varying, "temperature" numeric(3,2), "userId" uuid NOT NULL, "campaignId" uuid, CONSTRAINT "PK_757f70df6c64f1abe6b9b5d1835" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."campaigns_objective_enum" AS ENUM('awareness', 'traffic', 'engagement', 'leads', 'app_promotion', 'sales')`);
        await queryRunner.query(`CREATE TYPE "public"."campaigns_status_enum" AS ENUM('draft', 'active', 'paused', 'archived')`);
        await queryRunner.query(`CREATE TABLE "campaigns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "objective" "public"."campaigns_objective_enum" NOT NULL DEFAULT 'traffic', "status" "public"."campaigns_status_enum" NOT NULL DEFAULT 'draft', "budget" numeric(10,2), "startDate" TIMESTAMP, "endDate" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "metaCampaignId" character varying, "userId" uuid NOT NULL, CONSTRAINT "PK_831e3fcd4fc45b4e4c3f57a9ee4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "metaAccessToken" character varying, "metaRefreshToken" character varying, "metaTokenExpiresAt" TIMESTAMP, "metaUserId" character varying, "metaAdAccountId" character varying, "refreshToken" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ad_sets" ADD CONSTRAINT "FK_308e787e9b85505ca65945829b4" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ad_creatives" ADD CONSTRAINT "FK_8672683bc46cf09bcf72257aca0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_7363b998ad5ca90d01dc890e59d" FOREIGN KEY ("adSetId") REFERENCES "ad_sets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_c4dfca95343716caf847209eb70" FOREIGN KEY ("adCopyId") REFERENCES "ad_copies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_2a312cc6557944c1b3051c57e4c" FOREIGN KEY ("adCreativeId") REFERENCES "ad_creatives"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ad_copies" ADD CONSTRAINT "FK_db21ee77041fa979b608d457456" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ad_copies" ADD CONSTRAINT "FK_5b7b2ddf89be8a4143ca35be6fc" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campaigns" ADD CONSTRAINT "FK_b6c738ef1561082d235dfc20b43" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campaigns" DROP CONSTRAINT "FK_b6c738ef1561082d235dfc20b43"`);
        await queryRunner.query(`ALTER TABLE "ad_copies" DROP CONSTRAINT "FK_5b7b2ddf89be8a4143ca35be6fc"`);
        await queryRunner.query(`ALTER TABLE "ad_copies" DROP CONSTRAINT "FK_db21ee77041fa979b608d457456"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_2a312cc6557944c1b3051c57e4c"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_c4dfca95343716caf847209eb70"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_7363b998ad5ca90d01dc890e59d"`);
        await queryRunner.query(`ALTER TABLE "ad_creatives" DROP CONSTRAINT "FK_8672683bc46cf09bcf72257aca0"`);
        await queryRunner.query(`ALTER TABLE "ad_sets" DROP CONSTRAINT "FK_308e787e9b85505ca65945829b4"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "campaigns"`);
        await queryRunner.query(`DROP TYPE "public"."campaigns_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."campaigns_objective_enum"`);
        await queryRunner.query(`DROP TABLE "ad_copies"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TYPE "public"."ads_status_enum"`);
        await queryRunner.query(`DROP TABLE "ad_creatives"`);
        await queryRunner.query(`DROP TYPE "public"."ad_creatives_type_enum"`);
        await queryRunner.query(`DROP TABLE "ad_sets"`);
        await queryRunner.query(`DROP TYPE "public"."ad_sets_status_enum"`);
    }

}
