<form class="search-container" name="searchTopics" action="{config.relative_path}/category/{../slug}" method="GET">
        <input class="search-box" type="text" placeholder="Search..." name="searchTopics">
        <button class="btn btn-default" type="submit" onClick="return getRecentPosts()">Submit</button>
</form>
<style>
.search-container {
    padding-top: 16px;
}

.search-box {
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 16px;
    white-space: nowrap;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 11px;
    line-height: 13px;
    
    &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;  
    }

    &:hover,
        &:focus {
            display: inline-block;
            white-space: nowrap;
            padding: 12px 0;
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            border-radius: 0;
        }
}
</style>