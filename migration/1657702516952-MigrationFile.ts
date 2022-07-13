import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationFile1657702516952 implements MigrationInterface {
    name = 'MigrationFile1657702516952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "photo" (
                "id" SERIAL NOT NULL,
                "name" character varying(500) NOT NULL,
                "description" text NOT NULL,
                "filename" character varying NOT NULL,
                "filename2" character varying,
                "views" integer NOT NULL,
                "isPublished" boolean NOT NULL,
                CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "photo"
        `);
    }

}
