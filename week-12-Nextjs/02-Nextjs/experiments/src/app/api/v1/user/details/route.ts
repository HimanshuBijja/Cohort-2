import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req : NextRequest){

    const {username, password, firstname, lastname} =  await req.json();
    // console.log(firstname)
    try{

        await prisma.users.create({
            data : {
                username,
                password,
                firstname,
                lastname
            }
        });
        return NextResponse.json({
            msg : "Created account"
            
        })
    }catch(e){
        return NextResponse.json({
            success : false,
            err : e instanceof Error ? e.message : String(e) 
        })
    }
}