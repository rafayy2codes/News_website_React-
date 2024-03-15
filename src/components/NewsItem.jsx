
export const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src || 'fallback_image_url'} style={{ height: "200px", width: "300px" }} className="card-img-top" alt="News" />
            <div className="card-body">
                <h5 className="card-title">{title && title.length > 50 ? `${title.slice(0, 50)}...` : title}</h5>
                <p className="card-text">{description ? `${description.slice(0, 90)}...` : "News"}</p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
}
