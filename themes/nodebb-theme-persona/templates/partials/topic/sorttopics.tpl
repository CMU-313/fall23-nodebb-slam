<div class="search-container" component="thread/sort">
    <button class="btn btn-search" data-toggle="search-container" type="button">
      <form name="searchTopics" action="{config.relative_path}/category/{../slug}" method="GET">
      <input type="text" class="related" data-sort="related" placeholder="Search..." name="searchTopics">
      </form>
    <button class="btn btn-default" type="submit" onClick="return getRecentPosts()">Submit</button>
</div>