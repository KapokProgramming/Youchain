/* eslint-disable @next/next/no-img-element */
const Comment = (props: any) => {
    return (
        <>
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
                <img src={props.profilePic} className="h-10 w-10" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{props.name}</p>
                        </div>
                    </div>
            </div>
            <p className="-mt-4 text-gray-500">{props.comment}</p>
        </div>
        </>
    );
}

export default Comment;