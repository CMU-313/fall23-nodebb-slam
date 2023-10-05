<form name="searchTopics" style = "display:inline" action="{config.relative_path}/category/{../slug}" method="GET">
        <input class="search-box" type="text" placeholder="Search..." name="searchTopics">
        <button class="btn btn-default" type="submit" onClick="return getRecentPosts()">Submit</button>
</form>
<style>
.search-container {
    padding-top: -20px;
}

.search-box {
    display: inline;
    margin-bottom: 0;
    background-color: transparent;
    font-size: 11px;
    line-height: 13px;
    padding: 12px;
    outline: 0;
    text-transform: uppercase;
    letter-spacing: 1.5px; 
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
}
</style>