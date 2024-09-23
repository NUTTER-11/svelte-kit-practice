import { comments } from "$lib/comments.js";
import { json } from '@sveltejs/kit'
import { request } from "http";

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    return json(comment)

}
export async function PATCH(requestEvent) {
    const { request, params } = requestEvent
    const { commentId } = params
    const { text } = await request.json();
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    comment.text = text;
    return json(comment);
}
export async function DELETE(requestEvent) {
    const { params } = requestEvent
    const { commentId } = params
    const deletedcomment = comments.find((comment) => comment.id === parseInt(commentId))
    const index =comments.findIndex((comment) => comment.id === parseInt(commentId))
    comments.splice(index,1)
    return json(deletedcomment)

}

