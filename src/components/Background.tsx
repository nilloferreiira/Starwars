import Image from "next/image";

export function Background() {
    return (
        <div className="-z-50 object-cover opacity-30">
            <Image src={"https://www.pixelstalk.net/wp-content/uploads/images6/Star-Wars-Space-Background-HD.png"} alt={"background"} fill />
        </div>
    )
}