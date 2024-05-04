import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Company{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  name: string;

  @CreateDateColumn()
  createdAt : Date

  @Column({nullable:true})
  createdBy: number

  @UpdateDateColumn()
  updateddAt : Date;

  @Column({nullable:true})
  updatedBy: number

  @DeleteDateColumn()
  deleteddAt : Date

  @Column({nullable:true})
  deletedBy: number
}



