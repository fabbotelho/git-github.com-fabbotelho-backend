-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `categoria` VARCHAR(191) NULL,
    ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `estoque` INTEGER NULL,
    ADD COLUMN `imagem` VARCHAR(191) NULL;
