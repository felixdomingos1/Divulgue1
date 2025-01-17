import { Admin } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IAdminRepositoryDTO, ICreateAdminDTO } from "../IAdminRepository";

class AdminRepository implements IAdminRepositoryDTO {
    constructor() { }

    async findAdminByEmail(email: string): Promise<Admin | null> {
        if (!email) return null
        return await prisma.admin.findUnique({ where: { email }})
    }

    async create(data: ICreateAdminDTO): Promise<Admin> {
        return await prisma.admin.create({ data : data })
    }

    async findAll(): Promise<Admin[]> {

        return await prisma.admin.findMany()
    }

    async findById(id: number): Promise<Admin | null> {
        if (!id)  return null

        return await prisma.admin.findFirst({ where: { id }})
    }

}

export { AdminRepository }