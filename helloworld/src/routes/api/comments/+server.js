import { comments } from "../../../lib/comments";
import {json } from '@sveltejs/kit'

export function GET(){
    return json(comments)
//     return new Response(JSON.stringify(comments),

// {
//     headers:{
//         'Contrnt-Type':'application/json'
//     }
// })
}

export async function POST(requestEvent) {
    const {request} =requestEvent;
    const {text }=await request.json()
    const newcomment={
        id:comments.length+1,
        text
    }
    comments.push(newcomment)
    return json((newcomment),{status:201})
}