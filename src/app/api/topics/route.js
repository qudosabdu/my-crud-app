import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topicModels";
import { NextResponse } from "next/server";

export async function POST( resquest){
    const { title, description } = request.body;
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created" });
}