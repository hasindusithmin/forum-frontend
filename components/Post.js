

export default function Post({ src, alt }) {
    return (
        <div className="w3-card-4 w3-margin w3-white">
            <div className="w3-border w3-padding w3-center">
                <img src={src} alt={alt} style={{width:'50%'}}    />
            </div>
            <div className="w3-padding">
                
            </div>
            <div className="w3-padding">
                <textarea className="w3-input w3-border" name="comment" type="text" placeholder="Add.." />
                <button className="w3-button w3-block">Add +</button>
            </div>
        </div>
    )
}