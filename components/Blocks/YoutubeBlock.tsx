
const YoutubeBlock = (props: any) => {
    const { title, id} = props
    return (
        <div className={`__YoutubeBlock w-full aspect-video`}>
            <iframe
                width={`100%`}
                height={`100%`}
                src={"https://www.youtube.com/embed/" + id}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YoutubeBlock